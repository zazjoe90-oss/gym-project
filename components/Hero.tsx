import React from 'react';

interface HeroProps {
  t: any;
  onBookClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ t, onBookClick }) => {
  return (
    <section 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black"
      aria-label="Elite Fitness Introduction"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920" 
          alt="Athlete performing elite performance training at Strong Box Gym Doha" 
          className="w-full h-full object-cover object-center opacity-40 grayscale"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 pb-12">
        <div className="max-w-4xl">
          <p className="text-accent font-black tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-4 animate-pulse uppercase">
            {t.hero.est}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black font-oswald leading-[0.95] md:leading-[0.9] tracking-tighter mb-8 uppercase">
            {t.hero.title1} <br />
            <span className="text-accent underline decoration-2 md:decoration-4 underline-offset-4 md:underline-offset-8">
              {t.hero.limit}
            </span> <br />
            {t.hero.title2}
          </h1>
          <p className="text-neutral-400 text-base md:text-xl mb-10 max-w-xl leading-relaxed font-bold uppercase tracking-tight">
            {t.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onBookClick}
              aria-label="Book a performance class"
              className="w-full sm:w-auto bg-white text-black hover:bg-accent hover:text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-sm tracking-widest transition-all duration-300 uppercase text-xs md:text-sm shadow-xl shadow-white/5 border-2 border-transparent hover:border-accent"
            >
              {t.hero.btn1}
            </button>
            <button 
              aria-label="Consult with an elite trainer"
              className="w-full sm:w-auto border-2 border-white/20 hover:border-accent text-white font-black px-8 md:px-10 py-4 md:py-5 rounded-sm tracking-widest transition-all duration-300 uppercase text-xs md:text-sm backdrop-blur-sm"
            >
              {t.hero.btn2}
            </button>
          </div>
        </div>
      </div>

      {/* Social Links for SEO Authority */}
      <div className={`hidden sm:flex absolute ${t.dir === 'rtl' ? 'left-6 md:left-12' : 'right-6 md:right-12'} bottom-8 md:bottom-12 flex-col gap-6 text-neutral-500 z-10`}>
        <a href="https://www.instagram.com/thestrongbox/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all transform hover:scale-125" aria-label="Follow Strong Box on Instagram"><i className="fab fa-instagram text-xl"></i></a>
        <a href="https://www.facebook.com/strongboxqatar/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all transform hover:scale-125" aria-label="Join Strong Box on Facebook"><i className="fab fa-facebook-f text-xl"></i></a>
        <a href="https://www.youtube.com/channel/UCWkvbZLSVElXym9KHtiqTrg" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all transform hover:scale-125" aria-label="Subscribe to Strong Box on YouTube"><i className="fab fa-youtube text-xl"></i></a>
        <div className="h-16 md:h-24 w-px bg-neutral-800 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;