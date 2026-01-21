
import { siteConfig } from './site_config.ts';

export const translations = {
  en: {
    ...siteConfig.locales.en,
    // Add additional static content if not in JSON
    blog: {
      title: 'THE SBX JOURNAL',
      sub: 'Insights from the front lines of fitness.',
      posts: [
        { id: 1, title: 'Mastering the Snatch', date: 'Oct 12, 2024', cat: 'Technical', excerpt: 'The snatch is the fastest movement in sports. Here is how to master it.' },
        { id: 2, title: 'Fueling for QUWWA', date: 'Oct 05, 2024', cat: 'Nutrition', excerpt: 'What you eat before training determines how hard you can push.' },
        { id: 3, title: 'Rest is Weaponized', date: 'Sep 28, 2024', cat: 'Mindset', excerpt: 'Why active recovery is the secret to consistent gains.' }
      ]
    },
    schedule: {
      title: 'WEEKLY BATTLE PLAN',
      sub: 'Sync your life with the revolution.',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    wellness: {
      title: 'CORPORATE WELLNESS',
      sub: 'Elite performance for high-performing teams.',
      desc: 'We bring the StrongBox intensity to your workplace. From executive coaching to team-building fitness challenges, we build resilient workforces.'
    },
    team: {
      title: 'THE ELITE COACHES',
      sub: 'Meet the professionals dedicated to your transformation.'
    },
    success: {
      title: 'REAL PEOPLE. REAL RESULTS.',
      sub: 'Proof of the revolution.'
    },
    openGym: {
      title: 'ELITE OPEN GYM SPACE',
      desc: 'Train on your own terms. Our open gym hours give you full access to our world-class equipment and 1,200M² facility whenever you need it.'
    },
    contact: {
      title: 'READY TO START?',
      sub: 'Join the revolution today.',
      btn: 'Book Taster Class'
    }
  },
  ar: {
    ...siteConfig.locales.ar,
    blog: {
      title: 'مجلة SBX',
      sub: 'رؤى من خطوط اللياقة الأمامية.',
      posts: [
        { id: 1, title: 'إتقان حركة الخطف', date: '١٢ أكتوبر ٢٠٢٤', cat: 'فني', excerpt: 'حركة الخطف هي أسرع حركة في الرياضة. إليك كيفية إتقانها.' },
        { id: 2, title: 'التغذية لبرنامج قوة', date: '٠٥ أكتوبر ٢٠٢٤', cat: 'تغذية', excerpt: 'ما تأكله قبل التدريب يحدد مدى قوتك.' },
        { id: 3, title: 'الراحة سلاحك الخفي', date: '٢٨ سبتمبر ٢٠٢٤', cat: 'عقلية', excerpt: 'لماذا يعد الاستشفاء النشط سر المكاسب المستمرة.' }
      ]
    },
    schedule: {
      title: 'خطة المعركة الأسبوعية',
      sub: 'نسق حياتك مع الثورة.',
      days: ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد']
    },
    wellness: {
      title: 'عافية الشركات',
      sub: 'أداء النخبة للفرق عالية الأداء.',
      desc: 'ننقل كثافة سترونج بوكس إلى مكان عملك. من التدريب التنفيذي إلى تحديات اللياقة لبناء الفريق.'
    },
    team: {
      title: 'مدربو النخبة',
      sub: 'تعرف على المحترفين الملتزمين بتحولك.'
    },
    success: {
      title: 'أشخاص حقيقيون. نتائج حقيقية.',
      sub: 'دليل الثورة.'
    },
    openGym: {
      title: 'مساحة التدريب الحر النخبوية',
      desc: 'تدرب بشروطك الخاصة. تمنحك ساعات الصالة الرياضية المفتوحة وصولاً كاملاً إلى معداتنا العالمية ومرفقنا الذي تبلغ مساحته ١٢٠٠ متر مربع متى احتجت إلى ذلك.'
    },
    contact: {
      title: 'هل أنت مستعد للبدء؟',
      sub: 'انضم إلى الثورة اليوم.',
      btn: 'احجز حصة تجريبية'
    }
  }
};

export const branding = siteConfig.branding;
