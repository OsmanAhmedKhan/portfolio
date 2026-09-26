import fs from 'node:fs';
import path from 'node:path';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const SITE_URL = process.env.SITE_URL || 'https://osmankhan.pages.dev';
const RESUME_PATH = path.resolve('public/resume.pdf');
const APP_TSX_PATH = path.resolve('src/App.tsx');
const LLMS_PATH = path.resolve('public/llms.txt');
const SITEMAP_PATH = path.resolve('public/sitemap.xml');
const ROBOTS_PATH = path.resolve('public/robots.txt');
const SEO_JSON_PATH = path.resolve('src/seo-data.json');
const LEGACY_PUBLIC_JSON_PATH = path.resolve('public/seo-data.json');

function discoverRoutesFromApp() {
  if (!fs.existsSync(APP_TSX_PATH)) return ['/'];
  const appCode = fs.readFileSync(APP_TSX_PATH, 'utf-8');
  const routeMatches = [...appCode.matchAll(/path=["']([^*"']+)["']/g)];
  const routes = routeMatches.map((m) => m[1]).filter((r) => r.startsWith('/'));
  return Array.from(new Set(['/', ...routes]));
}

async function syncAllSEO() {
  // Remove old public/seo-data.json if it exists so it is never exposed publicly
  if (fs.existsSync(LEGACY_PUBLIC_JSON_PATH)) {
    fs.unlinkSync(LEGACY_PUBLIC_JSON_PATH);
  }

  if (!fs.existsSync(RESUME_PATH)) {
    console.warn('⚠️ public/resume.pdf not found. Skipping SEO generation.');
    return;
  }

  const data = new Uint8Array(fs.readFileSync(RESUME_PATH));
  const pdf = await getDocument({
    data,
    useSystemFonts: true,
    disableFontFace: true,
    verbosity: 0,
  }).promise;

  const lines = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    const items = content.items
      .filter((item) => 'str' in item && item.str.trim().length > 0)
      .map((item) => ({
        str: item.str,
        x: item.transform[4],
        y: item.transform[5],
      }));

    items.sort((a, b) => b.y - a.y);

    const buckets = [];
    for (const item of items) {
      const existingBucket = buckets.find((b) => Math.abs(b.y - item.y) <= 4);
      if (existingBucket) {
        existingBucket.items.push(item);
      } else {
        buckets.push({ y: item.y, items: [item] });
      }
    }

    for (const bucket of buckets) {
      bucket.items.sort((a, b) => a.x - b.x);
      const lineText = bucket.items
        .map((it) => it.str)
        .join(' ')
        .replace(/\s+-\s*/g, '-')
        .replace(/\s+/g, ' ')
        .trim();
      if (lineText) {
        lines.push(lineText);
      }
    }
  }

  const sections = {
    HEADER: [],
    SUMMARY: [],
    EDUCATION: [],
    SKILLS: [],
    PROJECTS: [],
    EXPERIENCE: [],
    CERTIFICATIONS: [],
  };

  let currentSection = 'HEADER';

  for (const line of lines) {
    const cleanLine = line.trim();

    if (/^SUMMARY$/i.test(cleanLine)) {
      currentSection = 'SUMMARY';
      continue;
    }
    if (/^EDUCATION$/i.test(cleanLine)) {
      currentSection = 'EDUCATION';
      continue;
    }
    if (/^TECHNICAL SKILLS$/i.test(cleanLine)) {
      currentSection = 'SKILLS';
      continue;
    }
    if (/^PROJECTS$/i.test(cleanLine)) {
      currentSection = 'PROJECTS';
      continue;
    }
    if (/^EXPERIENCE$/i.test(cleanLine)) {
      currentSection = 'EXPERIENCE';
      continue;
    }
    if (/^CERTIFICATIONS(\s*&\s*ACHIEVEMENTS)?$/i.test(cleanLine)) {
      currentSection = 'CERTIFICATIONS';
      continue;
    }

    sections[currentSection].push(cleanLine);
  }

  const headerText = sections.HEADER.join(' ');
  const rawLinks =
    headerText.match(/(?:https?:\/\/)?(?:www\.)?(?:linkedin\.com|github\.com)\/[^\s·•|]+/gi) || [];
  const links = rawLinks.map((u) => (u.startsWith('http') ? u : `https://${u}`));

  const firstHeaderLine = sections.HEADER[0] || '';
  const name = firstHeaderLine
    .replace(/[^a-zA-Z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const summary = sections.SUMMARY.join(' ').replace(/\s+/g, ' ').trim();
  const education = sections.EDUCATION.join(' ').replace(/\s+/g, ' ').trim();
  const rawProjects = sections.PROJECTS.join(' ').replace(/\s+/g, ' ').trim();
  const experience = sections.EXPERIENCE.join(' ').replace(/\s+/g, ' ').trim();
  const rawCerts = sections.CERTIFICATIONS.join(' ').replace(/\s+/g, ' ').trim();

  const skillsList = Array.from(
    new Set(
      sections.SKILLS.join(',')
        .replace(
          /(Languages|Frameworks\s*&\s*Web|Cloud\s*&\s*DevOps|AI\s*&\s*Machine\s*Learning|AI\s*&\s*ML)\s*:/gi,
          ',',
        )
        .split(/[,•·|]/)
        .map((s) => s.trim())
        .filter((s) => s.length > 1 && s.length < 35),
    ),
  );

  const projectsList = rawProjects
    .split(/[•·]/)
    .map((p) => p.trim())
    .filter((p) => p.length > 10);

  const certsList = rawCerts
    .split(/[•·]/)
    .map((c) => c.trim())
    .filter((c) => c.length > 5);

  const keywords = Array.from(new Set([name, 'Software Engineer', 'Cloud Engineer', ...skillsList])).join(', ');
  const routes = discoverRoutesFromApp();
  const today = new Date().toISOString().split('T')[0];

  // Write directly into src/seo-data.json to bundle & minify inside JS
  const seoDataPayload = {
    name,
    links,
    summary,
    education,
    skills: skillsList,
    projects: projectsList,
    experience,
    certifications: certsList,
    keywords,
  };
  fs.writeFileSync(SEO_JSON_PATH, JSON.stringify(seoDataPayload, null, 2), 'utf-8');

  // Write public/llms.txt
  const llmsContent = `# ${name}

> ${summary}

## Education
${education}

## Technical Skills
${skillsList.join(', ')}

## Projects
${projectsList.map((p) => `- ${p}`).join('\n')}

## Experience
${experience}

## Certifications & Achievements
${certsList.map((c) => `- ${c}`).join('\n')}

## Official Links
${routes.map((r) => `- ${SITE_URL}${r === '/' ? '/' : r}`).join('\n')}
${links.map((l) => `- ${l}`).join('\n')}
`;
  fs.writeFileSync(LLMS_PATH, llmsContent, 'utf-8');

  // Write public/sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(SITEMAP_PATH, sitemapXml, 'utf-8');

  // Write public/robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(ROBOTS_PATH, robotsTxt, 'utf-8');

  console.log(`✅ Bundled SEO Synced (src/seo-data.json): Name="${name}" | Skills=${skillsList.length} | Certs=${certsList.length}`);
}

syncAllSEO().catch((err) => {
  console.error('⚠️ SEO Sync failed:', err);
});