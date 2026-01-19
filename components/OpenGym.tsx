
import React from 'react';

interface OpenGymProps {
  t: any;
}

const OpenGym: React.FC<OpenGymProps> = ({ t }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-[400px] object-cover rounded-sm grayscale"
              alt="Open Gym Space"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 hidden md:block">
              <span className="text-white font-black font-oswald text-4xl uppercase leading-none">
                {t.lang === 'ar' ? 'مساحة' : 'UNLIMITED'}<br />{t.lang === 'ar' ? 'لا محدودة' : 'SPACE'}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-black font-oswald mb-8 uppercase leading-tight">
            {t.openGym.title}
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            {t.openGym.desc}
          </p>
          <div className="space-y-4">
             <div className="flex items-center gap-4 text-neutral-300">
               <i className="fas fa-clock text-accent"></i>
               <span className="font-bold uppercase tracking-widest text-sm">{t.lang === 'ar' ? 'طوال اليوم' : 'ALL DAY ACCESS'}</span>
             </div>
             <div className="flex items-center gap-4 text-neutral-300">
               <i className="fas fa-person-running text-accent"></i>
               <span className="font-bold uppercase tracking-widest text-sm">{t.lang === 'ar' ? 'منطقة جري مخصصة' : 'DEDICATED RUNNING AREA'}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenGym;
