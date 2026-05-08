import { TonConnectButton } from '@tonconnect/ui-react';

// On ajoute setTab et currentTab pour savoir où on est et changer de page
export default function Navbar({ setTab, currentTab }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-tonBlue/20 bg-[#05070a]/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* Clique sur le logo pour revenir au Terminal */}
        <div 
          onClick={() => setTab('terminal')}
          className="w-10 h-10 bg-tonBlue rounded-sm flex items-center justify-center font-black text-xl italic shadow-[0_0_15px_#0088CC] cursor-pointer"
        >
          T
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tighter leading-none text-white">TONPUMP</h1>
          <span className="text-[10px] text-tonBlue font-mono uppercase tracking-[0.3em]">Mainnet_v1.0</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 font-mono text-[11px]">
          {/* Bouton TERMINAL */}
          <button 
            onClick={() => setTab('terminal')}
            className={`transition-all hover:text-tonBlue ${currentTab === 'terminal' ? 'text-tonBlue border-b border-tonBlue' : 'text-gray-400'}`}
          >
            [ TERMINAL ]
          </button>

          {/* Bouton STATS */}
          <button 
            onClick={() => setTab('stats')}
            className={`transition-all hover:text-tonBlue ${currentTab === 'stats' ? 'text-tonBlue border-b border-tonBlue' : 'text-gray-400'}`}
          >
            [ NETWORK_STATS ]
          </button>

          {/* Bouton DOCS */}
          <button 
            onClick={() => setTab('docs')}
            className={`transition-all hover:text-tonBlue ${currentTab === 'docs' ? 'text-tonBlue border-b border-tonBlue' : 'text-gray-400'}`}
          >
            [ SNIPER_MANUAL ]
          </button>
        </div>

        {/* Le bouton de connexion TON */}
        <div className="ton-button-wrapper">
          <TonConnectButton />
        </div>
      </div>
    </nav>
  );
}