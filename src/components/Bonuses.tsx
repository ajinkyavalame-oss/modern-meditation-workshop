import { useTallyForm } from '../hooks/useTallyForm';

const bonuses = [
  {
    title: 'Breathwork Guide',
    desc: 'Quick techniques you can use daily',
    icon: '💨',
  },
  {
    title: 'Meditation Playbook',
    desc: 'Simple routines for any time of day',
    icon: '🧘',
  },
  {
    title: 'Stress Relief Toolkit',
    desc: 'Practical methods without medicines',
    icon: '✨',
  },
];

export default function Bonuses() {
  const { openForm } = useTallyForm();
  return (
    <section className="py-16 px-5 bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
          You'll Also Get These Bonuses
        </h2>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {bonuses.map((b, i) => (
            <div key={i} className="bg-white border border-emerald-100 rounded-2xl p-6 text-center hover:shadow-md transition-all">
              <div className="text-4xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{b.title}</h3>
              <p className="text-xs text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-700 font-semibold text-sm mb-8">
          Only for people who register today.
        </p>

        <div className="text-center">
          <button
            onClick={openForm}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-10 py-4 text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0"
          >
            Get Access To Everything
          </button>
        </div>
      </div>
    </section>
  );
}
