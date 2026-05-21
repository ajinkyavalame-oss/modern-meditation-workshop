import { useEffect, useState } from 'react';

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 15;
        }
        return prev - 1;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-5 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-3 max-w-full">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">⏰ Limited Seats:</span>
        <span className="inline-block bg-red-700 rounded-full px-3 py-1 font-bold text-sm animate-pulse">
          {timeLeft} minutes left
        </span>
        <span className="text-xs sm:text-sm font-semibold ml-2 hidden sm:inline">Register now before spots fill up</span>
      </div>
    </div>
  );
}
