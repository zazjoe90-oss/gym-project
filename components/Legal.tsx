
import React from 'react';

interface LegalProps {
  t: any;
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ t, type }) => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-neutral-950 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase mb-12">
          {type === 'privacy' ? t.nav.about.privacy : t.nav.about.terms}
        </h1>
        <div className="prose prose-invert prose-neutral max-w-none space-y-8 text-neutral-400 leading-relaxed">
          <section>
            <h2 className="text-white font-black font-oswald uppercase text-xl mb-4">1. Introduction</h2>
            <p>Welcome to StrongBox Performance Doha. We take your privacy and the terms of our service seriously. By accessing our facility or digital platforms, you agree to the conditions outlined here.</p>
          </section>
          <section>
            <h2 className="text-white font-black font-oswald uppercase text-xl mb-4">2. Performance Liability</h2>
            <p>Training at StrongBox involves high-intensity physical activity. All members must complete a health clearance and acknowledge the inherent risks associated with strength and conditioning training.</p>
          </section>
          <section>
            <h2 className="text-white font-black font-oswald uppercase text-xl mb-4">3. Data Protection</h2>
            <p>We use your data only to improve your training experience and manage your membership. We never share your biometric or personal data with third parties without explicit consent.</p>
          </section>
          <section>
            <h2 className="text-white font-black font-oswald uppercase text-xl mb-4">4. Code of Conduct</h2>
            <p>Respect for fellow athletes and staff is non-negotiable. Our tribe is built on support and intensity, but also on safety and discipline.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
