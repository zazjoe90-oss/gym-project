import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Programs from './components/Programs';
import Team from './components/Team';
import SuccessStories from './components/SuccessStories';
import Pricing from './components/Pricing';
import OpenGym from './components/OpenGym';
import Contact from './components/Contact';
import AICoach from './components/AICoach';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Schedule from './components/Schedule';
import Wellness from './components/Wellness';
import Legal from './components/Legal';
import { translations } from './translations';

export type ViewType = 'home' | 'team' | 'blog' | 'success' | 'schedule' | 'wellness' | 'privacy' | 'terms' | 'why';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [view, setView] = useState<ViewType>('home');
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO: Update page title and reset scroll when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const titles: Record<ViewType, string> = {
      home: 'Home | STRONG BOX DOHA',
      team: 'Elite Coaches | STRONG BOX DOHA',
      blog: 'The Journal | STRONG BOX DOHA',
      success: 'Success Stories | STRONG BOX DOHA',
      schedule: 'Battle Plan Schedule | STRONG BOX DOHA',
      wellness: 'Corporate Wellness | STRONG BOX DOHA',
      privacy: 'Privacy Policy | STRONG BOX DOHA',
      terms: 'Terms of Service | STRONG BOX DOHA',
      why: 'Why Choose SBX | STRONG BOX DOHA'
    };
    
    document.title = titles[view] || 'STRONG BOX | DOHA ELITE PERFORMANCE';
  }, [view]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  const scrollToCoach = () => {
    const aiButton = document.querySelector('button[class*="fixed bottom-8"]') as HTMLElement;
    if (aiButton) aiButton.click();
  };

  const scrollToPrograms = () => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById('programs');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('programs');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'blog':
        return <Blog t={t} />;
      case 'schedule':
        return <Schedule t={t} />;
      case 'wellness':
        return <Wellness t={t} />;
      case 'team':
        return <Team t={t} />;
      case 'success':
        return <SuccessStories t={t} />;
      case 'privacy':
      case 'terms':
        return <Legal t={t} type={view} />;
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
            <Hero t={t} onBookClick={scrollToPrograms} />
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