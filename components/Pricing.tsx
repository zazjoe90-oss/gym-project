
import React from 'react';
import { PricingPlan } from '../types';

interface PricingProps {
  t: any;
}

const Pricing: React.FC<PricingProps> = ({ t }) => {
  const plans: PricingPlan[] = [
    {
      name: t.lang === 'ar' ? 'المستكشف' : 'SCOUT',
      price: '180',
      features: t.lang === 'ar' 
        ? ['دخول ٢٤/٧', 'معدات قياسية', 'غرف تبديل الملابس', 'واي فاي مجاني']
        : ['24/7 Gym Access', 'Standard Equipment', 'Locker Room Access', 'Free Wi-Fi'],
    },
    {
      name: t.lang === 'ar' ? 'المحارب' : 'WARRIOR',
      price: '360',
      features: t.lang === 'ar'
        ? ['كل ميزات المستكشف', 'حصص غير محدودة', 'خزانة شخصية', 'تصريح ضيف (٢/شهر)']
        : ['Everything in Scout', 'Unlimited Classes', 'Personal Locker', 'Guest Passes (2/mo)'],
      recommended: true,
    },
    {
      name: t.lang === 'ar' ? 'الجبار' : 'TITAN',
      price: '720',
      features: t.lang === 'ar'
        ? ['كل ميزات المحارب', 'تدريب شخصي (٤/شهر)', 'جلسات علاج طبيعي', 'خصم مكملات']
        : ['Everything in Warrior', 'Personal Training (4/mo)', 'Physiotherapy Sessions', 'Supplements Discount'],
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-6 md:px-12 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-black tracking-widest text-xs md:text-sm uppercase">{t.pricing.tag}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald mt-2 uppercase">{t.pricing.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative p-8 md:p-10 flex flex-col border-2 transition-all duration-500 rounded-sm ${
                plan.recommended 
                  ? 'bg-neutral-950 border-accent lg:scale-105 z-10 shadow-2xl' 
                  : 'bg-black border-neutral-800 md:grayscale hover:grayscale-0'
              } ${plan.recommended && 'md:order-none'} ${!plan.recommended && plan.name === 'TITAN' && 'md:col-span-2 lg:col-span-1'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[10px] font-black tracking-widest px-4 py-1 rounded-sm uppercase whitespace-nowrap">
                  {t.pricing.popular}
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black font-oswald mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl md:text-4xl font-black font-oswald text-accent">{plan.price}</span>
                <span className="text-neutral-500 text-[10px] md:text-sm font-bold uppercase">{t.pricing.currency} {t.pricing.period}</span>
              </div>
              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-neutral-400">
                    <i className="fas fa-check text-accent text-[10px]"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 font-black tracking-widest transition-all duration-300 uppercase text-xs md:text-sm rounded-sm ${
                plan.recommended 
                  ? 'bg-accent hover:bg-red-700 text-white' 
                  : 'bg-white hover:bg-accent hover:text-white text-black'
              }`}>
                {t.pricing.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
