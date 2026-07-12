import { useTallyForm } from '../hooks/useTallyForm';

export default function Hero() {
  const { openForm } = useTallyForm();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1428] via-[#13203A] to-[#1A2744]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-60 translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 container mx-auto px-5 max-w-4xl text-center py-20">
        {/* Micro-hook bar - urgency + curiosity */}
        <div className="animate-fade-in inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-4 py-2 rounded-full shadow-sm mb-6 uppercase tracking-wide">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Free Workshop — Limited Seats
        </div>

        {/* Outcome-driven headline (sell the result, not method) */}
        <h1 className="animate-fade-in-up delay-100 font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
          Wake Up Feeling<br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Calm, Focused &amp; Peaceful</span>
        </h1>

        {/* Build curiosity before revealing mechanism */}
        <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-4 font-semibold">
          90 minutes. Simple techniques. Real transformation.
        </p>

        {/* Emotional resonance + identity transformation */}
        <p className="animate-fade-in-up delay-200 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
          Join hundreds who discovered how to quiet their mind naturally, sleep deeper, and handle stress without stress.
        </p>

        {/* Language + platform badge */}
        <div className="animate-fade-in-up delay-200 flex items-center justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-3.754 1 1 0 111.924-.558c.207.713.451 1.405.737 2.071A17.919 17.919 0 008 7.972V3a1 1 0 011-1zm2 6.1c.01.026.019.052.027.078a18.36 18.36 0 001.761 4.136 17.91 17.91 0 004.468-5.568 1 1 0 011.776.918 19.91 19.91 0 01-5.046 6.227 18.898 18.898 0 004.045 2.857 1 1 0 01-.893 1.788A20.9 20.9 0 0113 15.517a20.9 20.9 0 01-4.138 2.22 1 1 0 01-.894-1.788 18.898 18.898 0 004.046-2.857A19.897 19.897 0 019 8.1z" clipRule="evenodd"/></svg>
            Hinglish
          </span>
          <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/></svg>
            Zoom Live
          </span>
        </div>

        {/* Wistia video */}
        <div className="animate-fade-in delay-300 max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-10">
          <wistia-player media-id="mqp2ylatx9" aspect="1.7777777777777777"></wistia-player>
        </div>

        {/* High-visibility CTA */}
        <div className="animate-fade-in-up delay-400 mb-6">
          <button
            onClick={openForm}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-12 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-red-700 cursor-pointer border-0"
            style={{ animation: 'pulseSoft 2.5s ease-in-out infinite' }}
          >
            Reserve Your Free Seat Now
          </button>
        </div>

        {/* Scarcity + trust element */}
        <p className="text-gray-700 font-semibold text-sm">
          90 Minutes Live Online  |  100% Free  |  Zoom Pe
        </p>
      </div>
    </section>
  );
}
