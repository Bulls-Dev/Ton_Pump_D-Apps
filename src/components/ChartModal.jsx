export default function ChartModal({ token, onClose }) {
  if (!token) return null;

  const poolAddress = token.id.split('_')[1];
  const tokenAddress = token.address;

  const stonFiSwap = `https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=${tokenAddress}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/95 backdrop-blur-xl">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative bg-[#0d1117] border border-tonBlue/30 w-full max-w-7xl h-[90vh] flex flex-col shadow-[0_0_80px_rgba(0,136,204,0.15)] overflow-hidden">
        
        {/* TERMINAL HEADER */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0a0e14] z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
               <img src={token.image} className="w-12 h-12 rounded-full border-2 border-tonBlue/50" alt="" />
               <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-[#0a0e14] animate-pulse"></div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-black text-white text-xl tracking-tighter uppercase">{token.name}</h3>
                <span className="bg-tonBlue/20 text-tonBlue px-2 py-0.5 rounded text-[10px] font-mono border border-tonBlue/30">
                  ${token.symbol}
                </span>
              </div>
              <p className="text-[10px] text-gray-500 font-mono flex items-center gap-2 mt-1">
                <span className="text-tonBlue">CA:</span> {tokenAddress}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={stonFiSwap}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#0088CC] hover:bg-[#0099ee] text-white px-6 py-2.5 rounded-none font-black text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_15px_rgba(0,136,204,0.4)]"
            >
              🚀 Buy_on_StonFi
            </a>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-white font-mono text-xl p-2 bg-white/5 hover:bg-white/10 transition-colors"
            >
              [ESC]
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row bg-black overflow-hidden">
          
          <div className="flex-[3] relative border-r border-white/5 bg-[#05070a]">
            <iframe 
              height="100%" 
              width="100%" 
              id="geckoterminal-embed" 
              title="GeckoTerminal Embed" 
              src={`https://www.geckoterminal.com/ton/pools/${poolAddress}?embed=1&info=0&swaps=1&dark_mode=1`}
              frameBorder="0" 
              allow="clipboard-write" 
              allowFullScreen
              className="opacity-90"
            ></iframe>
          </div>

          <div className="hidden md:flex flex-[1] flex-col p-6 space-y-6 bg-[#0a0e14]/50 overflow-y-auto">
            <div>
              <h4 className="text-[10px] text-gray-500 uppercase font-mono mb-4 tracking-widest border-b border-white/5 pb-2">Quick_Actions</h4>
              <div className="grid grid-cols-1 gap-2">
                <button className="w-full bg-white/5 border border-white/10 py-3 text-[10px] text-white font-mono hover:bg-tonBlue/20 hover:border-tonBlue/50 transition-all text-left px-4">
                  RESCAN_CONTRACT
                </button>
                <button className="w-full bg-white/5 border border-white/10 py-3 text-[10px] text-white font-mono hover:bg-tonBlue/20 hover:border-tonBlue/50 transition-all text-left px-4">
                  HOLDER_DISTRIBUTION
                </button>
              </div>
            </div>

            <div className="bg-tonBlue/5 border border-tonBlue/20 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase font-mono italic">Market_Cap</span>
                <span className="text-white font-bold">${token.mcap}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase font-mono italic">Liquidity</span>
                <span className="text-cyan-400 font-bold">${token.liquidity}</span>
              </div>
              <div className="pt-2 border-t border-white/5">
                <div className="flex justify-between mb-1">
                  <span className="text-[9px] text-gray-500 uppercase">Bonding_Curve</span>
                  <span className="text-tonBlue text-[9px]">{token.progress}%</span>
                </div>
                <div className="w-full bg-gray-900 h-1 rounded-full">
                  <div className="h-full bg-tonBlue" style={{ width: `${token.progress}%` }}></div>
                </div>
              </div>
            </div>

            <p className="text-[9px] text-gray-600 font-mono italic leading-relaxed">
              * Trading on TON involves high risks. Make sure the LP is locked and the mint is renounced before aping.
            </p>
          </div>
        </div>

        <div className="md:hidden p-4 bg-[#0a0e14] border-t border-white/10">
           <a 
              href={stonFiSwap}
              className="flex items-center justify-center bg-tonBlue text-white w-full py-4 font-black uppercase text-xs tracking-widest"
            >
              Buy Token Now
            </a>
        </div>
      </div>
    </div>
  );
}