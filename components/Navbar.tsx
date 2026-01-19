
import React, { useState } from 'react';
import { ViewType } from '../App';

interface NavbarProps {
  scrolled: boolean;
  lang: 'en' | 'ar';
  toggleLang: () => void;
  t: any;
  setView: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, lang, toggleLang, t, setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menu = [
    {
      label: t.nav.about.label,
      links: [
        { name: t.nav.about.home, view: 'home' as ViewType },
        { name: t.nav.about.why, view: 'why' as ViewType },
        { name: t.nav.about.team, view: 'team' as ViewType },
        { name: t.nav.about.success, view: 'success' as ViewType },
        { name: t.nav.about.blog, view: 'blog' as ViewType }
      ]
    },
    {
      label: t.nav.programs.label,
      links: [
        { name: t.nav.programs.schedule, view: 'schedule' as ViewType },
        { name: t.nav.programs.quwwa, view: 'home' as ViewType, anchor: 'programs' },
        { name: t.nav.programs.fit, view: 'home' as ViewType, anchor: 'programs' },
        { name: t.nav.programs.wellness, view: 'wellness' as ViewType }
      ]
    }
  ];

  const handleNavClick = (view: ViewType, anchor?: string) => {
    setView(view);
    setMobileMenuOpen(false);
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl py-3 border-b border-neutral-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button onClick={() => setView('home')} className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-accent flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:rotate-12">
            <i className="fas fa-dumbbell text-white text-lg md:text-xl"></i>
          </div>
          <span className="text-xl md:text-2xl font-black font-oswald tracking-tighter">
            STRONG <span className="text-accent">BOX</span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {menu.map((cat) => (
            <div 
              key={cat.label} 
              className="relative group h-full py-2"
              onMouseEnter={() => setActiveDropdown(cat.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-[10px] font-black tracking-[0.2em] text-neutral-400 group-hover:text-white flex items-center gap-1 uppercase transition-colors">
                {cat.label} <i className="fas fa-chevron-down text-[8px] opacity-50"></i>
              </button>
              
              <div className={`absolute top-full left-0 pt-4 w-64 transition-all duration-300 ${activeDropdown === cat.label ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                <div className="bg-neutral-900 border border-neutral-800 p-4 shadow-2xl rounded-sm">
                  {cat.links.map((link) => (
                    <button 
                      key={link.name} 
                      onClick={() => handleNavClick(link.view, link.anchor)}
                      className="w-full text-left block py-3 px-2 text-[11px] font-bold text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all uppercase tracking-widest"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <button onClick={() => setView('home')} className="text-[10px] font-black tracking-[0.2em] text-neutral-400 hover:text-white uppercase transition-colors">{t.nav.touch.contact}</button>

          <div className="h-4 w-px bg-neutral-800"></div>

          <button onClick={toggleLang} className="text-[10px] font-black border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-all rounded-sm">{lang === 'en' ? 'العربية' : 'EN'}</button>

          <a href="#pricing" onClick={() => setView('home')} className="bg-accent hover:bg-red-700 text-white font-black px-6 py-2 rounded-sm text-xs tracking-widest transition-all duration-300 transform hover:scale-105 uppercase">
            {t.nav.members.join}
          </a>
        </div>

        <button className="lg:hidden text-white text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 top-[60px] bg-black z-40 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="p-8 space-y-8 h-full overflow-y-auto pb-32">
          {menu.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-accent font-black text-xs tracking-[0.3em] mb-4 uppercase">{cat.label}</h3>
              <div className="grid grid-cols-1 gap-4">
                {cat.links.map((link) => (
                  <button key={link.name} onClick={() => handleNavClick(link.view, link.anchor)} className="text-left text-xl font-black font-oswald uppercase text-neutral-300 active:text-white">
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => { setView('home'); setMobileMenuOpen(false); }} className="text-left text-xl font-black font-oswald uppercase text-neutral-300">{t.nav.touch.contact}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
