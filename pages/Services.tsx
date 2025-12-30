
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* High-Impact Hero */}
      <section className="bg-charcoal text-white py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] -mr-64 -mt-64"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">Strategic <br/><span className="text-primary italic">Solutions.</span></h1>
            <p className="text-2xl md:text-3xl text-slate-400 max-w-2xl leading-relaxed font-medium">
              Transforming complex technical requirements into intuitive digital ecosystems that drive engagement and ROI.
            </p>
            <div className="mt-16">
              <button className="bg-primary hover:bg-primary-dark text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl shadow-primary/40 transition-all hover:-translate-y-2 uppercase tracking-tighter">
                Start Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Service Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: 'web',
              title: 'Interface Architecture',
              desc: 'Beyond aesthetics: structuring digital spaces for optimal user flow and psychological comfort.'
            },
            {
              icon: 'smartphone',
              title: 'Native Mobility',
              desc: 'High-performance mobile solutions built on React Native and Flutter for global scalability.'
            },
            {
              icon: 'palette',
              title: 'Identity Systems',
              desc: 'Comprehensive visual languages that communicate brand value at every single touchpoint.'
            },
            {
              icon: 'school',
              title: 'Strategic Counsel',
              desc: 'Technical advisory for infrastructure optimization, team scaling, and digital transformation.'
            }
          ].map((s, i) => (
            <div key={i} className="bg-surface-off p-10 rounded-[40px] border border-slate-100 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-charcoal shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-10 border border-slate-100">
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-content text-sm leading-relaxed mb-8 font-medium">
                {s.desc}
              </p>
              <a href="#" className="text-primary font-black uppercase tracking-widest text-[10px] flex items-center gap-2 group/link">
                Protocol Details <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Modern Process */}
      <section className="bg-surface-off py-32 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">Methodology</h2>
            <h3 className="text-5xl font-black text-charcoal uppercase tracking-tighter">The Implementation Protocol</h3>
          </div>

          <div className="space-y-6">
            {[
              { step: 'Discovery', duration: 'W-01', icon: 'search', desc: 'Comprehensive alignment on business vectors, competitive landscapes, and technical constraints.' },
              { step: 'Synthesis', duration: 'W-02/03', icon: 'draw', desc: 'Translating research into wireframe logic and high-fidelity prototypes for iterative validation.' },
              { step: 'Engineering', duration: 'W-04/07', icon: 'code', desc: 'Precision implementation using a modular, test-driven approach for long-term scalability.' },
              { step: 'Deployment', duration: 'W-08', icon: 'rocket_launch', desc: 'Rigorous optimization, accessibility auditing, and seamless integration into production environments.' }
            ].map((p, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 flex flex-col md:flex-row gap-10 items-start md:items-center hover:shadow-xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-charcoal rounded-3xl flex items-center justify-center text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">{p.icon}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h4 className="text-3xl font-black text-charcoal uppercase tracking-tighter">{p.step}</h4>
                    <span className="text-[10px] font-black bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest">{p.duration}</span>
                  </div>
                  <p className="text-content font-medium leading-relaxed max-w-2xl">
                    {p.desc}
                  </p>
                </div>
                <div className="hidden md:block">
                  <span className="text-slate-100 font-black text-7xl select-none group-hover:text-primary/5 transition-colors">0{i+1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
