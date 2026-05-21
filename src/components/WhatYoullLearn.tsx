import { useTallyForm } from '../hooks/useTallyForm';

const sessions = [
  {
    number: '01',
    title: 'Understand The Connection',
    icon: '🧠',
    outcome: 'See why your stress really happens',
  },
  {
    number: '02',
    title: 'Learn Breathing Techniques',
    icon: '💨',
    outcome: 'Feel calm within minutes',
  },
  {
    number: '03',
    title: 'Experience Guided Meditation',
    icon: '🌸',
    outcome: 'Enter deep inner peace',
  },
  {
    number: '04',
    title: 'Unlock Your Energy',
    icon: '✨',
    outcome: 'Transform how you feel daily',
  },
];

export default function WhatYoullLearn() {
  const { openForm } = useTallyForm();
  return (
    <section className="py-16 px-5 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
          Your 90-Minute Roadmap to Calm
        </h2>

        <div className="space-y-4 mb-12">
          {sessions.map((s) => (
            <div key={s.number} className="flex items-start gap-6 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-5 border border-emerald-100 hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="flex-shrink-0 text-center">
                <div className="text-5xl font-bold font-playfair text-emerald-600 opacity-30 leading-none">{s.number}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
                </div>
                <p className="text-gray-700 font-semibold text-sm italic">{s.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={openForm}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-10 py-4 text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
}
