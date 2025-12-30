
import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Interface', 'Engineering', 'Strategy', 'Mobile'];

  const projects = [
    {
      title: 'Neural Finance Hub',
      tags: ['Strategy', 'React'],
      category: 'Engineering',
      desc: 'Predictive data modeling and high-fidelity interface for real-time market shifts.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Aura Core Retail',
      tags: ['Interface', 'Commerce'],
      category: 'Interface',
      desc: 'Full-scale digital retail ecosystem with integrated behavioral tracking.',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'EcoLogistics App',
      tags: ['Mobile', 'Flutter'],
      category: 'Mobile',
      desc: 'Optimization tool for sustainable supply chain management.',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Form & Space Studio',
      tags: ['Strategy', 'Branding'],
      category: 'Strategy',
      desc: 'Global identity system for an award-winning architecture collective.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Nexus Data Stream',
      tags: ['Engineering', 'D3.js'],
      category: 'Engineering',
      desc: 'Real-time server health and network visualization dashboard.',
      img: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Voyage Protocol',
      tags: ['Interface', 'API'],
      category: 'Interface',
      desc: 'Travel intelligence system integrating global transit APIs.',
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=2000&auto=format&fit=crop'
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white py-24 md:py-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black text-charcoal tracking-tighter uppercase mb-6">Work <span className="text-primary">Portfolio.</span></h1>
            <p className="text-xl text-content font-medium leading-relaxed">
              Curated case studies highlighting technical architecture and user-centric strategy.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-xl shadow-primary/30' 
                    : 'bg-surface-off text-charcoal hover:bg-slate-200 border border-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden mb-8 bg-surface-off shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8 backdrop-blur-[2px]">
                  <span className="bg-white text-charcoal px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm translate-y-6 group-hover:translate-y-0 transition-all duration-500">Case Analysis</span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-black text-charcoal group-hover:text-primary transition-colors uppercase tracking-tighter">{project.title}</h3>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">arrow_outward</span>
              </div>
              <div className="flex gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] bg-secondary/5 text-secondary px-3 py-1 rounded-full border border-secondary/10">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-content font-medium line-clamp-2 leading-relaxed text-sm">
                {project.desc}
              </p>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-40 bg-surface-off rounded-[40px] border border-dashed border-slate-200 mt-10">
            <span className="material-symbols-outlined text-6xl text-slate-200 mb-6">search_off</span>
            <p className="text-charcoal font-black uppercase tracking-widest">Inquiry Unmatched</p>
            <p className="text-slate-400 text-sm mt-2">Adjust your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
