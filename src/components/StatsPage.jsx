export default function StatsPage({ tokens }) {
  // --- REAL LOGIC ---
  const topGainers = [...tokens].sort((a, b) => b.progress - a.progress).slice(0, 5);
  const newDeployments = [...tokens].slice(0, 6);
  
  const totalVolume = tokens.reduce((acc, t) => {
    const vol = parseFloat(t.volume24h?.replace(/[KMB$]/g, '') || 0);
    return acc + (t.volume24h?.includes('K') ? vol * 1000 : t.volume24h?.includes('M') ? vol * 1000000 : vol);
  }, 0);

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fadeIn py-2 font-mono">
      
      
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0a0e14] border border-white/5 divide-x divide-white/5">
        <div className="p-4">
          <p className="text-[10px] text-gray-500 uppercase">Total_Vol_24h</p>
          <p className="text-xl font-bold text-white">${(totalVolume / 1000).toFixed(1)}K</p>
        </div>
        <div className="p-4">
          <p className="text-[10px] text-gray-500 uppercase">Active_Pools</p>
          <p className="text-xl font-bold text-tonBlue">{tokens.length}</p>
        </div>
        <div className="p-4">
          <p className="text-[10px] text-gray-500 uppercase">Avg_Bonding</p>
          <p className="text-xl font-bold text-green-400">{(tokens.reduce((acc, t) => acc + t.progress, 0) / tokens.length).toFixed(1)}%</p>
        </div>
        <div className="p-4">
          <p className="text-[10px] text-gray-500 uppercase">Net_Status</p>
          <p className="text-xl font-bold text-green-500 flex items-center gap-2">
            ONLINE <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        
        <div className="lg:col-span-2 bg-[#0a0e14] border border-white/5">
          <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
            <h3 className="text-xs font-black uppercase tracking-widest text-white italic">🚀 Top_Performance_Movers</h3>
            <span className="text-[9px] text-tonBlue">SORTED_BY_PROGRESS</span>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] text-gray-500 border-b border-white/5 uppercase">
                <th className="p-4 font-normal">Token</th>
                <th className="p-4 font-normal">Price</th>
                <th className="p-4 font-normal">Progress</th>
                <th className="p-4 font-normal text-right">Volume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {topGainers.map((t, i) => (
                <tr key={i} className="hover:bg-tonBlue/5 transition-colors group">
                  <td className="p-4 flex items-center gap-3">
                    <img src={t.image} className="w-6 h-6 rounded-full" alt="" />
                    <span className="font-bold text-white group-hover:text-tonBlue">${t.symbol}</span>
                  </td>
                  <td className="p-4 text-xs text-gray-300 font-mono">{t.price}</td>
                  <td className="p-4">
                    <div className="w-24 bg-gray-900 h-1.5 rounded-full">
                      <div className="bg-tonBlue h-full rounded-full" style={{ width: `${t.progress}%` }}></div>
                    </div>
                  </td>
                  <td className="p-4 text-right text-xs text-green-400">{t.volume24h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="bg-[#0a0e14] border border-white/5">
          <div className="p-4 border-b border-white/5 bg-white/5">
            <h3 className="text-xs font-black uppercase tracking-widest text-white italic">🕒 Live_Deployments</h3>
          </div>
          <div className="p-2 divide-y divide-white/5">
            {newDeployments.map((t, i) => (
              <div key={i} className="p-3 flex items-center justify-between hover:bg-white/5 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-tonBlue/10 flex items-center justify-center text-[10px] font-bold text-tonBlue">
                    #{i+1}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">${t.symbol}</p>
                    <p className="text-[9px] text-gray-500 uppercase">{t.name.slice(0, 12)}</p>
                  </div>
                </div>
                <div className="text-right text-[10px]">
                  <p className="text-tonBlue">{t.progress}%</p>
                  <p className="text-gray-600 italic font-mono">NEW</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full p-3 text-[10px] text-gray-500 uppercase border-t border-white/5 hover:bg-tonBlue hover:text-white transition-all">
            View_All_Deployments
          </button>
        </div>

      </div>

      
      <div className="bg-black border border-white/10 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
           <span className="text-[10px] text-gray-600 uppercase font-bold">Terminal_Output:</span>
           <span className="text-[10px] text-green-500 font-mono animate-pulse tracking-tighter">
             {">"} DATA_STREAM_STABLE // INDEXING_BLOCK_#591203 // 0✗BLOCK'S_SYSTEM_ACTIVE
           </span>
        </div>
        <div className="flex gap-4">
          <div className="px-3 py-1 bg-tonBlue/10 border border-tonBlue/30 text-tonBlue text-[9px] font-bold uppercase">
             Gas: 0.005 TON
          </div>
          <div className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-500 text-[9px] font-bold uppercase">
             Volatility: High
          </div>
        </div>
      </div>
    </div>
  );
}