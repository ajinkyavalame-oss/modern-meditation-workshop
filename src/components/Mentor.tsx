import { useTallyForm } from '../hooks/useTallyForm';

export default function Mentor() {
  const { openForm } = useTallyForm();
  return (
    <section className="py-16 px-5 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 font-playfair">
          Who's Leading This Workshop
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Image - smaller and not cut off */}
          <div className="text-center">
            <img
              src="/Instagram_Post_1080x1080_px-removebg-preview.png"
              alt="Ajinkya Valame — Meditation teacher"
              className="rounded-2xl object-contain w-full h-64 shadow-lg mx-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Ajinkya Valame</h3>
              <p className="text-emerald-600 font-bold text-sm">Certified Meditation Teacher</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm"><strong>7+ years</strong> helping hundreds find peace</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm">Certified in <strong>breathing & meditation techniques</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm">Transformed lives of <strong>working professionals & students</strong></p>
              </div>
            </div>

            <p className="text-gray-600 text-sm italic border-l-4 border-emerald-400 pl-4">
              "My mission is simple: help you discover inner peace and emotional balance naturally."
            </p>
          </div>
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
