import { useTallyForm } from '../hooks/useTallyForm';

const audience = [
  { icon: '💼', label: 'Working professionals' },
  { icon: '🚀', label: 'Entrepreneurs' },
  { icon: '📚', label: 'Students' },
  { icon: '😴', label: 'Anyone with sleep issues' },
  { icon: '🎯', label: 'Leaders & coaches' },
  { icon: '🌿', label: 'Anyone seeking wellness' },
];

export default function PerfectFor() {
  const { openForm } = useTallyForm();
  return (
    <section className="py-16 px-5 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
          This Is For You If You Are...
        </h2>

        <div className="grid sm:grid-cols-2 gap-3 mb-12">
          {audience.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl p-4 border border-emerald-100 hover:border-emerald-200 hover:shadow-md transition-all">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <p className="text-gray-700 font-bold text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-12">
          <p className="text-emerald-700 font-bold">
            No experience needed. Beginners welcome.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={openForm}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-10 py-4 text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
