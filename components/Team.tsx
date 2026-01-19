
import React from 'react';

interface TeamProps {
  t: any;
}

const Team: React.FC<TeamProps> = ({ t }) => {
  const coaches = [
    { 
      name: 'Alex Thorne', 
      role: 'Head Coach', 
      img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      name: 'Sarah J.', 
      role: 'S&C Specialist', 
      img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      name: 'Omar K.', 
      role: 'MetCon Expert', 
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600' 
    },
    { 
      name: 'Maria L.', 
      role: 'Mobility Coach', 
      img: 'https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?auto=format&fit=crop&q=80&w=600' 
    }
  ];

  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">World Class</span>
          <h2 className="text-4xl md:text-7xl font-black font-oswald uppercase tracking-tighter mb-4">{t.team.title}</h2>
          <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">{t.team.sub}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {coaches.map((c, i) => (
            <div key={i} className="group relative overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden border border-neutral-900 group-hover:border-accent transition-colors duration-500">
                <img 
                  src={c.img} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  alt={c.name} 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                <h4 className="text-xl md:text-2xl font-black font-oswald uppercase leading-none mb-1 group-hover:text-white transition-colors">{c.name}</h4>
                <p className="text-[10px] text-accent font-bold uppercase tracking-widest">{c.role}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 bg-accent flex items-center justify-center">
                  <i className="fas fa-plus text-xs text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
