import { useTallyForm } from '../hooks/useTallyForm';

export default function FinalCTA() {
  const { openForm } = useTallyForm();

  return (
    <section className="py-24 pb-80 px-5 bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair mb-8 leading-tight">
          Your Peaceful Life Starts Here
        </h2>

        <div className="space-y-4 mb-10 max-w-2xl mx-auto">
          <p className="text-white/90 text-lg leading-relaxed">
            Imagine waking up feeling <strong className="text-white">calmer, lighter, more focused</strong>, and emotionally balanced.
          </p>
          <p className="text-white/90 text-lg leading-relaxed">
            Imagine handling stress naturally without depending on medicines or external distractions.
          </p>
          <p className="text-white/90 text-lg leading-relaxed">
            Imagine having <strong className="text-white">peaceful sleep, positive energy, and inner calmness</strong> every single day.
          </p>
          <p className="text-white text-xl font-semibold font-playfair italic mt-2">
            This is your opportunity to begin that transformation.
          </p>
        </div>

        <button
          onClick={openForm}
          id="register"
          className="inline-block bg-red-500 text-white font-bold rounded-full px-12 py-5 text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-white/30 border-0 cursor-pointer"
          style={{ animation: 'pulseSoft 2.5s ease-in-out infinite' }}
        >
          Yes! I'm Ready to Join This Workshop
        </button>

        <p className="text-white/70 text-sm mt-5">
          100% Free — No Experience Needed — Limited Seats Available
        </p>
      </div>
    </section>
  );
}
