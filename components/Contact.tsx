import React from 'react';

interface ContactProps {
  t: any;
  onChatClick?: () => void;
}

const Contact: React.FC<ContactProps> = ({ t, onChatClick }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thestrongbox/',
      brandColor: '#E4405F',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/strongboxqatar/',
      brandColor: '#1877F2',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCWkvbZLSVElXym9KHtiqTrg',
      brandColor: '#FF0000',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: '#',
      brandColor: '#25D366',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.757-4.02c1.535.912 3.055 1.393 4.826 1.394 5.362 0 9.725-4.363 9.727-9.724.001-2.605-1.015-5.054-2.86-6.899-1.845-1.848-4.3-2.865-6.866-2.866-5.363 0-9.725 4.363-9.728 9.725-.001 1.745.465 3.45 1.344 4.962l-.995 3.633 3.731-.979zm12.016-7.79c-.11-.183-.404-.294-.846-.516-.442-.222-2.613-1.289-3.018-1.437-.405-.148-.7-.223-.994.222-.294.444-1.141 1.437-1.399 1.732-.257.296-.515.333-.957.111-.442-.222-1.866-.688-3.555-2.193-1.314-1.171-2.201-2.617-2.458-3.06-.258-.445-.027-.686.195-.906.199-.199.442-.518.663-.777.221-.259.294-.444.442-.741.147-.296.074-.555-.037-.777-.11-.222-.994-2.398-1.363-3.287-.358-.863-.729-.745-.994-.759-.257-.014-.552-.016-.847-.016-.295 0-.773.111-1.178.555-.405.444-1.547 1.518-1.547 3.703 0 2.185 1.584 4.296 1.805 4.592.221.296 3.117 4.761 7.55 6.678 1.054.456 1.877.728 2.519.932 1.059.337 2.023.289 2.785.176.85-.126 2.613-1.066 2.981-2.094.369-1.028.369-1.91.258-2.094z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-accent font-black tracking-[0.5em] text-[10px] uppercase mb-6 block">Direct Line</span>
          <h2 className="text-4xl md:text-7xl font-black font-oswald uppercase tracking-tighter leading-none mb-12">
            {t.nav.touch.label}
          </h2>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-black tracking-[0.3em] uppercase text-neutral-500 mb-4">Our Base</h4>
              <p className="text-xl font-bold text-white uppercase tracking-tight">Doha Sports Park, Lusail, Qatar</p>
            </div>
            
            <div>
              <h4 className="text-xs font-black tracking-[0.3em] uppercase text-neutral-500 mb-4">Call Us</h4>
              <p className="text-3xl font-black font-oswald text-accent">+974 4455 0123</p>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-all duration-300 shadow-md group/social"
                  style={{ color: social.brandColor }}
                  aria-label={social.name}
                >
                  <div className="group-hover/social:scale-125 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-950 p-8 md:p-12 border border-neutral-800 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 -mr-16 -mt-16 rotate-45 group-hover:bg-accent/20 transition-colors"></div>
          <h3 className="text-3xl font-black font-oswald uppercase mb-4 relative z-10">{t.contact.title}</h3>
          <p className="text-neutral-500 font-bold uppercase tracking-widest text-[10px] mb-8 relative z-10">{t.contact.sub}</p>
          
          <div className="space-y-4 relative z-10">
            <input type="text" placeholder="FULL NAME" className="w-full bg-black border border-neutral-800 p-4 font-bold text-xs tracking-widest text-white outline-none focus:border-accent transition-colors" />
            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-black border border-neutral-800 p-4 font-bold text-xs tracking-widest text-white outline-none focus:border-accent transition-colors" />
            <select className="w-full bg-black border border-neutral-800 p-4 font-bold text-xs tracking-widest text-white outline-none focus:border-accent transition-colors appearance-none">
              <option>{t.nav.programs.quwwa}</option>
              <option>{t.nav.programs.fit}</option>
              <option>{t.nav.programs.hybrid}</option>
              <option>{t.nav.programs.pt}</option>
            </select>
            <button className="w-full bg-accent hover:bg-red-700 text-white font-black py-5 tracking-[0.2em] uppercase text-xs transition-all duration-300">
              {t.contact.btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;