import CoinItem from 'pages/coin/CoinItem';
import { useEffect, useState } from 'react';
import { getCoinList } from 'shared/apis';
import { CoinRootObject } from 'shared/utils';

export const CoinList = () => {
  const [coins, setCoins] = useState<CoinRootObject.Datum[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchingCoinList() {
    setLoading(true);
    try {
      const {data} = await getCoinList();
      setCoins(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchingCoinList();
  }, []);

  return (
    <>
      {coins.map((coin) => {
        return (
          <CoinItem
            key={coin.id.toString()}
            name={coin.name}
            symbol={coin.symbol}
            image={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
            price={coin.quote.USD.price}
            volume_change_24h={coin.quote.USD.percent_change_24h}
            marketCap={coin.quote.USD.market_cap}
          />
        );
      })}
    </>
  );
};
