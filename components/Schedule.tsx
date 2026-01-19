
import React from 'react';

interface ScheduleProps {
  t: any;
}

const Schedule: React.FC<ScheduleProps> = ({ t }) => {
  const times = ['06:00', '07:00', '09:00', '16:00', '17:00', '18:00', '19:00'];
  const classes = ['QUWWA', 'SBX FIT', 'HYBRID', 'OPEN GYM', 'S and C'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-4 block">Calendar</span>
          <h1 className="text-4xl md:text-8xl font-black font-oswald uppercase leading-none mb-4">{t.schedule.title}</h1>
          <p className="text-neutral-500 font-bold uppercase tracking-widest text-xs">{t.schedule.sub}</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] border border-neutral-900">
            <div className="grid grid-cols-8 bg-neutral-900/50">
              <div className="p-4 border-r border-neutral-800"></div>
              {t.schedule.days.map((day: string) => (
                <div key={day} className="p-4 text-center font-black font-oswald uppercase text-xs tracking-widest border-r border-neutral-800 last:border-0">{day}</div>
              ))}
            </div>
            {times.map((time) => (
              <div key={time} className="grid grid-cols-8 border-t border-neutral-900">
                <div className="p-6 bg-neutral-950 border-r border-neutral-900 text-center text-xs font-black text-accent">{time}</div>
                {t.schedule.days.map((day: string, idx: number) => (
                  <div key={day} className="p-4 border-r border-neutral-900 last:border-0 relative group">
                    {(idx + parseInt(time)) % 3 === 0 && (
                      <div className="bg-neutral-800 p-3 rounded-sm border-l-2 border-accent group-hover:bg-accent group-hover:text-white transition-all cursor-pointer">
                        <div className="text-[10px] font-black uppercase mb-1">{classes[(idx + parseInt(time)) % classes.length]}</div>
                        <div className="text-[8px] font-bold opacity-60 uppercase">60 MINS</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
