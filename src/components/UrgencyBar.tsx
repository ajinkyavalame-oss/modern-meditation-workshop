import { useEffect, useState } from 'react';

const TOTAL_SECONDS = 15 * 60;

export default function UrgencyBar() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => (prev <= 0 ? TOTAL_SECONDS : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-5 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-3 max-w-full">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">⏰ Limited Seats:</span>
        <span className="inline-block bg-red-700 rounded-full px-3 py-1 font-bold text-sm animate-pulse tabular-nums">
          {formatted}
        </span>
        <span className="text-xs sm:text-sm font-semibold ml-2 hidden sm:inline">Register now before spots fill up</span>
      </div>
    </div>
  );
}
