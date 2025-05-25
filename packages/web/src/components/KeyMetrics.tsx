import React from 'react';

// Placeholder props for future dynamic data
interface KeyMetricsProps {
  price?: string;
  volume?: string;
  supply?: string;
  liquidity?: string;
  marketCap?: string;
}

const MOCK_METRICS = {
  price: '$107,857.14',
  volume: '$2,345,678,000',
  supply: '19,000,000 BTC',
  liquidity: '$1,200,000,000',
  marketCap: '$2,000,000,000,000',
};

export default function KeyMetrics(props: KeyMetricsProps) {
  const metrics = { ...MOCK_METRICS, ...props };
  // Mocked change values for demo purposes
  const changes = {
    price: '+2.1%',
    volume: '+3.5%',
    supply: '',
    liquidity: '+1.2%',
    marketCap: '-0.8%',
  };
  const changeColor = (val: string) => val.startsWith('+') ? 'text-green-500' : val.startsWith('-') ? 'text-red-500' : 'text-gray-400';

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-medium text-gray-800 tracking-tight">Key Metrics</h2>
        <button className="text-gray-300 hover:text-gray-500" title="More info">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 16v-4m0-4h.01"/></svg>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {/* Row 1: Price & Volume */}
        <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex flex-col justify-between min-w-[150px]">
          <div className="text-sm text-gray-500 mb-1 uppercase">Price</div>
          <div className="flex items-end gap-2">
            <span className="text-base font-medium text-black">{metrics.price}</span>
            <span className={`text-sm font-semibold ${changeColor(changes.price)}`}>{changes.price}</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex flex-col justify-between min-w-[150px]">
          <div className="text-sm text-gray-500 mb-1 uppercase">Volume (24h)</div>
          <div className="flex items-end gap-2">
            <span className="text-base font-medium text-black">{metrics.volume}</span>
            <span className={`text-sm font-semibold ${changeColor(changes.volume)}`}>{changes.volume}</span>
          </div>
        </div>
        {/* Row 2: Supply & Liquidity */}
        <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex flex-col justify-between min-w-[150px]">
          <div className="text-sm text-gray-500 mb-1 uppercase">Supply</div>
          <div className="flex items-end gap-2">
            <span className="text-base font-medium text-black">{metrics.supply}</span>
            <span className="text-sm font-semibold text-gray-400">{changes.supply}</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex flex-col justify-between min-w-[150px]">
          <div className="text-sm text-gray-500 mb-1 uppercase">Liquidity</div>
          <div className="flex items-end gap-2">
            <span className="text-base font-medium text-black">{metrics.liquidity}</span>
            <span className={`text-sm font-semibold ${changeColor(changes.liquidity)}`}>{changes.liquidity}</span>
          </div>
        </div>
        {/* Row 3: Market Cap (spans both columns) */}
        <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 flex flex-col justify-between min-w-[150px] sm:col-span-2">
          <div className="text-sm text-gray-500 mb-1 uppercase">Market Cap</div>
          <div className="flex items-end gap-2">
            <span className="text-base font-medium text-black">{metrics.marketCap}</span>
            <span className={`text-sm font-semibold ${changeColor(changes.marketCap)}`}>{changes.marketCap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

