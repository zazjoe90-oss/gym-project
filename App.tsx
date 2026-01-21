
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Benefits from './components/Benefits.tsx';
import Programs from './components/Programs.tsx';
import Team from './components/Team.tsx';
import SuccessStories from './components/SuccessStories.tsx';
import Pricing from './components/Pricing.tsx';
import OpenGym from './components/OpenGym.tsx';
import Contact from './components/Contact.tsx';
import AICoach from './components/AICoach.tsx';
import Footer from './components/Footer.tsx';
import Blog from './components/Blog.tsx';
import Schedule from './components/Schedule.tsx';
import Wellness from './components/Wellness.tsx';
import Legal from './components/Legal.tsx';
import { translations, branding } from './translations.ts';

export type ViewType = 'home' | 'team' | 'blog' | 'success' | 'schedule' | 'wellness' | 'privacy' | 'terms' | 'why';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [view, setView] = useState<ViewType>('home');
  const t = translations[lang];

  useEffect(() => {
    // Inject accent color from JSON Manifest
    document.documentElement.style.setProperty('--accent', branding.accent);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const titles: Record<ViewType, string> = {
      home: `Home | ${branding.name} DOHA`,
      team: `Elite Coaches | ${branding.name} DOHA`,
      blog: `The Journal | ${branding.name} DOHA`,
      success: `Success Stories | ${branding.name} DOHA`,
      schedule: `Battle Plan Schedule | ${branding.name} DOHA`,
      wellness: `Corporate Wellness | ${branding.name} DOHA`,
      privacy: `Privacy Policy | ${branding.name} DOHA`,
      terms: `Terms of Service | ${branding.name} DOHA`,
      why: `Why Choose SBX | ${branding.name} DOHA`
    };
    
    document.title = titles[view] || `${branding.name} | DOHA ELITE PERFORMANCE`;
  }, [view]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  const scrollToCoach = () => {
    const aiButton = document.querySelector('button[class*="fixed bottom-8"]') as HTMLElement;
    if (aiButton) aiButton.click();
  };

  const renderContent = () => {
    return (
      <div key={view} className="view-transition">
        {(() => {
          switch (view) {
            case 'blog': return <Blog t={t} />;
            case 'schedule': return <Schedule t={t} />;
            case 'wellness': return <Wellness t={t} />;
            case 'team': return <Team t={t} />;
            case 'success': return <SuccessStories t={t} />;
            case 'privacy':
            case 'terms': return <Legal t={t} type={view} />;
            case 'why':
              return (
                <div className="pt-24">
                  <Features t={t} onChatClick={scrollToCoach} />
                  <Benefits t={t} />
                </div>
              );
            case 'home':
            default:
              return (
                <>
                  <Hero t={t} />
                  <Features t={t} onChatClick={scrollToCoach} />
                  <Benefits t={t} />
                  <Programs t={t} />
                  <Team t={t} />
                  <OpenGym t={t} />
                  <SuccessStories t={t} />
                  <Pricing t={t} />
                  <Contact t={t} onChatClick={scrollToCoach} />
                </>
              );
          }
        })()}
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen bg-black text-white selection:bg-red-800 selection:text-white"
      dir={t.dir}
      lang={t.lang}
    >
      <header>
        <Navbar scrolled={scrolled} lang={lang} toggleLang={toggleLang} t={t} setView={setView} />
      </header>
      
      <main className="transition-opacity duration-500">
        {renderContent()}
        <AICoach t={t} lang={lang} />
      </main>

      <Footer t={t} setView={setView} />
    </div>
  );
};

export default App;
