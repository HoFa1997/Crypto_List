import { useEffect, useState } from 'react';
import { getCoinList } from 'shared/apis';
import { CoinRootObject } from 'shared/utils';

export const CoinList = (): [CoinRootObject.Datum[], boolean, string] => {
  const [coins, setCoins] = useState<CoinRootObject.Datum[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  async function fetchingCoinList() {
    setLoading(true);
    try {
      const { data } = await getCoinList();
      setCoins(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchingCoinList();
  }, []);

  return [coins, loading, error];
};
