import { useState, useEffect } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/in/osman-ahmedkhan' },
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/OsmanAhmedKhan' },
  { name: 'Email', icon: Mail, href: 'mailto:osmanahkhan@gmail.com' },
];

export function Footer() {
  const [time, setTime] = useState<string>('');

  // Live-ticking clock locked to IST
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        hour12: true, 
        hour: 'numeric', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-white border-t border-[#E0E0DB]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10 overflow-hidden flex flex-col">
        
        {/* Top Tier: Identity & Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          
          {/* Left Side: Brand & Live Clock */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#111110]">
              Osman Ahmed Khan
            </h2>
            
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#666660]">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>HYD, IND {time && `— ${time} IST`}</span>
            </div>
          </div>

          {/* Right Side: Connect Label & Interactive Boxes */}
          <div className="flex flex-col md:items-end gap-3 w-full md:w-auto">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#666660]">
              Connect
            </span>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group relative flex items-center justify-center gap-2 px-3.5 py-2 border border-[#E0E0DB] bg-white hover:bg-[#111110] hover:border-[#111110] transition-all duration-300 shadow-sm"
                >
                  {/* Microscopic Corner Markers (4 L's) */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#111110] -mt-[1px] -ml-[1px]" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#111110] -mt-[1px] -mr-[1px]" />
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#111110] -mb-[1px] -ml-[1px]" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#111110] -mb-[1px] -mr-[1px]" />
                  
                  {/* Icons & Text Invert on Hover */}
                  <social.icon size={13} className="text-[#111110] group-hover:text-white transition-colors duration-300" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#111110] group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                  
                  {/* Diagonal Slide-in Arrow */}
                  <ArrowUpRight size={12} strokeWidth={2.5} className="text-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 absolute right-2" />
                  
                  {/* Invisible spacer for the arrow */}
                  <span className="w-3" />
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom Tier: Baseline Copyright */}
        <div className="mt-8 pt-6 border-t border-[#E0E0DB] w-full">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#666660]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}