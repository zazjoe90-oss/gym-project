
import React from 'react';

interface ProgramsProps {
  t: any;
}

const Programs: React.FC<ProgramsProps> = ({ t }) => {
  const progs = [
    {
      key: 'quwwa',
      img: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=800',
      tag: 'POWER'
    },
    {
      key: 'fit',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
      tag: 'METCON'
    },
    {
      key: 'hybrid',
      img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800',
      tag: 'ELITE'
    },
    {
      key: 'pt',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
      tag: 'BESPOKE'
    }
  ];

  return (
    <section id="programs" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">Our Curriculum</span>
          <h2 className="text-4xl md:text-7xl font-black font-oswald uppercase tracking-tighter leading-none mb-4">
            {t.nav.programs.label}
          </h2>
          <div className="h-1 w-24 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {progs.map((p) => (
            <div key={p.key} className="group relative h-[400px] md:h-[500px] overflow-hidden border border-neutral-800">
              <img 
                src={p.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                alt={t.programs[p.key].title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute top-8 right-8">
                <span className="text-[10px] font-black tracking-widest bg-accent px-4 py-1 rounded-sm">{p.tag}</span>
              </div>

              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-3xl md:text-4xl font-black font-oswald uppercase mb-4 leading-none">
                  {t.programs[p.key].title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {t.programs[p.key].desc}
                </p>
                <div className="w-0 h-1 bg-accent group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
