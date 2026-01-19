
import React from 'react';
import { ClassItem } from '../types';

interface ClassesProps {
  t: any;
}

const Classes: React.FC<ClassesProps> = ({ t }) => {
  const gymClasses: ClassItem[] = [
    {
      id: '1',
      title: t.lang === 'ar' ? 'رفع الأثقال' : 'POWER LIFTING',
      description: t.lang === 'ar' ? 'أتقن الحركات المركبة تحت إشراف الخبراء.' : 'Master the compound movements with expert supervision.',
      imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '2',
      title: t.lang === 'ar' ? 'ملاكمة النخبة' : 'BOXING ELITE',
      description: t.lang === 'ar' ? 'حصة سترونج بوكس المميزة. سرعة ودقة وقوة تحمل.' : 'The signature STRONG BOX class. Pure speed, precision, and endurance.',
      imageUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '3',
      title: t.lang === 'ar' ? 'تمرين متواتر عالى الكثافة' : 'HIIT INTENSITY',
      description: t.lang === 'ar' ? 'أقصى حرق للسعرات الحرارية في دورات تدريبية مكثفة.' : 'Maximum calorie burn in high-pressure training cycles.',
      imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: '4',
      title: t.lang === 'ar' ? 'يوغا استشفائية' : 'RECOVERY YOGA',
      description: t.lang === 'ar' ? 'استراتيجيات استشفاء النخبة لأداء مستدام.' : 'Elite recovery strategies for sustained performance.',
      imageUrl: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section id="classes" className="py-24 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-accent font-black tracking-widest text-sm uppercase">Training Programs</span>
            <h2 className="text-5xl font-black font-oswald mt-2 uppercase">{t.lang === 'ar' ? 'اختر' : 'CHOOSE YOUR'} <span className="text-accent">{t.lang === 'ar' ? 'معركتك' : 'BATTLE'}</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {gymClasses.map((item) => (
            <div key={item.id} className="group relative overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-accent transition-all duration-500 rounded-sm">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-black font-oswald mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
