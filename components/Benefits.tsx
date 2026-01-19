
import React, { useState } from 'react';

interface BenefitsProps {
  t: any;
}

const Benefits: React.FC<BenefitsProps> = ({ t }) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const benefitImages = [
    'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800', // Intense
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800', // Coaching
    'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?auto=format&fit=crop&q=80&w=800', // Functional
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800', // Programs
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800', // Everyone
    'https://images.unsplash.com/photo-1547941126-3d5322b218b0?auto=format&fit=crop&q=80&w=800', // Unpredictable
  ];

  const metrics = [
    { label: 'INTENSITY', value: '100%' },
    { label: 'EXPERTISE', value: 'ELITE' },
    { label: 'RESULTS', value: 'RAPID' },
    { label: 'VARIETY', value: '∞' },
    { label: 'ADAPTIVE', value: 'FULL' },
    { label: 'DRIVE', value: 'MAX' },
  ];

  const icons = [
    'fa-bolt-lightning', 'fa-crown', 'fa-heart-pulse',
    'fa-layer-group', 'fa-people-group', 'fa-clover'
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Dynamic Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none transition-opacity duration-1000" style={{ opacity: activeIdx !== null ? 0.05 : 0.02 }}>
        <span className="text-[50vw] md:text-[35vw] font-black font-oswald whitespace-nowrap leading-none tracking-tighter">
          {activeIdx !== null ? 'FOCUS' : 'ELITE'}
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4 block">
              {t.lang === 'ar' ? 'المزايا الحصرية' : 'THE SBX ADVANTAGE'}
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black font-oswald uppercase tracking-tighter leading-[0.9] mb-6">
              {t.benefits.title}
            </h2>
            <div className="h-1.5 w-32 bg-accent"></div>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-neutral-600 font-black tracking-widest text-[10px] uppercase">
              Scroll to explore <br />
              <i className="fas fa-chevron-down mt-2 animate-bounce text-accent"></i>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective-1000">
          {t.benefits.items.slice(0, 6).map((item: any, idx: number) => (
            <div 
              key={idx} 
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
              className={`group relative h-[450px] md:h-[550px] overflow-hidden transition-all duration-700 cursor-pointer ${
                activeIdx !== null && activeIdx !== idx ? 'opacity-40 grayscale blur-[2px] scale-95' : 'opacity-100'
              }`}
            >
              {/* Card Container with 3D effect */}
              <div className="absolute inset-0 border border-neutral-900 group-hover:border-accent/50 transition-colors duration-500">
                {/* Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={benefitImages[idx]} 
                    alt={item.t} 
                    className="w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-50 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>

                {/* Interaction Overlay: Red Pulse focal point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                  {/* Top: Metric Tag */}
                  <div className="flex justify-between items-start">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0">
                      <span className="text-[10px] font-black tracking-widest text-accent uppercase">{metrics[idx].label}</span>
                      <div className="text-2xl font-black font-oswald text-white leading-none">{metrics[idx].value}</div>
                    </div>
                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white rounded-sm group-hover:bg-accent group-hover:border-accent transition-all duration-500 group-hover:rotate-[360deg]">
                      <i className={`fas ${icons[idx]} text-lg`}></i>
                    </div>
                  </div>

                  {/* Bottom: Title & Reveal Text */}
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-3xl md:text-4xl font-black font-oswald uppercase mb-4 leading-none tracking-tight">
                      {item.t.split(' ').map((word: string, i: number) => (
                        <span key={i} className={word.toUpperCase() === 'BOX' ? 'text-accent' : ''}>{word} </span>
                      ))}
                    </h3>
                    
                    <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 delay-100 overflow-hidden">
                      <p className="text-neutral-300 text-sm leading-relaxed mb-6 border-l-2 border-accent pl-4 italic">
                        {item.d}
                      </p>
                      <button className="text-[10px] font-black tracking-widest text-white hover:text-accent transition-colors uppercase flex items-center gap-2">
                        Discover More <i className="fas fa-arrow-right text-[8px]"></i>
                      </button>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-accent group-hover:w-8 group-hover:h-8 transition-all duration-500 flex items-center justify-center overflow-hidden">
                       <i className="fas fa-plus text-[10px] text-white opacity-0 group-hover:opacity-100"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA Footer */}
        <div className="mt-24 md:mt-32 border-t border-neutral-900 pt-16 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="text-center md:text-left">
              <p className="text-neutral-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4">
                 {t.lang === 'ar' ? 'ابدأ تحولك اليوم' : 'YOUR TRANSFORMATION STARTS WITH ONE CHOICE.'}
              </p>
              <h3 className="text-2xl md:text-4xl font-black font-oswald uppercase">
                READY TO JOIN THE <span className="text-accent underline decoration-4 underline-offset-8">TRIBE?</span>
              </h3>
           </div>
           <button className="group relative px-12 py-6 overflow-hidden bg-white text-black font-black uppercase tracking-widest text-xs transition-all hover:text-white">
              <span className="relative z-10">{t.pricing.cta}</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
           </button>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Benefits;
