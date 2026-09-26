import { Terminal, Cloud } from 'lucide-react';
import { Hero } from './Hero';

export function HomePage() {
  return (
    <div className="flex flex-col gap-10 pb-16 pt-8 md:pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. CORE FOCUS */}
      <section className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-[#E0E0DB] pt-10">
        <div className="md:w-1/3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#111110]">
            Core Focus
          </h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Box 1 */}
          <div className="flex flex-col gap-3 p-6 border border-[#E0E0DB] bg-white transition-colors hover:border-[#111110]">
            <Terminal size={18} className="text-[#111110]" strokeWidth={2} />
            <h3 className="text-sm font-bold text-[#111110]">Software & Full-Stack</h3>
            <p className="text-sm text-[#666660] leading-relaxed">
              Developing web applications and backend services. Focused on writing clean, functional code using Python and Java, alongside modern web frameworks.
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col gap-3 p-6 border border-[#E0E0DB] bg-white transition-colors hover:border-[#111110]">
            <Cloud size={18} className="text-[#111110]" strokeWidth={2} />
            <h3 className="text-sm font-bold text-[#111110]">Cloud & Infrastructure</h3>
            <p className="text-sm text-[#666660] leading-relaxed">
              Deploying and maintaining cloud environments. Applying practical knowledge of AWS, Azure, and CI/CD pipelines to build reliable, secure systems.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CORE TECHNOLOGIES */}
      <section className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-[#E0E0DB] pt-10">
        <div className="md:w-1/3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#111110]">
            Core Technologies
          </h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          
          {/* Category: Languages */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#666660] border-b border-[#E0E0DB] pb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'].map((item) => (
                <div key={item} className="px-3 py-1.5 border border-[#E0E0DB] bg-white text-[10px] font-bold uppercase tracking-widest text-[#111110] transition-colors hover:border-[#111110]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Category: Cloud & Infra */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#666660] border-b border-[#E0E0DB] pb-2">Cloud & Infra</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Azure', 'Docker', 'Linux', 'CI/CD', 'Cloudflare', 'Git & GitHub'].map((item) => (
                <div key={item} className="px-3 py-1.5 border border-[#E0E0DB] bg-white text-[10px] font-bold uppercase tracking-widest text-[#111110] transition-colors hover:border-[#111110]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Category: Backend & Data */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#666660] border-b border-[#E0E0DB] pb-2">Backend & Data</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Spring Boot', 'FastAPI', 'REST APIs', 'PostgreSQL', 'MySQL', 'Pandas'].map((item) => (
                <div key={item} className="px-3 py-1.5 border border-[#E0E0DB] bg-white text-[10px] font-bold uppercase tracking-widest text-[#111110] transition-colors hover:border-[#111110]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Category: Frontend */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#666660] border-b border-[#E0E0DB] pb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React.js', 'Tailwind CSS', 'HTML5', 'CSS3'].map((item) => (
                <div key={item} className="px-3 py-1.5 border border-[#E0E0DB] bg-white text-[10px] font-bold uppercase tracking-widest text-[#111110] transition-colors hover:border-[#111110]">
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}