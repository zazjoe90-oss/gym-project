
import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  t: any;
  setView: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ t, setView }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thestrongbox/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/strongboxqatar/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCWkvbZLSVElXym9KHtiqTrg',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black pt-24 pb-12 px-6 md:px-12 border-t border-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Location Column */}
          <div className="lg:col-span-5">
            <button 
              onClick={() => setView('home')} 
              className="flex items-center gap-2 mb-8 group"
              aria-label="Strong Box Home"
            >
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-sm group-hover:rotate-12 transition-transform duration-500">
                <i className="fas fa-dumbbell text-white text-xl"></i>
              </div>
              <span className="text-2xl font-black font-oswald tracking-tighter uppercase">
                STRONG <span className="text-accent">BOX</span>
              </span>
            </button>
            <p className="text-neutral-500 text-xs font-bold leading-relaxed mb-10 uppercase tracking-widest max-w-sm">
              {t.lang === 'ar' 
                ? 'ثورة اللياقة في قطر منذ ٢٠١٣. نحن هنا لنرتقي بأدائك إلى مستويات جديدة.'
                : 'Qatar’s fitness revolution since 2013. We scale our programs to suit your evolution and drive elite performance.'}
            </p>
            
            {/* Branded Map Embed */}
            <div className="relative w-full h-64 border border-neutral-800 rounded-sm overflow-hidden group shadow-2xl shadow-accent/5">
              <div className="absolute inset-0 bg-accent/5 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <iframe 
                title="Strong Box Doha Elite Performance Location in Lusail"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.948283501655!2d51.50393237596541!3d25.40819442255761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c36353982563%3A0x6a05316314c6224!2sDoha%20Sports%20Park!5e0!3m2!1sen!2sqa!4v1715852345678!5m2!1sen!2sqa" 
                className="w-full h-full grayscale invert contrast-[1.2] brightness-75 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-1000"
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a 
                href="https://maps.app.goo.gl/kPQWq9jZg4XK83EN9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-20 bg-accent hover:bg-red-700 text-white text-[10px] font-black px-4 py-2 uppercase tracking-tighter transition-colors shadow-lg"
              >
                Open in Maps <i className="fas fa-external-link-alt ml-2"></i>
              </a>
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="bg-black/90 backdrop-blur-md text-accent text-[8px] font-black px-3 py-1.5 uppercase tracking-tighter border border-accent/40 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></span>
                  Lusail Performance Hub
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-accent font-black text-[10px] mb-8 uppercase tracking-[0.4em]">{t.nav.about.label}</h4>
            <ul className="space-y-4 text-neutral-500 text-[10px] font-black tracking-widest uppercase">
              <li><button onClick={() => setView('why')} className="hover:text-white transition-colors">The SBX Way</button></li>
              <li><button onClick={() => setView('team')} className="hover:text-white transition-colors">Elite Coaches</button></li>
              <li><button onClick={() => setView('success')} className="hover:text-white transition-colors">Success Stories</button></li>
              <li><button onClick={() => setView('blog')} className="hover:text-white transition-colors">SBX Journal</button></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2">
            <h4 className="text-accent font-black text-[10px] mb-8 uppercase tracking-[0.4em]">{t.nav.programs.label}</h4>
            <ul className="space-y-4 text-neutral-500 text-[10px] font-black tracking-widest uppercase">
              <li><button onClick={() => setView('home')} className="hover:text-white transition-colors">QUWWA (S&C)</button></li>
              <li><button onClick={() => setView('home')} className="hover:text-white transition-colors">SBX FIT (MetCon)</button></li>
              <li><button onClick={() => setView('wellness')} className="hover:text-white transition-colors">Corporate Performance</button></li>
              <li><button onClick={() => setView('schedule')} className="hover:text-white transition-colors">Battle Plan</button></li>
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="lg:col-span-3">
            <h4 className="text-accent font-black text-[10px] mb-8 uppercase tracking-[0.4em]">{t.nav.touch.label}</h4>
            
            <div className="flex gap-4 mb-10">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 shadow-lg group/icon"
                  aria-label={social.name}
                >
                  <div className="group-hover/icon:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-neutral-900 group">
               <p className="text-white font-oswald text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">+974 4455 0123</p>
               <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Doha Sports Park, Lusail, Qatar</p>
               <p className="text-neutral-700 text-[9px] font-bold uppercase tracking-widest mt-2">Open Daily 6AM - 9PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.2em] text-neutral-700 uppercase">
          <p>© 2013-{new Date().getFullYear()} STRONG BOX PERFORMANCE DOHA. BUILT FOR ELITES.</p>
          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-500 hover:text-white transition-all transform hover:scale-125"
                aria-label={`SBX ${social.name}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
