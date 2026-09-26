import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { RootLayout } from '@/layouts/RootLayout';
import { SEOManager } from '@/components/SEOManager';

// ----------------------------------------------------------------------
// Route-Level Code Splitting
// ----------------------------------------------------------------------
const HomePage = lazy(() => import('@/features/home/HomePage').then(m => ({ default: m.HomePage })));
const WorkPage = lazy(() => import('@/features/work/WorkPage').then(m => ({ default: m.WorkPage })));
const ExperiencePage = lazy(() => import('@/features/experience/ExperiencePage').then(m => ({ default: m.ExperiencePage })));
const ContactPage = lazy(() => import('@/features/contact/ContactPage').then(m => ({ default: m.ContactPage })));
const ResumePage = lazy(() => import('@/features/resume/ResumePage').then(m => ({ default: m.ResumePage })));
const NotFoundPage = lazy(() => import('@/features/errors/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

export default function App() {
  return (
    <BrowserRouter>
      {/* Dynamic Route-Level SEO & Canonical Controller */}
      <SEOManager />

      <Routes>
        <Route element={<RootLayout />}>
          {/* Main Landing */}
          <Route path="/" element={<HomePage />} />
          
          {/* Core Navigation Routes */}
          <Route path="/work" element={<WorkPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          
          {/* 404 Catch-All Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}