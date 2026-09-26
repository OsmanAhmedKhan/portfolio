import { ArrowUpRight } from 'lucide-react';

export function ExperiencePage() {
  return (
    // Airtight snap to the 72px header
    <div className="flex flex-col mt-[72px] min-h-[calc(100vh-72px)] bg-white animate-in fade-in duration-500">
      
      {/* The Master Blueprint Container */}
      <div className="relative flex-1 flex flex-col w-full bg-[#F9F9F8] border-x border-b border-[#E0E0DB] -mt-[1px] z-10 pb-16 md:pb-24">
        
        {/* The 4 L's Corner Markers */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#111110] -ml-[1px] z-[60] pointer-events-none" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#111110] -mr-[1px] z-[60] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#111110] -ml-[1px] -mb-[1px] z-[60] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#111110] -mr-[1px] -mb-[1px] z-[60] pointer-events-none" />

        {/* Clinical Page Header */}
        <section className="relative flex flex-col justify-end border-b border-[#E0E0DB] px-6 py-10 md:px-10 md:py-14 z-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E0E0DB] text-[10px] font-bold uppercase tracking-widest text-[#111110] w-fit shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#111110]" />
              Track Record
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#111110] leading-none">
              Professional <br className="hidden md:block" /> Experience.
            </h1>
          </div>
        </section>

        {/* 
          THE TABULAR GRID SYSTEM 
          Optimized for zero extra gaps. Everything stacks continuously.
        */}
        <div className="px-4 md:px-10 max-w-7xl mx-auto w-full flex flex-col pt-8 md:pt-12">
          
          {/* 01. PROFESSIONAL ROLES */}
          <section className="flex flex-col">
            {/* Thicker black border creates a tight, structural division */}
            <div className="border-b-[2px] border-[#111110] pb-3 mb-0">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                01. Professional Roles
              </h2>
            </div>

            {/* EduSkills */}
            {/* Reduced py-8 to py-5 to tighten the "hug". Added gap-1.5 for tight mobile stacking */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5 md:gap-8 py-5 border-b border-[#E0E0DB] hover:bg-white transition-colors">
              <div className="md:col-span-3 text-[10px] font-bold uppercase tracking-widest text-[#666660] md:pt-0.5">
                Oct 2025 — Aug 2026
              </div>
              <div className="md:col-span-4 flex flex-col">
                <h3 className="text-sm font-bold text-[#111110]">Software & Cloud Engineering Intern</h3>
                <span className="text-sm text-[#666660]">EduSkills Foundation</span>
              </div>
              <div className="md:col-span-5 text-sm text-[#666660] leading-relaxed mt-1 md:mt-0">
                Developed full-stack web applications using Java and Python. Worked on REST APIs and studied cloud infrastructure deployment and security concepts, including Zero Trust Network Access (ZTNA) and IAM.
              </div>
            </div>

            {/* Forage */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5 md:gap-8 py-5 border-b border-[#E0E0DB] hover:bg-white transition-colors">
              <div className="md:col-span-3 text-[10px] font-bold uppercase tracking-widest text-[#666660] md:pt-0.5">
                Oct 2025
              </div>
              <div className="md:col-span-4 flex flex-col">
                <h3 className="text-sm font-bold text-[#111110]">Software & Cloud Dev (Simulations)</h3>
                <span className="text-sm text-[#666660]">Forage (AWS, EA, Tata)</span>
              </div>
              <div className="md:col-span-5 text-sm text-[#666660] leading-relaxed mt-1 md:mt-0">
                Completed software engineering and cloud architecture simulations for AWS, Electronic Arts, and Tata. Refactored application code and analyzed system design and cloud deployment models.
              </div>
            </div>
          </section>

          {/* 02. ACADEMIC BACKGROUND */}
          {/* mt-10 creates a deliberate, measured division between sections without feeling empty */}
          <section className="flex flex-col mt-10 md:mt-12">
            <div className="border-b-[2px] border-[#111110] pb-3 mb-0">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                02. Academic Background
              </h2>
            </div>

            {/* Malla Reddy */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5 md:gap-8 py-5 border-b border-[#E0E0DB] hover:bg-white transition-colors">
              <div className="md:col-span-3 text-[10px] font-bold uppercase tracking-widest text-[#666660] md:pt-0.5">
                Aug 2023 — May 2027
              </div>
              <div className="md:col-span-4 flex flex-col">
                <h3 className="text-sm font-bold text-[#111110]">B.Tech, Computer Science (AI & ML)</h3>
                <span className="text-sm text-[#666660]">Malla Reddy University</span>
              </div>
              <div className="md:col-span-5 flex flex-col gap-1 mt-1 md:mt-0">
                <span className="text-sm text-[#666660]">Undergraduate degree with a core focus on artificial intelligence, machine learning, and foundational computer science.</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#111110] mt-1 md:mt-2">Cumulative GPA: 8.61</span>
              </div>
            </div>
          </section>

          {/* 03. VERIFIED CREDENTIALS */}
          <section className="flex flex-col mt-10 md:mt-12">
            <div className="border-b-[2px] border-[#111110] pb-3 mb-0">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                03. Verified Credentials
              </h2>
            </div>

            {/* Tightened grid for credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
              
              {/* IIT Roorkee */}
              <a 
                href="https://www.linkedin.com/posts/osman-ahmedkhan_iitroorkee-cloudcomputing-devops-activity-7503820460279689217-znbe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFbc2X0BNeSXIqnD0qWCohK5xBal2ZRYnv4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col justify-between gap-3 py-5 border-b border-[#E0E0DB] hover:bg-white transition-colors"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-bold text-[#111110] leading-snug pr-4">Executive Post Graduate Certification in Cloud Computing & DevOps</h3>
                  <ArrowUpRight size={16} strokeWidth={2} className="text-[#666660] group-hover:text-[#111110] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#666660]">
                  <span>IIT Roorkee & Intellipaat</span>
                  <div className="w-1 h-1 bg-[#E0E0DB] rounded-full" />
                  <span>Issued Jun 2026</span>
                </div>
              </a>

              {/* AZ-104 */}
              <a 
                href="https://www.linkedin.com/posts/osman-ahmedkhan_microsoftazure-az104-cloudcomputing-activity-7503515771793264640-wug-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFbc2X0BNeSXIqnD0qWCohK5xBal2ZRYnv4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col justify-between gap-3 py-5 border-b border-[#E0E0DB] hover:bg-white transition-colors"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-bold text-[#111110] leading-snug pr-4">Microsoft Certified: Azure Administrator Associate (AZ-104)</h3>
                  <ArrowUpRight size={16} strokeWidth={2} className="text-[#666660] group-hover:text-[#111110] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#666660]">
                  <span>Microsoft</span>
                  <div className="w-1 h-1 bg-[#E0E0DB] rounded-full" />
                  <span>Issued Jul 2026</span>
                </div>
              </a>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}