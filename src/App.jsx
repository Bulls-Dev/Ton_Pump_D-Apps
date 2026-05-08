import { useState } from 'react';
import Navbar from './components/Navbar';
import TokenGrid from './components/TokenGrid';
import ChartModal from './components/ChartModal';
import Footer from './components/Footer';
import StatsPage from './components/StatsPage';
import DocsPage from './components/DocsPage';   
import { useTonData } from './hooks/useTonData';

function App() {
  const { tokens, loading } = useTonData();
  const [selectedToken, setSelectedToken] = useState(null);
  const [activeTab, setActiveTab] = useState('terminal'); 

  return (
    <div className="min-h-screen flex flex-col bg-[#05070a]">
      <Navbar setTab={setActiveTab} currentTab={activeTab} />
      
      <main className="flex-grow max-w-7xl mx-auto py-10 px-4 w-full">
        {activeTab === 'terminal' && (
          <>
            <header className="text-center mb-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tonBlue/10 blur-[120px] -z-10"></div>
              <h2 className="text-6xl font-black mb-4 uppercase tracking-tighter italic leading-none text-white">
                The TON <span className="text-tonBlue font-black">Fair Launchpad</span>
              </h2>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.5em]">Scan. Track. Ape. Repeat.</p>
            </header>

            {loading ? (
              <div className="text-center font-mono animate-pulse text-tonBlue py-20">{">"} INITIALIZING_TERMINAL...</div>
            ) : (
              <TokenGrid tokens={tokens} onSelectToken={setSelectedToken} />
            )}
          </>
        )}

        {activeTab === 'stats' && <StatsPage tokens={tokens} />}
        {activeTab === 'docs' && <DocsPage />}
      </main>

      <Footer />

      {selectedToken && (
        <ChartModal token={selectedToken} onClose={() => setSelectedToken(null)} />
      )}
    </div>
  );
}

export default App;