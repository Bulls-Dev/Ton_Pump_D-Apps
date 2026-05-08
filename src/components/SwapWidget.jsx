import React, { useState, useRef, useEffect } from "react";
import { useTonConnectUI } from "@tonconnect/ui-react";

const QUICK_BUY_PRESETS = ["1", "5", "10", "25"];

const SwapWidget = ({ selectedToken, onClose }) => {
  const [tonConnectUI] = useTonConnectUI();
  const [amount, setAmount] = useState("1");
  
  const [position, setPosition] = useState({ x: window.innerWidth - 420, y: window.innerHeight - 350 });
  const [size, setSize] = useState({ width: 380, height: "auto" });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const widgetRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.drag-handle')) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.current.x,
          y: e.clientY - dragStart.current.y
        });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleSwap = async (overrideAmount = null) => {
    if (!selectedToken) return;
    const finalAmount = overrideAmount || amount;
    if (!finalAmount || parseFloat(finalAmount) <= 0) return;

    const nanoAmount = (parseFloat(finalAmount) * 1000000000).toString();
    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 60,
      messages: [{ address: selectedToken.address, amount: nanoAmount }],
    };

    try { await tonConnectUI.sendTransaction(transaction); } 
    catch (e) { console.error("Swap Error:", e); }
  };

  return (
    <div 
      ref={widgetRef}
      onMouseDown={handleMouseDown}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        width: `${size.width}px`,
        position: 'fixed'
      }}
      className="z-[9999] p-1 select-none"
    >
      <div className="bg-[#0a0e14]/95 border border-[#0088CC]/50 p-4 rounded-2xl shadow-[0_0_40px_rgba(0,136,204,0.4)] backdrop-blur-xl font-mono text-white overflow-hidden relative resize overflow-auto">
        
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0088CC] to-transparent animate-pulse"></div>

        <div className="drag-handle cursor-move flex justify-between items-center mb-4 pb-2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-[#0088CC]">⚡</span>
            <h3 className="text-white text-[10px] font-black uppercase tracking-widest italic">TERMINAL_SWAP</h3>
          </div>
          <div className="flex items-center gap-2">
             <div className="text-[9px] text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">{selectedToken.symbol}</div>
             <button onMouseDown={(e) => e.stopPropagation()} onClick={onClose} className="text-gray-500 hover:text-white transition-colors">[×]</button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[9px] text-gray-500 uppercase">Amount (TON)</label>
              <div className="flex gap-1">
                {QUICK_BUY_PRESETS.map(preset => (
                    <button key={preset} onClick={() => { setAmount(preset); handleSwap(preset); }} className="bg-white/5 border border-white/10 text-[8px] px-2 py-1 rounded hover:bg-[#0088CC]/20 hover:border-[#0088CC]/50 transition-all">{preset}T</button>
                ))}
              </div>
            </div>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-black border border-white/10 rounded-lg p-2 text-lg text-[#0088CC] font-black outline-none focus:border-[#0088CC]" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-black/40 border border-white/5 p-2 rounded-lg">
                <img src={selectedToken.image} alt="" className="w-6 h-6 rounded-full" />
                <div className="flex-1 truncate">
                    <div className="text-[10px] font-bold text-white truncate">{selectedToken.name}</div>
                    <div className="text-[#0088CC] text-[8px] truncate">{selectedToken.address}</div>
                </div>
            </div>
            <button onClick={() => handleSwap()} className="w-full bg-[#0088CC] hover:bg-[#0099ee] text-white py-3 rounded-lg font-black uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(0,136,204,0.3)] transition-all active:scale-95">Execute Swap</button>
          </div>
        </div>

        <div className="absolute bottom-1 right-1 w-4 h-4 cursor-se-resize flex items-end justify-end p-1 pointer-events-none">
            <div className="w-2 h-2 border-r-2 border-b-2 border-white/20"></div>
        </div>
      </div>
    </div>
  );
};

export default SwapWidget;