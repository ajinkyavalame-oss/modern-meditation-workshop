import { useTallyForm } from '../hooks/useTallyForm';

const points = [
  { icon: '😰', text: 'Stress that won\'t go away' },
  { icon: '😴', text: 'Sleep that doesn\'t feel restful' },
  { icon: '🔄', text: 'Endless overthinking cycles' },
  { icon: '⚡', text: 'Energy that crashes by noon' },
  { icon: '😔', text: 'Overwhelmed by emotions' },
  { icon: '🎯', text: 'Focus scattered everywhere' },
];

export default function PainPoints() {
  const { openForm } = useTallyForm();
  return (
    <section className="py-16 px-5 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4 font-playfair">
          If This Is You Right Now...
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          You're not alone. And there's a way out.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-4 border border-red-100 hover:border-red-200 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl flex-shrink-0">{point.icon}</span>
              <p className="text-gray-700 font-semibold text-sm">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={openForm}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-10 py-4 text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0"
          >
            Join The Workshop
          </button>
        </div>
      </div>
    </section>
  );
}
