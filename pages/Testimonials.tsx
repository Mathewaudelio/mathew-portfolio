
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-[16/10] bg-surface-off rounded-[40px] overflow-hidden shadow-2xl relative group border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
              alt="Collaboration" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-charcoal/20"></div>
            <div className="absolute bottom-10 left-10 text-white font-black text-4xl uppercase tracking-tighter">Impact <br/><span className="text-primary italic">Validated.</span></div>
          </div>

          <div>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-primary/20">
              <span className="material-symbols-outlined text-[16px] filled">verified</span>
              Strategic Partnership
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-charcoal leading-tight mb-10 uppercase tracking-tighter">
              The Client <br/>Perspective.
            </h1>
            <p className="text-xl text-content font-medium mb-12 leading-relaxed">
              Success is measured by impact. My collaborations focus on moving the needle through design-led thinking and technical execution.
            </p>
            <div className="flex gap-4">
              <button className="bg-charcoal text-white hover:bg-charcoal-light px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl transition-all">
                Case Records
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Feedback</h2>
            <h3 className="text-5xl font-black text-white uppercase tracking-tighter">Market Sentiments</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Sarah Jenkins',
                role: 'CTO at TechFlow Neural',
                img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
                quote: 'Mathew reimagined our interface architecture. His technical depth paired with design sensibility led to a 40% surge in user retention.'
              },
              {
                name: 'David Okeke',
                role: 'Founder at StartUp Nexus',
                img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
                quote: 'The most comprehensive designer I’ve partnered with. He doesn’t just build assets; he constructs robust brand ecosystems.'
              },
              {
                name: 'Elena Rodriguez',
                role: 'Global Product Lead',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
                quote: 'A rare blend of high-level strategy and pixel-perfect execution. Mathew is a vital asset to any complex product cycle.'
              }
            ].map((t, i) => (
              <div key={i} className="bg-charcoal-light p-12 rounded-[40px] border border-white/5 hover:border-primary/40 transition-all duration-500 group flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-primary/20" />
                    <div>
                      <h4 className="font-black text-white uppercase tracking-tight">{t.name}</h4>
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary/30 text-5xl group-hover:text-primary transition-colors">format_quote</span>
                </div>
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined filled text-[16px]">star</span>
                  ))}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed font-medium mb-10 flex-grow italic">
                  "{t.quote}"
                </p>
                <div className="pt-8 border-t border-white/5 flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Verified Endorsement
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
