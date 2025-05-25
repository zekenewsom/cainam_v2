import React from 'react';

interface SentimentGaugeProps {
  value?: number; // 0-100
  label?: string;
}

// Helper to get color based on sentiment value
function getGaugeColor(value: number) {
  if (value > 70) return 'text-green-500';
  if (value > 40) return 'text-yellow-500';
  return 'text-red-500';
}

export default function SentimentGauge({ value = 60, label = "Overall" }: SentimentGaugeProps) {
  // Clamp value between 0 and 100
  const clamped = Math.max(0, Math.min(100, value));
  const percent = clamped;
  const color = getGaugeColor(clamped);

  // SVG gauge arc (semi-circle)
  const r = 48;
  const c = 2 * Math.PI * r;
  const offset = c - (percent / 100) * c;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col h-full justify-between min-w-[220px]">
      <div className="flex flex-col items-center">
        <div className="relative w-[140px] h-[95px] flex flex-col items-center">
          <svg width="140" height="70" viewBox="0 0 140 70">
            {/* Background arc (full, light gray) */}
            <path d="M30 65 A50 50 0 0 1 110 65" stroke="#E5E7EB" strokeWidth="12" fill="none" />
            {/* Foreground arc: always fully filled, gradient */}
            <defs>
              <linearGradient id="sentiment-gradient" x1="30" y1="65" x2="110" y2="65" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="25%" stopColor="#F59E42" />
                <stop offset="50%" stopColor="#FACC15" />
                <stop offset="75%" stopColor="#84CC16" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <path d="M30 65 A50 50 0 0 1 110 65" stroke="url(#sentiment-gradient)" strokeWidth="12" fill="none" />
            {/* Thumb always at top center */}
            <circle cx="70" cy="15" r="8" fill="#fff" stroke="#E5E7EB" strokeWidth="4" />
          </svg>
          <div className="w-full flex justify-center mt-2 select-none">
            <span className="text-4xl font-bold text-gray-900 drop-shadow-lg">{clamped}</span>
          </div>
        </div>
        <div className="text-gray-500 text-base mt-2 font-medium tracking-tight">{label}</div>
      </div>
    </div>
  );
}
