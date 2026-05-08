export default function TokenCard({ token }) {
  // Extraction des données de sécurité
  const { mintRenounced, lowConcentration, liquidityLocked } = token.security;
  const getAge = (timestamp) => {
  const diff = Math.floor((Date.now() - timestamp) / 1000); // secondes
  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
};

  return (
    <div className="neon-border bg-[#0d1117]/90 backdrop-blur-md p-4 rounded-none border-l-2 border-l-tonBlue transition-all group hover:bg-[#121821]">
      <div className="flex flex-col gap-3">
        
        {/* HEADER : Logo, Nom, Âge et Prix */}
<div className="flex justify-between items-start">
  <div className="flex gap-3">
    <img 
      src={token.image || 'https://cdn.ston.fi/logo/ton_symbol.png'} 
      className="w-10 h-10 rounded-full border border-tonBlue/20 bg-darkBg"
      alt="logo"
    />
    <div>
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-white leading-none truncate w-24 md:w-32 text-sm">{token.name}</h3>
        {/* AFFICHAGE DU TEMPS ÉCOULÉ */}
        <span className="text-[9px] text-gray-500 font-mono bg-white/5 px-1 rounded border border-white/10">
          {(() => {
            const diff = Math.floor((Date.now() - token.createdAt) / 1000);
            if (diff < 60) return `${diff}s`;
            if (diff < 3600) return `${Math.floor(diff / 60)}m`;
            if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
            return `${Math.floor(diff / 86400)}d`;
          })()}
        </span>
      </div>
      <span className="text-[10px] text-tonBlue font-mono uppercase tracking-tighter">${token.symbol}</span>
    </div>
  </div>
  <div className="text-right">
    <div className="text-green-400 font-mono text-xs">${token.price}</div>
    <div className="text-[9px] text-gray-500 uppercase font-mono tracking-widest">Price_USD</div>
  </div>
</div>

        {/* MARKET DATA : MCAP et Liquidity */}
        <div className="grid grid-cols-2 gap-2 py-2 border-y border-white/5">
          <div>
            <div className="text-[9px] text-gray-500 uppercase font-mono">Market_Cap</div>
            <div className="text-xs font-bold text-white">${token.mcap}</div>
          </div>
          <div>
            <div className="text-[9px] text-gray-500 uppercase font-mono">Liquidity</div>
            <div className="text-xs font-bold text-cyan-400">${token.liquidity}</div>
          </div>
        </div>

        {/* SECURITY BADGES : HoneyPot & Trust checks */}
        <div className="flex flex-wrap gap-1.5 py-1">
          <div className={`px-1.5 py-0.5 border text-[8px] font-black uppercase flex items-center gap-1 ${mintRenounced ? 'border-green-500/40 text-green-500 bg-green-500/5' : 'border-red-500/40 text-red-500 bg-red-500/5'}`}>
            {mintRenounced ? '✓' : '✗'} Mint_Renounced
          </div>
          <div className={`px-1.5 py-0.5 border text-[8px] font-black uppercase flex items-center gap-1 ${lowConcentration ? 'border-green-500/40 text-green-500 bg-green-500/5' : 'border-yellow-500/40 text-yellow-500 bg-yellow-500/5'}`}>
            {lowConcentration ? '✓' : '⚠'} Top_Holders
          </div>
          <div className={`px-1.5 py-0.5 border text-[8px] font-black uppercase flex items-center gap-1 ${liquidityLocked ? 'border-cyan-500/40 text-cyan-500 bg-cyan-500/5' : 'border-red-500/40 text-red-500 bg-red-500/5'}`}>
            {liquidityLocked ? '🔒' : '🔓'} LP_Locked
          </div>
        </div>
        
        {/* BONDING CURVE : Barre de progression */}
        <div className="space-y-1 mt-1">
          <div className="flex justify-between text-[10px] items-center font-mono">
            <span className="text-gray-500 uppercase tracking-tighter">Bonding_Curve</span>
            <span className={token.progress > 80 ? "text-green-400 animate-pulse font-bold" : "text-tonBlue"}>
              {token.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-tonBlue to-cyan-500 transition-all duration-1000 shadow-[0_0_8px_rgba(0,136,204,0.6)]" 
              style={{ width: `${token.progress}%` }}
            />
          </div>
        </div>

        {/* DANGER ALERT */}
        {token.isRug && (
          <div className="mt-1 text-[8px] bg-red-600/20 text-red-500 border border-red-500/30 px-2 py-1 w-full text-center uppercase font-black tracking-[0.2em] animate-pulse">
            🚨 High Risk Scan Detected 🚨
          </div>
        )}
      </div>
    </div>
  )
}