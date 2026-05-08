export default function DocsPage() {
  const guides = [
    { 
      title: "Mint_Authority", 
      desc: "Does the contract have a print function? If 'Mint' is not renounced, the developer can generate billions of new tokens instantly to crash the price. This is the ultimate weapon for scammers.", 
      risk: "CRITICAL",
      color: "text-red-500",
      bg: "bg-red-500/5",
      border: "border-red-500/20"
    },
    { 
      title: "Liquidity_Pool_Lock", 
      desc: "Liquidity is the token's 'blood'. If it's not locked, the creator can withdraw all TON from the pool at any time (Rug Pull), leaving your tokens worthless and impossible to sell.", 
      risk: "HIGH_DANGER",
      color: "text-orange-500",
      bg: "bg-orange-500/5",
      border: "border-orange-500/20"
    },
    { 
      title: "Wallet_Concentration", 
      desc: "Check the 'Top Holders'. If a single wallet (excluding the pool) holds more than 5-10% of the supply, they possess the power to 'Dump' on the entire community single-handedly.", 
      risk: "WARNING",
      color: "text-yellow-500",
      bg: "bg-yellow-500/5",
      border: "border-yellow-500/20"
    },
    { 
      title: "HoneyPot_Trap", 
      desc: "Some contracts allow you to buy but modify the code to prevent selling (100% Tax). Our scanner checks if transfer functions are restricted to ensure you can exit your position.", 
      risk: "CRITICAL",
      color: "text-red-500",
      bg: "bg-red-500/5",
      border: "border-red-500/20"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn py-6">
      {/* HEADER PRO */}
      <div className="relative p-8 bg-[#0a0e14] border border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl italic select-none">SAFE_APE</div>
        <div className="relative z-10">
          <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter flex items-center gap-4">
            <span className="text-tonBlue">#</span> Sniper_Manual_v1.0
          </h2>
          <p className="text-gray-500 font-mono text-xs uppercase mt-4 tracking-[0.3em] flex items-center gap-2">
            <span className="w-2 h-2 bg-tonBlue rounded-full animate-ping"></span>
            Protocol Intelligence for TON Degens
          </p>
        </div>
      </div>

      {/* GUIDES GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((g, i) => (
          <div key={i} className={`group ${g.bg} p-8 border ${g.border} transition-all hover:border-tonBlue/40 relative`}>
            <div className="absolute top-0 right-0 text-[10px] font-mono p-2 text-white/10 group-hover:text-tonBlue/30">
              ID: 00{i+1}_PROTO
            </div>
            
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h4 className={`font-black font-mono uppercase tracking-widest text-lg ${g.color}`}>
                    {g.title}
                  </h4>
                  <span className={`${g.bg} ${g.color} border ${g.border} px-3 py-1 text-[9px] font-black tracking-tighter`}>
                    {g.risk}
                  </span>
                </div>
                <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                  {g.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Status: Scanned</span>
                <span className="text-tonBlue font-black">▶▶▶</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WARNING FOOTER SECTION */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[#0d1117] border border-white/10 p-6 flex items-center gap-6">
          <div className="text-5xl">⚠️</div>
          <div>
            <h5 className="text-white font-black uppercase text-sm mb-1">Degen_Rules_#01</h5>
            <p className="text-gray-500 font-mono text-xs leading-relaxed uppercase">
              Never follow a "Call" without checking the security badges on our terminal. TON contracts can change behavior after deployment. Verification is mandatory.
            </p>
          </div>
        </div>
        
        <div className="bg-tonBlue/10 border border-tonBlue/30 p-6 flex flex-col justify-center text-center">
          <span className="text-[10px] text-tonBlue font-mono uppercase font-black mb-2">Dev_Tip</span>
          <p className="text-white font-mono text-[10px] uppercase tracking-tighter">
            "DYOR" is not a suggestion, it's a survival requirement.
          </p>
        </div>
      </div>

      {/* TERMINAL LOG FOOTER */}
      <div className="bg-black p-4 rounded border border-white/5">
        <p className="text-[9px] font-mono text-gray-700 uppercase tracking-widest animate-pulse">
          {">"} SYSTEM: END_OF_MANUAL_... DATA_STREAM_STABLE ... [0✗Block's_Terminal]
        </p>
      </div>
    </div>
  );
}