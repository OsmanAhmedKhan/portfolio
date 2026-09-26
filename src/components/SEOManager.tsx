import { useEffect } from 'react';
import { useLocation } from 'react-router';
import rawSeoData from '@/seo-data.json';

interface DynamicResumeData {
  name: string;
  links: string[];
  summary: string;
  education: string;
  skills: string[];
  projects: string[];
  experience: string;
  certifications: string[];
  keywords: string;
}

const seoData: DynamicResumeData = rawSeoData;
const BANNER_IMAGE_URL =
  'https://raw.githubusercontent.com/OsmanAhmedKhan/OsmanAhmedKhan/refs/heads/main/Banner.jpg';

export function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const baseUrl = window.location.origin;
    const canonicalUrl = `${baseUrl}${pathname === '/' ? '' : pathname}`;
    const personName = (seoData.name || 'Osman Ahmed Khan')
      .replace(/[^a-zA-Z\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const dynamicRoutes: Record<string, { title: string; description: string }> = {
      '/': {
        title: `${personName} | Portfolio`,
        description: seoData.summary,
      },
      '/work': {
        title: `Work & Projects | ${personName}`,
        description: seoData.projects.join(' ').slice(0, 300) || seoData.summary,
      },
      '/experience': {
        title: `Experience & Education | ${personName}`,
        description: `${seoData.experience} ${seoData.education}`.trim().slice(0, 300) || seoData.summary,
      },
      '/resume': {
        title: `Resume | ${personName}`,
        description: `${seoData.summary} Skills: ${seoData.skills.join(', ')}`.slice(0, 300),
      },
      '/contact': {
        title: `Contact | ${personName}`,
        description: `Get in touch with ${personName} — ${seoData.links.join(' | ')}`,
      },
    };

    const isKnownRoute = Boolean(dynamicRoutes[pathname]);
    const activeMeta = dynamicRoutes[pathname] || {
      title: `404 | ${personName}`,
      description: seoData.summary,
    };

    document.title = activeMeta.title;

    const upsertMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    upsertMeta('name', 'title', activeMeta.title);
    upsertMeta('name', 'description', activeMeta.description);
    upsertMeta('name', 'keywords', seoData.keywords);
    upsertMeta('name', 'author', personName);
    upsertMeta(
      'name',
      'robots',
      isKnownRoute
        ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        : 'noindex, nofollow',
    );

    upsertMeta('property', 'og:type', 'profile');
    upsertMeta('property', 'og:title', activeMeta.title);
    upsertMeta('property', 'og:description', activeMeta.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:site_name', personName);
    upsertMeta('property', 'og:image', BANNER_IMAGE_URL);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', activeMeta.title);
    upsertMeta('name', 'twitter:description', activeMeta.description);
    upsertMeta('name', 'twitter:url', canonicalUrl);
    upsertMeta('name', 'twitter:image', BANNER_IMAGE_URL);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', isKnownRoute ? canonicalUrl : `${baseUrl}/`);

    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }

    const dynamicSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: personName,
        description: seoData.summary,
        url: `${baseUrl}/`,
        image: BANNER_IMAGE_URL,
        ...(seoData.skills.length > 0 ? { knowsAbout: seoData.skills } : {}),
        ...(seoData.certifications.length > 0
          ? {
              hasCredential: seoData.certifications.map((cert: string) => ({
                '@type': 'EducationalOccupationalCredential',
                name: cert,
              })),
            }
          : {}),
        ...(seoData.links.length > 0 ? { sameAs: seoData.links } : {}),
      },
    };

    jsonLdScript.textContent = JSON.stringify(dynamicSchema);
  }, [pathname]);

  return null;
}