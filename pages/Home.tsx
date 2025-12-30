
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 animate-fade-in border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Engineering the Future
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-charcoal leading-[1] tracking-tighter mb-8">
                Impact through <br/><span className="text-primary italic">Innovation.</span>
              </h1>
              <p className="text-xl md:text-2xl text-content mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                I am <span className="text-charcoal font-black underline decoration-primary decoration-4 underline-offset-4">Mathew Obur Kimu</span>, a Software Engineer dedicated to architecting digital solutions that solve real-world challenges.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/projects" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1">
                  View Engineering Work
                </Link>
                <Link to="/contact" className="bg-secondary text-white hover:bg-secondary-dark px-10 py-5 rounded-full font-black text-lg transition-all shadow-lg shadow-secondary/10">
                  Collaborate Now
                </Link>
              </div>
              
              <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col items-center lg:items-start">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mb-6">Rooted in Innovation</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="text-2xl font-black tracking-tighter italic">SUDAN</div>
                  <div className="text-2xl font-black tracking-tighter italic">SOUTH SUDAN</div>
                  <div className="text-2xl font-black tracking-tighter italic">UGANDA</div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full z-0"></div>
              <div className="relative z-10 w-full aspect-square md:aspect-[4/5] bg-secondary-light rounded-[40px] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
                  alt="Mathew Kimu" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 text-white p-8 bg-charcoal/30 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined filled text-white">code</span>
                    </div>
                    <div>
                      <p className="font-black text-lg uppercase tracking-tight">Software Engineer</p>
                      <p className="text-sm opacity-70 font-bold uppercase tracking-widest">Global Solutions Architect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-off py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4">The Mission</h2>
            <h3 className="text-4xl md:text-5xl font-black text-charcoal tracking-tight">Dedication to Progress</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: 'terminal',
                title: 'Technical Mastery',
                description: 'Relentless pursuit of emerging tech—from full-stack web architectures to secure distributed systems.'
              },
              {
                icon: 'public',
                title: 'Global Impact',
                description: 'Creating software that transcends borders, designed to empower communities from Juba to Kampala and beyond.'
              },
              {
                icon: 'auto_awesome',
                title: 'Future Focused',
                description: 'Integrating AI and modern frameworks to build high-performance products that solve tomorrow\'s problems today.'
              }
            ].map((skill, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-4">
                <div className="w-20 h-20 bg-secondary-light rounded-2xl flex items-center justify-center text-secondary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl">{skill.icon}</span>
                </div>
                <h4 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-tighter">{skill.title}</h4>
                <p className="text-content leading-relaxed mb-8 font-medium">
                  {skill.description}
                </p>
                <Link to="/about" className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-3 group/link">
                  My Journey <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
