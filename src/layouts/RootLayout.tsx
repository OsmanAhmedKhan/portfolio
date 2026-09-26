import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />
      
      {/* pt-[72px] exactly matches the header height so the content sits flawlessly flush against it */}
      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full pt-[72px] px-4 md:px-6">
        <Suspense fallback={<div className="flex-1 flex items-center justify-center text-sm text-[#666660]">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      
    </div>
  );
}