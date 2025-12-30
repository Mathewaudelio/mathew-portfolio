
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6">Origins & Ambition</h1>
            <h2 className="text-5xl md:text-6xl font-black text-charcoal leading-tight mb-10 tracking-tighter uppercase">
              From Roots to <span className="text-primary italic">Global</span> Impact.
            </h2>
            <div className="space-y-6 text-xl text-content font-medium leading-relaxed">
              <p>
                I am <span className="text-charcoal font-black">Mathew Obur Kimu</span>, a Software Engineer whose journey began in the vibrant cultural hub of <span className="text-secondary font-black">Khartoum in 2003</span>. My path has been one of resilience and relentless curiosity, eventually rooting me in my home of <span className="text-secondary font-black">South Sudan</span> and leading me to the academic frontiers of <span className="text-secondary font-black">Kampala, Uganda</span>.
              </p>
              <p>
                Currently pursuing my advanced studies at the <span className="text-charcoal font-black underline decoration-primary decoration-2 underline-offset-4">University of East Africa</span>, I dedicate my days to mastering the technologies that will define our future. Having successfully completed my primary and secondary education with excellence, I now bridge the gap between rigorous theory and impactful application.
              </p>
              <p>
                My dedication goes beyond code—I build with the intent to <span className="text-primary font-black">change the world</span>. Every project I architect is a step toward a more connected, efficient, and empowered global community.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-charcoal hover:bg-charcoal-light text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl transition-all hover:-translate-y-1">
                Download Technical CV
              </button>
              <Link to="/projects" className="bg-surface-off text-charcoal px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest border border-slate-200 transition-all">
                Project Log
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-10 bg-secondary/5 blur-[100px] rounded-full"></div>
              <div className="relative bg-surface-off rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1519085185603-6a1bb4d6a3f2?q=80&w=2000&auto=format&fit=crop" 
                  alt="Mathew Kimu" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-charcoal/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                      <span className="material-symbols-outlined filled">engineering</span>
                    </div>
                    <div>
                      <p className="font-black text-white uppercase tracking-tighter">Software Engineer</p>
                      <p className="text-xs text-slate-300 font-bold uppercase tracking-[0.2em]">South Sudanese Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Integrity Section */}
      <section className="bg-surface-off py-32 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-white p-16 rounded-[40px] shadow-sm border border-slate-100">
              <h3 className="text-3xl font-black text-charcoal mb-10 flex items-center gap-4 uppercase tracking-tighter">
                <span className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">menu_book</span>
                </span>
                Academic Foundation
              </h3>
              <p className="text-content text-2xl leading-relaxed italic font-medium mb-12 border-l-4 border-primary pl-8">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              <div className="space-y-4 text-content font-medium">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Primary & Secondary Completion (Sudan/South Sudan)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Undergraduate Studies - University of East Africa, Kampala</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-black text-charcoal mb-8 uppercase tracking-tighter">Global Trajectory</h3>
              <div className="relative border-l-2 border-primary pl-8 space-y-12">
                {[
                  { year: '2003', loc: 'Khartoum, Sudan', event: 'Roots & Heritage' },
                  { year: '2015-21', loc: 'South Sudan', event: 'Academic Foundation' },
                  { year: 'Present', loc: 'Kampala, Uganda', event: 'University of East Africa (Software Engineering)' }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-primary rounded-full"></div>
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{step.year}</p>
                    <h4 className="text-xl font-black text-charcoal uppercase">{step.loc}</h4>
                    <p className="text-content text-sm">{step.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mastery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-4xl font-black text-charcoal mb-16 uppercase tracking-tighter">My Toolkit</h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Full Stack Dev', icon: 'code' },
                { label: 'System Architecture', icon: 'settings_input_component' },
                { label: 'Mobile Engineering', icon: 'smartphone' },
                { label: 'Cloud Infrastructure', icon: 'cloud_done' }
              ].map((tool, idx) => (
                <div key={idx} className="bg-surface-off p-6 rounded-3xl border border-slate-100 flex items-center gap-4 hover:border-primary transition-all">
                   <span className="material-symbols-outlined text-primary">{tool.icon}</span>
                   <span className="font-black text-charcoal uppercase text-xs tracking-tighter">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-charcoal p-16 rounded-[40px] text-white">
            <h3 className="text-4xl font-black mb-10 uppercase tracking-tighter">The Vision</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              I spend my time obsessing over how code can bridge socioeconomic gaps. From Kampala to the rest of the world, I am building the infrastructure for the next generation of global impact.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'AWS', 'Scalability', 'UI/UX Intelligence'].map(tag => (
                <span key={tag} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
