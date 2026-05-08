export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05070a] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Partie Gauche : Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">System_Active</span>
          </div>
          <span className="text-white/10">|</span>
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Network: TON_Mainnet</span>
        </div>

        {/* Partie Centrale : Ton identité - EFFET NÉON FIXE */}
<div className="cursor-default text-center">
  <p className="font-mono text-[11px] text-gray-500 tracking-[0.2em] uppercase">
    Designed & Built by 
    <span 
      className="ml-2 font-black text-[#0088CC]" 
      style={{ 
        textShadow: '0 0 8px rgba(0, 136, 204, 0.8), 0 0 20px rgba(0, 136, 204, 0.4)' 
      }}
    >
      0✗Block's
    </span>
  </p>
</div>

        {/* Partie Droite : Liens/Socials style Terminal */}
<div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] text-gray-500 uppercase">
  <a 
    href="https://t.me/dev_web3_blocks" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-[#0088CC] transition-all tracking-widest hover:[text-shadow:0_0_8px_rgba(0,136,204,0.8)]"
  >
    [Telegram]
  </a>
  <a 
    href="https://shop-block-s-dev.vercel.app/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-[#0088CC] transition-all tracking-widest hover:[text-shadow:0_0_8px_rgba(0,136,204,0.8)]"
  >
    [Shop_Degen]
  </a>
  <a 
    href="https://github.com/Bulls-Dev" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-[#0088CC] transition-all tracking-widest hover:[text-shadow:0_0_8px_rgba(0,136,204,0.8)]"
  >
    [GitHub]
  </a>
</div>

      </div>
      
      {/* Petite ligne de copyright - PLUS ESPACÉE ET ÉCLAIRCIE */}
      <div className="text-center mt-12 opacity-40">
        <p className="text-[9px] font-mono text-gray-400 uppercase tracking-[0.8em]">
          © 2024 TONPUMP_TERMINAL_V1.0.4 // NO_FINANCIAL_ADVICE
        </p>
      </div>
    </footer>
  );
}