import { Download, ArrowUpRight, Mail, Phone, Globe } from 'lucide-react';

export function ResumePage() {
  return (
    <div className="flex flex-col mt-[72px] min-h-[calc(100vh-72px)] bg-white animate-in fade-in duration-500">
      
      {/* The Master Blueprint Container */}
      <div className="relative flex-1 flex flex-col w-full bg-[#F9F9F8] border-x border-b border-[#E0E0DB] -mt-[1px] z-10 pb-16 md:pb-28">
        
        {/* The Global 4 L's Corner Markers */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#111110] -ml-[1px] z-[60] pointer-events-none" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#111110] -mr-[1px] z-[60] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#111110] -ml-[1px] -mb-[1px] z-[60] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#111110] -mr-[1px] -mb-[1px] z-[60] pointer-events-none" />

        {/* Top Action Toolbar */}
        <section className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E0E0DB] px-4 py-8 sm:px-6 md:px-10 z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111110] leading-none">
              Resume.
            </h1>
            <p className="text-sm text-[#666660]">
              Curriculum Vitae & Technical Specifications
            </p>
          </div>

          {/* PDF Action Buttons */}
          <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#E0E0DB] bg-white text-[#111110] hover:border-[#111110] transition-colors shadow-sm text-[10px] font-bold uppercase tracking-widest"
            >
              <span>View Raw PDF</span>
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>

            <a 
              href="/resume.pdf"
              download="Osman_Ahmed_Khan_Resume.pdf"
              className="flex-1 sm:flex-none group inline-flex items-center justify-center gap-2.5 px-5 py-3 border border-[#111110] bg-[#111110] text-white hover:bg-white hover:text-[#111110] transition-colors shadow-sm text-[10px] font-bold uppercase tracking-widest"
            >
              <span>Download PDF</span>
              <Download size={14} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </section>

        {/* ========================================================= */}
        {/* THE NATIVE DIGITAL DOCUMENT SHEET                         */}
        {/* ========================================================= */}
        <section className="px-4 sm:px-6 md:px-10 pt-8 md:pt-12 flex justify-center">
          <div className="w-full max-w-4xl bg-white border border-[#E0E0DB] shadow-sm p-6 sm:p-10 md:p-14 flex flex-col gap-8">
            
            {/* Document Header: Name & Contact Bar */}
            <header className="flex flex-col gap-4 border-b-[2px] border-[#111110] pb-6">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#111110] uppercase">
                Osman Ahmed Khan
              </h2>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-[#666660]">
                <a href="mailto:osmanahkhan@gmail.com" className="inline-flex items-center gap-1.5 hover:text-[#111110] transition-colors">
                  <Mail size={14} className="text-[#111110] shrink-0" />
                  <span>osmanahkhan@gmail.com</span>
                </a>
                <a href="tel:+917036134293" className="inline-flex items-center gap-1.5 hover:text-[#111110] transition-colors">
                  <Phone size={14} className="text-[#111110] shrink-0" />
                  <span>+91-7036134293</span>
                </a>
                <a href="https://www.linkedin.com/in/osman-ahmedkhan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#111110] transition-colors">
                  <Globe size={14} className="text-[#111110] shrink-0" />
                  <span>linkedin.com/in/osman-ahmedkhan</span>
                </a>
                <a href="https://github.com/OsmanAhmedKhan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#111110] transition-colors">
                  <Globe size={14} className="text-[#111110] shrink-0" />
                  <span>github.com/OsmanAhmedKhan</span>
                </a>
              </div>
            </header>

            {/* 01. SUMMARY */}
            <section className="flex flex-col gap-2.5">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#111110] border-b border-[#E0E0DB] pb-1.5">
                Summary
              </h3>
              <p className="text-sm text-[#111110] leading-relaxed">
                Computer Science (AI & ML) undergraduate with an Executive PG in Cloud & DevOps from IIT Roorkee. Skilled in developing full-stack applications and REST APIs using Python, Java, and React. Hands-on experience in managing cloud deployments and integrating machine learning models into reliable, performant backend systems.
              </p>
            </section>

            {/* 02. EDUCATION */}
            <section className="flex flex-col gap-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#111110] border-b border-[#E0E0DB] pb-1.5">
                Education
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111110]">Malla Reddy University</span>
                  <span className="text-sm text-[#666660]">Bachelor of Technology (B.Tech) in Computer Science (AI & ML)</span>
                  <span className="text-xs font-bold text-[#111110] mt-1">CGPA: 8.67 / 10</span>
                </div>
                <div className="flex flex-col sm:items-end text-xs font-bold uppercase tracking-wider text-[#666660] shrink-0">
                  <span>Hyderabad</span>
                  <span>Expected May 2027</span>
                </div>
              </div>
            </section>

            {/* 03. TECHNICAL SKILLS */}
            <section className="flex flex-col gap-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#111110] border-b border-[#E0E0DB] pb-1.5">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-2 sm:gap-x-4 text-sm">
                <span className="sm:col-span-3 font-bold text-[#111110]">Languages:</span>
                <span className="sm:col-span-9 text-[#666660]">Python, Java, JavaScript, SQL, HTML/CSS</span>

                <span className="sm:col-span-3 font-bold text-[#111110]">Frameworks & Web:</span>
                <span className="sm:col-span-9 text-[#666660]">React, Node.js, Express.js, Flask, REST APIs</span>

                <span className="sm:col-span-3 font-bold text-[#111110]">Cloud & DevOps:</span>
                <span className="sm:col-span-9 text-[#666660]">AWS, Azure, Docker, Git, GitHub, CI/CD</span>

                <span className="sm:col-span-3 font-bold text-[#111110]">AI & Machine Learning:</span>
                <span className="sm:col-span-9 text-[#666660]">Model Integration, ML Fundamentals, Pandas, NumPy</span>
              </div>
            </section>

            {/* 04. PROJECTS */}
            <section className="flex flex-col gap-5">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#111110] border-b border-[#E0E0DB] pb-1.5">
                Projects
              </h3>

              {/* ERA Vault */}
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-sm font-bold text-[#111110]">
                    ERA Vault — Media Storage & AI Tagging Web App
                  </h4>
                  <span className="text-xs font-bold text-[#666660]">
                    Next.js 15, TypeScript, ImgBB API, Neon Postgres, Docker
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-[#666660] leading-relaxed">
                  <li>
                    Built a full-stack web application using Next.js 15 and TypeScript, routing image uploads directly to the ImgBB API to prevent file memory buffering on the main application server.
                  </li>
                  <li>
                    Integrated the Google Gemini Vision API to asynchronously generate image tags saved to Neon Postgres via Prisma ORM, and containerized the application using a multi-stage Dockerfile for reproducible deployment.
                  </li>
                </ul>
              </div>

              {/* ERA Books */}
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-sm font-bold text-[#111110]">
                    ERA Books — Book Recommendation & Library Web App
                  </h4>
                  <span className="text-xs font-bold text-[#666660]">
                    React, TypeScript, TanStack Query, FastAPI, Cloudflare Pages
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-[#666660] leading-relaxed">
                  <li>
                    Built a web application using React and TypeScript, using TanStack Query to handle asynchronous data fetching, cache API responses in memory, and manage loading and error UI states.
                  </li>
                  <li>
                    Built a Python FastAPI backend using collaborative and content-based filtering to generate book recommendations, hosting the API on Render and the frontend on Cloudflare Pages.
                  </li>
                </ul>
              </div>

              {/* ERA Exchange */}
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-sm font-bold text-[#111110]">
                    ERA Exchange — Currency Analytics & Exchange Rate Web App
                  </h4>
                  <span className="text-xs font-bold text-[#666660]">
                    JavaScript, HTML/CSS, Chart.js, Service Workers, Cloudflare
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-[#666660] leading-relaxed">
                  <li>
                    Built a progressive web application using Vanilla JavaScript and CSS to display live exchange rates, incorporating Chart.js for 30-day historical trend graphs and a custom searchable dropdown for 150+ currencies.
                  </li>
                  <li>
                    Added a Service Worker to enable offline access through response caching, created input debouncing to reduce API requests during user typing, and deployed the app on Cloudflare Pages.
                  </li>
                </ul>
              </div>
            </section>

            {/* 05. EXPERIENCE */}
            <section className="flex flex-col gap-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#111110] border-b border-[#E0E0DB] pb-1.5">
                Experience
              </h3>
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-sm font-bold text-[#111110]">
                    EduSkills Foundation — Software & Cloud Engineering Intern
                  </h4>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#666660]">
                    Remote (Oct 2025 — Aug 2026)
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-[#666660] leading-relaxed">
                  <li>
                    Applied object-oriented programming principles in Java and Python to build backend web logic, manage SQL database interactions, and integrate REST APIs.
                  </li>
                  <li>
                    Evaluated cloud deployment workflows and applied Zero Trust security principles, configuring IAM policies and network perimeter controls.
                  </li>
                </ul>
              </div>
            </section>

            {/* 06. CERTIFICATIONS & ACHIEVEMENTS */}
            <section className="flex flex-col gap-3">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#111110] border-b border-[#E0E0DB] pb-1.5">
                Certifications & Achievements
              </h3>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-[#666660]">
                <li>
                  <span className="font-bold text-[#111110]">Executive PG Certification in Cloud Computing & DevOps</span> — iHUB DivyaSampark, IIT Roorkee (2026)
                </li>
                <li>
                  <span className="font-bold text-[#111110]">Microsoft Certified: Azure Administrator Associate (AZ-104)</span> — Microsoft (2026)
                </li>
                <li>
                  <span className="font-bold text-[#111110]">Zscaler Certified Zero Trust Associate</span> — Zscaler (2026)
                </li>
                <li>
                  <span className="font-bold text-[#111110]">AWS Academy Graduate - Cloud Foundations</span> — Amazon Web Services (2026)
                </li>
                <li>
                  <span className="font-bold text-[#111110]">Fundamentals of Cybersecurity (EDU-102)</span> — Zscaler (2026)
                </li>
              </ul>
            </section>

          </div>
        </section>

      </div>
    </div>
  );
}