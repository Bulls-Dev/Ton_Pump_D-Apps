import { useState, useEffect } from 'react';
import { getRealTonData } from '../api/tonApi';

export function useTonData() {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateData = async () => {
    const data = await getRealTonData();
    if (data.length > 0) {
      const sorted = data.sort((a, b) => b.createdAt - a.createdAt);
      setTokens(sorted);
    }
    setLoading(false);
  };

  useEffect(() => {
    updateData();
    const timer = setInterval(updateData, 20000); 
    return () => clearInterval(timer);
  }, []);

  return { tokens, loading };
}