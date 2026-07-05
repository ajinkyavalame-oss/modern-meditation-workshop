import { useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import {
  WHATSAPP_COMMUNITY_LINK,
  fireCompleteRegistration,
  trackWhatsAppClick,
} from './tracking';

function App() {
  useEffect(() => {
    fireCompleteRegistration();
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5 py-10">
      <main className="w-full max-w-md text-center flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 animate-fade-in-up leading-tight">
          Thank You! <span className="inline-block animate-bounce-subtle">🎉</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-slate-600 mb-10 animate-fade-in-up delay-100 leading-relaxed max-w-sm">
          Your registration is confirmed. To receive workshop updates and access
          details, join our WhatsApp Community.
        </p>

        {/* Primary CTA */}
        <a
          href={WHATSAPP_COMMUNITY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="group w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl px-8 py-5 text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 active:scale-[0.98] animate-fade-in-up delay-200 whatsapp-pulse animate-bounce-subtle"
        >
          <Phone className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          <span>Join WhatsApp Community</span>
          <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
        </a>
      </main>
    </div>
  );
}

export default App;
