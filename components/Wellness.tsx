
import React from 'react';

interface WellnessProps {
  t: any;
}

const Wellness: React.FC<WellnessProps> = ({ t }) => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">Performance Culture</span>
            <h1 className="text-4xl md:text-8xl font-black font-oswald uppercase leading-[0.9] mb-8">{t.wellness.title}</h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10">{t.wellness.desc}</p>
            <button className="bg-white text-black font-black px-10 py-5 uppercase text-xs tracking-widest hover:bg-accent hover:text-white transition-all">Download Brochure</button>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-4 border border-accent opacity-20"></div>
             <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" className="w-full h-[600px] object-cover grayscale brightness-50" alt="Executive Performance" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="p-12 bg-black border border-neutral-900 group hover:border-accent transition-all">
              <i className="fas fa-chart-line text-3xl text-accent mb-6"></i>
              <h3 className="text-xl font-black font-oswald uppercase mb-4">Executive Coaching</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Personalized high-performance protocols for leadership teams.</p>
           </div>
           <div className="p-12 bg-black border border-neutral-900 group hover:border-accent transition-all">
              <i className="fas fa-users-gear text-3xl text-accent mb-6"></i>
              <h3 className="text-xl font-black font-oswald uppercase mb-4">Team Resiliency</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Group training sessions focused on stress management and physical durability.</p>
           </div>
           <div className="p-12 bg-black border border-neutral-900 group hover:border-accent transition-all">
              <i className="fas fa-shield-heart text-3xl text-accent mb-6"></i>
              <h3 className="text-xl font-black font-oswald uppercase mb-4">Health Strategy</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">Long-term workplace health assessments and implementation plans.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Wellness;
