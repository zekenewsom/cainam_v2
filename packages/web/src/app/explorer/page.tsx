"use client";
import React from 'react';
import NavBar from '../../components/NavBar';
import ResourceCard from './ResourceCard';
import KeyMetrics from '../../components/KeyMetrics';
import SentimentGauge from '../../components/SentimentGauge';
import ActivityTable from '../../components/ActivityTable';
import Script from 'next/script';

export default function ExplorerPage() {
  React.useEffect(() => {
    // Clean up any previous widget
    const chartDiv = document.getElementById('tradingview_advanced_chart');
    if (chartDiv) chartDiv.innerHTML = '';

    function loadWidget() {
      // @ts-ignore
      if (window.TradingView) {
        // @ts-ignore
        new window.TradingView.widget({
          autosize: true,
          symbol: 'BINANCE:BTCUSDT',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          container_id: 'tradingview_advanced_chart',
        });
      }
    }

    // If TradingView is already loaded
    // @ts-ignore
    if (window.TradingView) {
      loadWidget();
    } else {
      // Otherwise, inject the script
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.onload = loadWidget;
      document.body.appendChild(script);
      return () => {
        script.onload = null;
      };
    }
    // Clean up widget on unmount
    return () => {
      if (chartDiv) chartDiv.innerHTML = '';
    };
  }, []);

  const [showModule, setShowModule] = React.useState<string | null>(null);
  const [documentsYear, setDocumentsYear] = React.useState('2024');
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <>

      <NavBar />
      <main className="min-h-screen bg-gray-50 p-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Explorer</h1>
        </div>
        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            className="w-full max-w-4xl px-6 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black text-lg italic"
            placeholder="Enter token address (e.g. 0x...)"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />
        </div>
        {/* Chart and Analysis Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-[540px]">
          {/* TradingView Chart */}
          <div className="w-full h-full">
            <div id="tradingview-widget-container" className="w-full h-full min-h-[540px] bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col">
              <div id="tradingview_advanced_chart" className="flex-1 h-full w-full"></div>
            </div>
          </div>
          {/* Analysis Modules */}
          <div className="flex flex-col gap-6 h-full justify-between min-h-[540px]">
            <KeyMetrics />
            <h2 className="text-xl font-bold text-gray-900 mb-4 px-2 uppercase">Sentiment Analysis</h2>
            <div className="flex flex-row gap-6 w-full justify-between items-center">
              <SentimentGauge value={60} label="X" />
              <SentimentGauge value={72} label="Telegram" />
              <SentimentGauge value={45} label="News" />
            </div>
          </div>
        </div>

        {/* TradingView Widget Script */}
        {/* The widget is now managed by useEffect below */}


        {/* Activity Table */}
        <ActivityTable />

        {/* Modal Popup for Modules */}
        {showModule && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            onClick={() => setShowModule(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl relative animate-fade-in"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                aria-label="Close"
                onClick={() => setShowModule(null)}
              >
                &times;
              </button>
              {showModule === 'documents' && (
                <>
                  <h2 className="text-xl font-medium text-gray-800 mb-4 tracking-tight">Documents</h2>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Year</label>
                    <select
                      className="w-full border rounded px-3 py-2 mb-2"
                      value={documentsYear}
                      onChange={e => setDocumentsYear(e.target.value)}
                    >
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">Download Form 8949</button>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700">Download Activity</button>
                  </div>
                </>
              )}
              {showModule === 'settings' && (
                <>
                  <h2 className="text-xl font-medium text-gray-800 mb-4 tracking-tight">Settings</h2>
                  <div className="text-gray-600 mb-6">Configure your tax preferences:</div>
                  <div className="space-y-4">
                    {/* Cost basis method */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Cost basis method</label>
                      <select className="w-full border rounded px-3 py-2" defaultValue="FIFO">
                        <option value="FIFO">FIFO</option>
                        <option value="LIFO">LIFO</option>
                        <option value="HIFO">HIFO</option>
                      </select>
                    </div>
                    {/* Base currency */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Base currency</label>
                      <select className="w-full border rounded px-3 py-2" defaultValue="USD">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>
                    {/* Tax year */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-1">Tax year</label>
                      <select className="w-full border rounded px-3 py-2" defaultValue="2024">
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
              {showModule === 'resources' && (
                <>
                  <h2 className="text-xl font-medium text-gray-800 mb-4 tracking-tight">Resources</h2>
                  <div className="grid gap-4 max-h-[60vh] overflow-y-auto pr-2">
                    <ResourceCard
                      title="Paul Hastings LLP: Crypto Tax Update – April 2025"
                      description="Comprehensive analysis of the latest IRS rules, including Form 1099-DA and evolving crypto tax regulations."
                      url="https://www.paulhastings.com/insights/crypto-policy-tracker/crypto-tax-update-april-2025"
                    />
                    <ResourceCard
                      title="Harness Wealth: 2025 Crypto Tax Guide"
                      description="Detailed guide for individuals, covering capital gains, income tax, IRS forms, and practical strategies for minimizing crypto tax liabilities."
                      url="https://www.harnesswealth.com/articles/crypto-taxes-and-accounting-cpa-services/"
                    />
                    <ResourceCard
                      title="Kraken: U.S. Crypto Tax Guide 2025"
                      description="User-friendly overview of IRS crypto tax requirements, deadlines, and reporting obligations for U.S. taxpayers."
                      url="https://www.kraken.com/learn/crypto-tax-guide"
                    />
                    <ResourceCard
                      title="CoinLedger: Crypto Explorer – The Complete Guide (2025)"
                      description="Step-by-step guide explaining tax implications, required forms, and IRS enforcement trends for crypto holders."
                      url="https://coinledger.io/guides/crypto-tax"
                    />
                    <ResourceCard
                      title="Gordon Law Group: Crypto Cost Basis Guide (2025)"
                      description="Explains new cost basis rules, wallet-by-wallet accounting, and best practices for accurate crypto tax reporting."
                      url="https://gordonlaw.com/learn/crypto-cost-basis/"
                    />
                    <ResourceCard
                      title="Blockpit: Ultimate 2025 US Crypto Tax Guide"
                      description="Explains every IRS crypto tax rule in simple terms, including deductions and liability minimization."
                      url="https://www.blockpit.io/tax-guides/crypto-tax-usa"
                    />
                    <ResourceCard
                      title="Coinbase: Crypto Tax Information and Tools"
                      description="Official Coinbase resource for understanding which activities are taxable, how to access your tax documents, and which IRS forms you may receive."
                      url="https://help.coinbase.com/en/coinbase/taxes/general-information/tax-info"
                    />
                    <ResourceCard
                      title="Coinbase: Understanding Crypto Explorer"
                      description="Educational article on how using crypto can affect your U.S. taxes, what’s taxable, and links to further resources."
                      url="https://www.coinbase.com/learn/crypto-basics/understanding-crypto-taxes"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
