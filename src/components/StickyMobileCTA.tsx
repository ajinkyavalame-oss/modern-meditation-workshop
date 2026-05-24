export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-4 pb-4 pt-3 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none">
      <div className="pointer-events-auto space-y-2">
        <div className="flex items-center justify-center gap-2 bg-red-50 rounded-full px-3 py-1.5 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <p className="text-xs font-bold text-red-700 uppercase tracking-wide">Limited Seats Available</p>
        </div>
        <a
          href="https://links.bizautomation.io/widget/form/W4sLGf8VJKf5dULX0A49"
          className="pointer-events-auto block w-full text-center bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-full px-6 py-5 shadow-2xl text-base transition-all duration-300 active:scale-95 hover:scale-105"
          style={{ animation: 'pulseSoft 2.5s ease-in-out infinite' }}
        >
          Reserve Your Free Seat
        </a>
      </div>
    </div>
  );
}
