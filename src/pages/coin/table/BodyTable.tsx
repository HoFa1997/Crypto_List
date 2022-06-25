import { TableBody } from '@mui/material';
import CoinItem from '../CoinItem';




export function BodyTable({coins}) {


  return (
    <TableBody>
      {coins.map((coin) => (
        <CoinItem
          key={coin.id.toString()}
          name={coin.name}
          symbol={coin.symbol}
          image={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
          price={coin.quote.USD.price}
          volume_change_24h={coin.quote.USD.percent_change_24h}
          marketCap={coin.quote.USD.market_cap}
        />
      ))}
    </TableBody>
  );
}
