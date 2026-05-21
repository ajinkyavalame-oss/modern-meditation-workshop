import { useTallyForm } from '../hooks/useTallyForm';

export default function Hero() {
  const { openForm } = useTallyForm();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-stone-50">
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
        <p className="animate-fade-in-up delay-200 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Join hundreds who discovered how to quiet their mind naturally, sleep deeper, and handle stress without stress.
        </p>

        {/* High-visibility CTA */}
        <div className="animate-fade-in-up delay-300 mb-6">
          <button
            onClick={openForm}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-12 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-red-700 cursor-pointer border-0"
            style={{ animation: 'pulseSoft 2.5s ease-in-out infinite' }}
          >
            Reserve Your Free Seat Now
          </button>
        </div>

        {/* Scarcity + trust element (no video clutter) */}
        <p className="text-gray-700 font-semibold text-sm">
          90 Minutes Live Online  |  100% Free
        </p>

        {/* Single strong visual instead of 3 images */}
        <div className="animate-fade-in delay-400 mt-16">
          <img
            src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Woman meditating peacefully"
            className="rounded-3xl object-cover w-full max-w-2xl h-80 shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
