import { useTallyForm } from '../hooks/useTallyForm';

const benefits = [
  'Calm your racing mind',
  'Sleep peacefully again',
  'Reduce daily anxiety',
  'Increase your energy naturally',
  'Handle stress without stress',
  'Feel emotionally balanced',
];

export default function Transformation() {
  const { openForm } = useTallyForm();
  return (
    <section className="py-16 px-5 bg-gradient-to-br from-emerald-50 to-sky-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10 font-playfair">
          When You Leave This Workshop
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-emerald-100 shadow-sm hover:shadow-md transition-all">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700 font-semibold text-sm">{b}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={openForm}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-10 py-4 text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0"
          >
            Claim Your Free Seat Now
          </button>
        </div>
      </div>
    </section>
  );
}
