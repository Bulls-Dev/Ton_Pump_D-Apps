import TokenCard from './TokenCard';

// Fonction pour convertir "1.5K" en 1500 pour le tri
const parseVal = (str) => {
  if (!str || typeof str !== 'string') return 0;
  const num = parseFloat(str.replace(/[KMB$]/g, ''));
  if (isNaN(num)) return 0;
  if (str.includes('K')) return num * 1000;
  if (str.includes('M')) return num * 1000000;
  return num;
};

export default function TokenGrid({ tokens, onSelectToken }) {
  // 1. NEW : Tri par date de création
  const newPairs = [...tokens].sort((a, b) => b.createdAt - a.createdAt);

  // 2. TRENDING : Tri par Volume réel
  const trending = [...tokens].sort((a, b) => parseVal(b.volume24h) - parseVal(a.volume24h));

  // 3. GRADUATING : Tri par progrès
  const graduating = tokens
    .filter(t => t.progress > 10)
    .sort((a, b) => b.progress - a.progress);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Colonne New */}
      <div className="space-y-4">
        <h2 className="text-blue-400 font-mono text-sm font-bold border-l-2 border-blue-400 pl-2 uppercase">▶ New_Pairs</h2>
        <div className="flex flex-col gap-3">
          {newPairs.slice(0, 6).map(t => (
            <div key={t.id} onClick={() => onSelectToken(t)} className="cursor-pointer">
              <TokenCard token={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Colonne Trending */}
      <div className="space-y-4">
        <h2 className="text-yellow-500 font-mono text-sm font-bold border-l-2 border-yellow-500 pl-2 uppercase">▶ Trending_Vol</h2>
        <div className="flex flex-col gap-3">
          {trending.slice(0, 6).map(t => (
            <div key={t.id} onClick={() => onSelectToken(t)} className="cursor-pointer">
              <TokenCard token={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Colonne Graduating */}
      <div className="space-y-4">
        <h2 className="text-green-500 font-mono text-sm font-bold border-l-2 border-green-500 pl-2 uppercase">▶ Graduating</h2>
        <div className="flex flex-col gap-3">
          {graduating.length > 0 ? (
            graduating.slice(0, 6).map(t => (
              <div key={t.id} onClick={() => onSelectToken(t)} className="cursor-pointer">
                <TokenCard token={t} />
              </div>
            ))
          ) : (
            <div className="text-gray-600 font-mono text-[10px] italic p-4 border border-dashed border-gray-800 text-center uppercase">
              Awaiting_Graduation...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}