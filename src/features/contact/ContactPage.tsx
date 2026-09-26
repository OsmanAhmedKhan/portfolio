import { useState } from 'react';
import { ArrowUpRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const contactMethods = [
    { label: 'Email', value: 'osmanahkhan@gmail.com', href: 'mailto:osmanahkhan@gmail.com' },
    { label: 'Phone', value: '+91 7036134293', href: 'tel:+917036134293' },
    { label: 'LinkedIn', value: 'in/osman-ahmedkhan', href: 'https://www.linkedin.com/in/osman-ahmedkhan' },
    { label: 'GitHub', value: 'github.com/OsmanAhmedKhan', href: 'https://github.com/OsmanAhmedKhan' }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // REPLACE 'YOUR_FORMSPREE_ID' WITH YOUR ACTUAL ID (e.g., 'mabqpxxx')
      const response = await fetch('https://formspree.io/f/xoevvlpk', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      // Used the error variable to log it, fixing the ESLint warning
      console.error('Transmission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col mt-[72px] min-h-[calc(100vh-72px)] bg-white animate-in fade-in duration-500">
      
      <div className="relative flex-1 flex flex-col w-full bg-[#F9F9F8] border-x border-b border-[#E0E0DB] -mt-[1px] z-10 pb-16 md:pb-24">
        
        {/* The 4 L's Corner Markers */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#111110] -ml-[1px] z-[60] pointer-events-none" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#111110] -mr-[1px] z-[60] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#111110] -ml-[1px] -mb-[1px] z-[60] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#111110] -mr-[1px] -mb-[1px] z-[60] pointer-events-none" />

        <section className="relative flex flex-col justify-end border-b border-[#E0E0DB] px-6 py-10 md:px-10 md:py-14 z-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111110] leading-none">
              Contact.
            </h1>
            <p className="text-sm text-[#666660] leading-relaxed">
              Available for software engineering roles, cloud infrastructure projects, and technical collaborations.
            </p>
          </div>
        </section>

        <div className="px-4 md:px-10 max-w-7xl mx-auto w-full pt-10 md:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT COLUMN: Direct Lines */}
            <section className="lg:col-span-4 flex flex-col border-r-0 lg:border-r lg:border-[#E0E0DB] lg:pr-10 lg:pb-10 h-full">
              <div className="flex flex-col">
                <div className="border-b-[2px] border-[#111110] pb-3 mb-6 flex items-end justify-between">
                  <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                    Direct Lines
                  </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                  {contactMethods.map((method, index) => (
                    <a 
                      key={index}
                      href={method.href}
                      target={method.label !== 'Email' && method.label !== 'Phone' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-2 p-3 md:p-4 border border-[#E0E0DB] bg-white hover:border-[#111110] transition-all shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#666660]">
                          {method.label}
                        </span>
                        <ArrowUpRight size={14} strokeWidth={2.5} className="text-[#B3B3B0] group-hover:text-[#111110] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-[#111110] truncate">
                        {method.value}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* RIGHT COLUMN: Interactive Form */}
            <section className="lg:col-span-8 flex flex-col lg:pl-10 mt-12 lg:mt-0">
              <div className="border-b-[2px] border-[#111110] pb-3 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-2">
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                  Send a Message
                </h2>
                {status === 'idle' && (
                  <span className="text-[10px] font-bold tracking-widest text-[#666660] uppercase">
                    All fields required
                  </span>
                )}
              </div>

              {/* Success State Block */}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center bg-[#111110] text-white p-12 md:p-20 border border-[#111110] animate-in fade-in zoom-in-95 duration-500">
                  <CheckCircle2 size={48} className="mb-6 text-emerald-400" />
                  <h3 className="text-2xl font-extrabold tracking-tight mb-2">Message Received</h3>
                  <p className="text-sm text-[#B3B3B0] max-w-md">
                    Thank you for reaching out. I will review your details and respond shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-2 border border-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#111110] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  
                  {/* Error Notification */}
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-bold">
                      <AlertCircle size={16} />
                      <span>Transmission failed. Please check your connection and try again.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5 group">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                        Name
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-white border border-[#E0E0DB] px-3.5 py-3 text-sm text-[#111110] placeholder:text-[#B3B3B0] focus:border-[#111110] focus:outline-none transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1.5 group">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-white border border-[#E0E0DB] px-3.5 py-3 text-sm text-[#111110] placeholder:text-[#B3B3B0] focus:border-[#111110] focus:outline-none transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      required
                      disabled={status === 'submitting'}
                      className="w-full bg-white border border-[#E0E0DB] px-3.5 py-3 text-sm text-[#111110] placeholder:text-[#B3B3B0] focus:border-[#111110] focus:outline-none transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 group">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-[#111110]">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      disabled={status === 'submitting'}
                      rows={6}
                      className="w-full bg-white border border-[#E0E0DB] px-3.5 py-3 text-sm text-[#111110] placeholder:text-[#B3B3B0] focus:border-[#111110] focus:outline-none transition-colors shadow-sm resize-y min-h-[140px] disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your message..."
                    />
                  </div>

                  <div className="pt-4 flex justify-end border-t border-[#E0E0DB] mt-2">
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-[#111110] bg-[#111110] text-white hover:bg-white hover:text-[#111110] transition-colors duration-200 w-full md:w-auto shadow-sm font-bold text-[11px] uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-[#111110] disabled:hover:text-white"
                    >
                      <span>{status === 'submitting' ? 'Transmitting...' : 'Send Message'}</span>
                      {status !== 'submitting' && (
                        <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      )}
                    </button>
                  </div>

                </form>
              )}
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}