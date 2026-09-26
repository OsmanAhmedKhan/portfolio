import { ArrowUpRight } from 'lucide-react';

// Clean GitHub Icon for the source code button
const GithubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function WorkPage() {
  const projects = [
    {
      id: 'era-vault',
      title: 'ERA VAULT',
      description: 'A zero-compression media vault and edge AI tagging engine. Features autonomous metadata extraction via Gemini Vision, bit-for-bit digital preservation, and a serverless edge architecture. Engineered to bypass application server memory during large uploads via direct-to-storage streaming.',
      techStack: ['Next.js 15', 'TypeScript', 'Prisma', 'Neon PostgreSQL', 'Clerk Auth', 'Gemini Vision', 'Docker', 'Cloudflare Pages'],
      githubUrl: 'https://github.com/OsmanAhmedKhan/eravault',
      liveUrl: 'https://eravault.pages.dev/',
    },
    {
      id: 'era-books',
      title: 'ERA BOOKS',
      description: 'A client interface built to map and visualize literary data. Operates as a decoupled edge application, utilizing aggressive server-state caching to achieve sub-millisecond local routing and instantaneous DOM rendering without layout shifts.',
      techStack: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Tailwind CSS', 'PWA'],
      githubUrl: 'https://github.com/OsmanAhmedKhan/erabooks',
      liveUrl: 'https://erabooks.pages.dev/',
    },
    {
      id: 'era-exchange',
      title: 'ERA Exchange',
      description: 'A real-time financial utility that processes live exchange rates via asynchronous data hydration and visualizes 30-day market volatility using Canvas APIs. Built with a dynamic viewport-locked layout engine for a zero-scroll architecture.',
      techStack: ['ES6+ JavaScript', 'Native CSS3', 'Web Fetch API', 'Chart.js', 'Service Workers'],
      githubUrl: 'https://github.com/OsmanAhmedKhan/era-exchange',
      liveUrl: 'https://era-exchange.pages.dev/',
    }
  ];

  return (
    <div className="flex flex-col mt-[72px] min-h-[calc(100vh-72px)] bg-white animate-in fade-in duration-500">
      
      {/* The Master Blueprint Container */}
      <div className="relative flex-1 flex flex-col w-full bg-[#F9F9F8] border-x border-b border-[#E0E0DB] -mt-[1px] z-10 pb-20 md:pb-32">
        
        {/* The 4 L's Corner Markers */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#111110] -ml-[1px] z-[60] pointer-events-none" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#111110] -mr-[1px] z-[60] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#111110] -ml-[1px] -mb-[1px] z-[60] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#111110] -mr-[1px] -mb-[1px] z-[60] pointer-events-none" />

        {/* Clinical Page Header */}
        <section className="relative flex flex-col justify-end border-b border-[#E0E0DB] px-6 py-10 md:px-10 md:py-14 z-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111110] leading-none">
              Work.
            </h1>
            <p className="text-sm text-[#666660] leading-relaxed">
              A collection of software engineering projects, intelligent systems, and architectural tooling.
            </p>
          </div>
        </section>

        {/* The Project Matrix */}
        <div className="px-4 md:px-10 max-w-7xl mx-auto w-full pt-12 md:pt-20 flex flex-col gap-20 md:gap-28">
          
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col w-full group">
              
              {/* Simple, Heavy Structural Divider */}
              <div className="border-b-[2px] border-[#111110] pb-4 mb-8 md:mb-10">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111110]">
                  {project.title}
                </h2>
              </div>

              {/* Split-Pane Project Data */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
                
                {/* Left Column: Description & Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between lg:border-r lg:border-[#E0E0DB] lg:pr-12">
                  <p className="text-sm md:text-base text-[#111110] leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Execution Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-10 lg:mt-12">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#111110] bg-[#111110] text-white hover:bg-white hover:text-[#111110] transition-colors duration-300 shadow-sm w-full sm:w-auto"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        View Live
                      </span>
                      <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#E0E0DB] bg-white hover:border-[#111110] transition-colors duration-300 shadow-sm w-full sm:w-auto"
                    >
                      <GithubIcon size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                        Source Code
                      </span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Architecture & Stack */}
                <div className="lg:col-span-7 flex flex-col lg:pl-12 pt-4 lg:pt-0">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#666660]">
                      System Architecture & Stack
                    </span>
                    
                    {/* The Tech Stack Matrix */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3.5 py-2 border border-[#E0E0DB] bg-white text-[10px] font-bold uppercase tracking-widest text-[#111110] hover:bg-[#111110] hover:text-white hover:border-[#111110] transition-colors cursor-default shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
          
        </div>
      </div>
    </div>
  );
}