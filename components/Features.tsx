
import React from 'react';

interface FeaturesProps {
  t: any;
  onChatClick?: () => void;
}

const Features: React.FC<FeaturesProps> = ({ t, onChatClick }) => {
  return (
    <section id="about" className="bg-neutral-950 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
        {/* Why SBX is Special */}
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-accent font-black tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4 block">Our DNA</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-oswald mb-6 md:mb-8 leading-tight uppercase">
              {t.special.title}
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              {t.special.desc}
            </p>
            <button 
              onClick={onChatClick}
              className="w-full sm:w-auto bg-accent hover:bg-red-700 text-white font-black px-8 py-4 rounded-sm tracking-widest transition-all duration-300 uppercase text-xs"
            >
              <i className="fas fa-comments mr-2"></i> {t.hero.btn2}
            </button>
          </div>
          <div className="w-full lg:w-1/2 relative group">
             {/* Dramatic Red Outer Glow */}
             <div className="absolute -inset-2 md:-inset-4 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
             <div className="absolute -inset-2 md:-inset-4 border border-accent opacity-30 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
             
             <div className="overflow-hidden relative shadow-2xl shadow-accent/5">
               {/* Colorfied Image: High Contrast and Saturation */}
               <img 
                 src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-[350px] md:h-[500px] object-cover contrast-125 saturate-125 brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000"
                 alt="Elite Training Session"
               />
               
               {/* Dynamic Red Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
             </div>

             {/* Focal Point Element */}
             <div className="absolute bottom-8 right-8 z-20">
                <div className="w-16 h-16 bg-accent flex items-center justify-center text-white shadow-xl transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  <i className="fas fa-dumbbell -rotate-45 group-hover:rotate-0 transition-transform"></i>
                </div>
             </div>
          </div>
        </div>

        {/* History / Revolution */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-accent font-black tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4 block">The Revolution</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black font-oswald mb-6 md:mb-8 leading-tight uppercase">
              {t.special.historyTitle}
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              {t.special.historyDesc}
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-48 md:h-64 object-cover grayscale brightness-50 hover:brightness-100 hover:grayscale-0 hover:scale-110 transition-all duration-700 cursor-crosshair" 
                  alt="History 1 - Dramatic Lifting" 
                />
                <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-accent/50 transition-colors"></div>
             </div>
             <div className="overflow-hidden translate-y-6 md:translate-y-8 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400" 
                  className="w-full h-48 md:h-64 object-cover grayscale brightness-50 hover:brightness-100 hover:grayscale-0 hover:scale-110 transition-all duration-700 cursor-crosshair" 
                  alt="History 2 - Equipment" 
                />
                <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-accent/50 transition-colors"></div>
             </div>
          </div>
        </div>

        {/* Success / Facility */}
        <div className="bg-neutral-900 p-8 md:p-20 rounded-sm border border-neutral-800 text-center relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-accent/10 -mr-12 -mt-12 md:-mr-16 md:-mt-16 rotate-45 group-hover:bg-accent/20 transition-colors"></div>
           <h2 className="text-2xl sm:text-3xl md:text-5xl font-black font-oswald mb-4 md:mb-6 uppercase relative z-10">{t.special.facilityTitle}</h2>
           <p className="text-neutral-400 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 relative z-10">
             {t.special.facilityDesc}
           </p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
              <div>
                <span className="block text-3xl md:text-4xl font-black font-oswald text-accent">1,200</span>
                <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">Square Meters</span>
              </div>
              <div className="w-px h-10 md:h-12 bg-neutral-800 hidden sm:block"></div>
              <div>
                <span className="block text-3xl md:text-4xl font-black font-oswald text-accent">DSP</span>
                <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest">Doha Sports Park</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
