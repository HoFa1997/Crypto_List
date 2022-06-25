import { useState, useEffect } from 'react';
import { CoinRootObject } from 'shared/utils';
import { useDebounce } from './useDebounce';

export function useSearch(
  Input: string = '',
  coins: CoinRootObject.Datum[]
): CoinRootObject.Datum[] {
  const [search, setSearch] = useState<string>('');
  const debounce = useDebounce(Input);

  const searchedData = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    setSearch(Input);
  }, [debounce]);

  return searchedData;
}
