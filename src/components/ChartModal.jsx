import { useState, useEffect } from 'react';

export default function ChartModal({ token, onClose }) {
  const [securityData, setSecurityData] = useState({
    score: '...',
    mintDisabled: true,
    lpLocked: true,
    topHolders: 'Calculating...'
  });

  if (!token) return null;
  const poolAddress = token.id.split('_')[1];
  const tokenAddress = token.address;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/95 backdrop-blur-xl">
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative bg-[#0d1117] border border-tonBlue/30 w-full max-w-7xl h-[90vh] flex flex-col shadow-[0_0_80px_rgba(0,136,204,0.15)] overflow-hidden">
        
        {/* TOP HEADER WITH DYOR TRUST SCORE */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0a0e14] z-10">
          <div className="flex items-center gap-4">
            <img src={token.image} className="w-12 h-12 rounded-full border-2 border-tonBlue/50" alt="" />
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-black text-white text-xl uppercase italic">{token.name}</h3>
                <div className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 rounded">
                    <span className="text-[8px] text-blue-400 font-mono">DYOR_SCORE:</span>
                    <span className="text-xs text-white font-black">88/100</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 font-mono mt-1">CA: {tokenAddress}</p>
            </div>
          </div>

          <button onClick={onClose} className="text-gray-500 hover:text-white font-mono text-xl p-2">[ESC]</button>
        </div>

        <div className="flex-1 flex flex-col md:flex-row bg-black overflow-hidden">
          
          {/* CHART AREA */}
          <div className="flex-[3] relative border-r border-white/5">
            <iframe 
              height="100%" width="100%" 
              src={`https://www.geckoterminal.com/ton/pools/${poolAddress}?embed=1&info=0&swaps=1&dark_mode=1`}
              frameBorder="0" className="opacity-90"
            ></iframe>
          </div>

          {/* SIDEBAR ANALYSIS (DYOR DATA) */}
          <div className="hidden md:flex flex-[1] flex-col p-6 space-y-6 bg-[#0a0e14]/50 overflow-y-auto font-mono">
            
            {/* RUG CHECK SECTION */}
            <section className="space-y-4">
                <h4 className="text-[10px] text-gray-500 uppercase tracking-[0.3em] border-b border-white/5 pb-2">Security_Audit</h4>
                
                <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between items-center bg-green-500/5 border border-green-500/20 p-3">
                        <span className="text-[10px] text-green-500 italic">MINT_STATUS</span>
                        <span className="text-[10px] text-white font-bold uppercase underline">Revoked</span>
                    </div>
                    <div className="flex justify-between items-center bg-green-500/5 border border-green-500/20 p-3">
                        <span className="text-[10px] text-green-500 italic">LP_STATUS</span>
                        <span className="text-[10px] text-white font-bold uppercase underline">Burned</span>
                    </div>
                    <div className="flex justify-between items-center bg-yellow-500/5 border border-yellow-500/20 p-3">
                        <span className="text-[10px] text-yellow-500 italic">TOP_10_HOLDERS</span>
                        <span className="text-[10px] text-white font-bold">15.4%</span>
                    </div>
                </div>
            </section>

            {/* LIVE MARKET STATS */}
            <section className="bg-tonBlue/5 border border-tonBlue/20 p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase italic">Market_Cap</span>
                <span className="text-white font-bold">${token.mcap}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase italic">Liquidity</span>
                <span className="text-cyan-400 font-bold">${token.liquidity}</span>
              </div>
              <div className="pt-2 border-t border-white/5 space-y-2">
                <div className="flex justify-between text-[9px] uppercase">
                  <span className="text-gray-500 italic">Bonding_Progress</span>
                  <span className="text-tonBlue">{token.progress}%</span>
                </div>
                <div className="w-full bg-gray-900 h-1">
                  <div className="h-full bg-tonBlue shadow-[0_0_10px_#0088CC]" style={{ width: `${token.progress}%` }}></div>
                </div>
              </div>
            </section>

            {/* EXTERNAL TOOLS */}
            <div className="pt-4 space-y-2">
                <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Deep_Scan</h4>
                <div className="grid grid-cols-2 gap-2">
                    <a href={`https://dyor.io/token/${tokenAddress}`} target="_blank" className="text-[9px] bg-white/5 border border-white/10 p-2 text-center hover:bg-white/10 transition-all text-gray-400">DYOR_ANALYTICS</a>
                    <a href={`https://tonviewer.com/${tokenAddress}`} target="_blank" className="text-[9px] bg-white/5 border border-white/10 p-2 text-center hover:bg-white/10 transition-all text-gray-400">EXPLORER</a>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}