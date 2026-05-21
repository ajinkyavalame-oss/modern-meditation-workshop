import { useTallyForm } from '../hooks/useTallyForm';

const testimonials = [
  {
    quote: 'I finally sleep peacefully. This changed my life.',
    name: 'Priya S.',
    role: 'Working Professional',
  },
  {
    quote: 'Simple, effective, and exactly what I needed.',
    name: 'Rahul V.',
    role: 'Entrepreneur',
  },
  {
    quote: 'Felt lighter and calmer immediately.',
    name: 'Sneha K.',
    role: 'Student',
  },
  {
    quote: 'Best workshop I\'ve attended. Highly recommend.',
    name: 'Amit D.',
    role: 'Life Coach',
  },
];

export default function Testimonials() {
  const { openForm } = useTallyForm();
  return (
    <section className="py-16 px-5 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
          Real Results From Real People
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 hover:shadow-md transition-all">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 font-semibold text-sm italic mb-4">"{t.quote}"</p>
              <div>
                <p className="font-bold text-gray-900 text-xs">{t.name}</p>
                <p className="text-gray-600 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-700 font-semibold mb-6">Hundreds have already transformed their lives.</p>
          <button
            onClick={openForm}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-10 py-4 text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0"
          >
            Don't Miss Out
          </button>
        </div>
      </div>
    </section>
  );
}
