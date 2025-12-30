
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Feedback', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-charcoal/95 backdrop-blur-md border-b border-secondary-light dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center bg-charcoal rounded-xl text-white group-hover:bg-primary transition-all duration-300 transform group-hover:rotate-6">
                <span className="material-symbols-outlined text-2xl">code_blocks</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-charcoal dark:text-white uppercase">M. Kimu</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-tight transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-charcoal-light dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-black transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95"
            >
              Collaborate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal dark:text-slate-300 hover:text-primary focus:outline-none"
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-charcoal border-b border-secondary-light dark:border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold ${
                  isActive(link.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-charcoal-light dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-xl text-white">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">M. Kimu</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              A Software Engineer from Khartoum to Kampala, architecting digital tools for global progress.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-charcoal-light hover:bg-primary transition-all duration-300">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-charcoal-light hover:bg-primary transition-all duration-300">
                <span className="material-symbols-outlined">code</span>
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-charcoal-light hover:bg-primary transition-all duration-300">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs opacity-50">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">Main Hub</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">The Journey</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">Engineering Work</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">Capabilities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs opacity-50">Masteries</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">Full-Stack Architecture</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">System Engineering</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">Distributed Networks</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors font-bold text-sm">Impact Intelligence</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs opacity-50">The Pulse</h4>
            <p className="text-slate-400 text-sm mb-6">Stay informed on technological shifts across East Africa.</p>
            <div className="flex bg-charcoal-light p-1 rounded-xl">
              <input type="email" placeholder="Email address" className="bg-transparent border-none focus:ring-0 w-full text-sm py-2.5 px-4 text-white placeholder-slate-500" />
              <button className="bg-primary hover:bg-primary-dark text-white rounded-lg px-5 transition-colors">
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-bold tracking-tight">© 2024 MATHEW KIMU ENGINEERING. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-primary text-xs font-bold transition-colors">PRIVACY</a>
            <a href="#" className="text-slate-500 hover:text-primary text-xs font-bold transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
