import { useState } from 'react';
import { useTallyForm } from '../hooks/useTallyForm';

const faqs = [
  {
    q: 'Will I actually feel different?',
    a: 'Yes. Most participants report feeling noticeably calmer within the first 30 minutes of breathing techniques.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'No. This is designed for complete beginners. No meditation background needed.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. 100%.',
  },
  {
    q: 'What if I\'m skeptical?',
    a: 'Come with an open mind. The techniques are simple, practical, and evidence-based.',
  },
  {
    q: 'What if I can\'t make it live?',
    a: 'Registered participants get info about the next session in our WhatsApp community, so you won\'t miss out.',
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border border-emerald-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none group"
      >
        <span className="font-bold text-gray-900 text-sm sm:text-base pr-4">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M12 6v12m6-6H6'} />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { openForm } = useTallyForm();

  return (
    <section className="py-16 px-5 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
          Common Questions Answered
        </h2>

        <div className="space-y-3 mb-12">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-6 border border-emerald-100">
          <p className="text-gray-800 font-semibold mb-4">Still have questions?</p>
          <button
            onClick={() => document.getElementById('popup-W4sLGf8VJKf5dULX0A49')?.style.setProperty('display', 'block')}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-10 py-4 text-base shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-0"
          >
            Ask Me During The Workshop
          </button>
        </div>
      </div>
    </section>
  );
}
