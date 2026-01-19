
import React from 'react';

interface SuccessStoriesProps {
  t: any;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ t }) => {
  const stories = [
    { name: 'James Wilson', result: '-25KG & 1RM Squat +50KG', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600' },
    { name: 'Fatima Al-Thani', result: 'Elite CrossFit Level', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <section id="success" className="py-24 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">The Tribe</span>
            <h2 className="text-4xl md:text-7xl font-black font-oswald uppercase tracking-tighter leading-none">{t.success.title}</h2>
          </div>
          <p className="text-neutral-500 max-w-xs font-bold uppercase tracking-widest text-xs">{t.success.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {stories.map((s, i) => (
            <div key={i} className="flex flex-col gap-6 group">
              <div className="overflow-hidden relative border border-neutral-800">
                <img src={s.img} className="w-full h-80 object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000" alt={s.name} />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <h4 className="text-2xl font-black font-oswald uppercase mb-2">{s.name}</h4>
                <div className="flex items-center gap-4">
                  <span className="text-accent font-black tracking-widest text-xs uppercase">{s.result}</span>
                  <div className="h-px flex-1 bg-neutral-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
