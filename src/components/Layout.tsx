import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone, Mail, Home, Info, Shield, Layers, Users, MessageSquare, ExternalLink, Globe, Linkedin, Twitter, Github, Facebook, Instagram, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { LOGO } from '../constants';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Layers },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/90 backdrop-blur-md h-16 md:h-20 border-b border-slate-200 shadow-xl shadow-slate-200/20'
          : 'bg-transparent h-16 md:h-24'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center group">
            <div className="h-16 w-auto flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <img src={LOGO} alt="Autolink" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 rounded-xl text-[13px] font-bold uppercase tracking-widest transition-all hover:text-brand-600 flex items-center gap-2',
                    isActive ? 'text-brand-600 bg-brand-50/50 shadow-sm' : 'text-slate-600 hover:bg-slate-50'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 bg-white shadow-sm border border-slate-100 rounded-xl hover:text-brand-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-8 space-y-8"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={LOGO} alt="Autolink Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className="font-bold text-slate-900">AUTOLINK</span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-3 bg-slate-50 rounded-full"><X className="w-6 h-6" /></button>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="flex items-center gap-4 text-3xl font-black text-slate-900 tracking-tighter leading-none py-3 border-b border-slate-50 transition-colors hover:text-brand-600">{link.name.toUpperCase()}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white py-12 md:py-16 relative overflow-hidden border-t border-white/5">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo Section */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-2xl p-2 font-black text-xl text-white">
                <img src={LOGO} alt="Autolink Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Engineering mission-critical infrastructure for the modern enterprise. We provide high-end security, networking, and connectivity solutions.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all group"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h5 className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 md:mb-10">Solutions</h5>
            <ul className="space-y-3 md:space-y-5">
              {[
                'CCTV Surveillance',
                'Fire Alarm Systems',
                'Access Control',
                'Wireless & Wired Networking',
                'IT Infrastructure',
                'Audio-Visual & Collaboration'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-300 transition-colors hover:text-white cursor-pointer group">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 md:mb-10">Company</h5>
            <ul className="space-y-3 md:space-y-5">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Identity', path: '/about' },
                { name: 'Detailed Services', path: '/services' },
                { name: 'Contact Hub', path: '/contact' },
                { name: 'Careers', path: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-slate-300 transition-colors hover:text-white group">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-6 md:mb-10">Contact</h5>
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-300 leading-relaxed max-w-[180px]">
                  362/7, 2nd Floor, Synerge Workspace, Jayanagar, Bangalore 560041
                </p>
              </div>
              <div className="flex gap-3 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-200">+91 87226 42718 / +91 99458 43434</p>
                  <p className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-[8px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest text-center md:text-left">
            © 2026 AUTOLINK INFOTECH. ALL RIGHTS RESERVED.
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all group"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 -rotate-90 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
