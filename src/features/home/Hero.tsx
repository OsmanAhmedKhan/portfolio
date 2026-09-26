import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-center items-start border border-[#E0E0DB] bg-white p-8 md:p-10 relative shadow-sm">
        
        {/* Microscopic Corner Markers for the Main Box */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#111110] -mt-[1px] -ml-[1px]" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#111110] -mt-[1px] -mr-[1px]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#111110] -mb-[1px] -ml-[1px]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#111110] -mb-[1px] -mr-[1px]" />

        {/* The Silver Architectural Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBEBE8] border border-[#E0E0DB] text-[10px] font-bold uppercase tracking-widest text-[#111110] mb-5">
          <span className="w-1.5 h-1.5 bg-[#111110]" />
          Software Engineer
        </div>

        {/* Master Headline */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111110] max-w-3xl leading-[1.15] mb-4">
          Software and Cloud Engineering.
        </h1>

        {/* Objective Subtitle */}
        <p className="text-sm md:text-base text-[#666660] max-w-2xl leading-relaxed mb-6 font-medium">
          Focused on full-stack development and cloud infrastructure. Bridging the gap between front-end interfaces, backend systems, and modern deployment workflows.
        </p>

        {/* Action Buttons - Forced into a single row on mobile */}
        <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
          
          {/* Primary Button */}
          <Link
            to="/work" // Updated to match WorkPage.tsx routing
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-6 py-3 bg-[#111110] text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-[#111110] hover:bg-transparent hover:text-[#111110] transition-colors group"
          >
            <span>View Work</span>
            <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Secondary Blueprint Button with Corner Markers */}
          <Link
            to="/contact" // This is correct for ContactPage.tsx
            className="flex-1 sm:flex-none flex items-center justify-center px-3 sm:px-6 py-3 bg-transparent text-[#111110] text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-[#E0E0DB] hover:border-[#111110] transition-colors relative group"
          >
            {/* Button Corner Markers */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#111110] -mt-[1px] -ml-[1px] transition-colors group-hover:border-[#111110]" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#111110] -mt-[1px] -mr-[1px] transition-colors group-hover:border-[#111110]" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#111110] -mb-[1px] -ml-[1px] transition-colors group-hover:border-[#111110]" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#111110] -mb-[1px] -mr-[1px] transition-colors group-hover:border-[#111110]" />
            
            <span>Contact</span>
          </Link>

        </div>
      </div>
    </section>
  );
}