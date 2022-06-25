// import React from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from '@mui/material';
// import CoinItem from './CoinItem';
// import Loader from '../utils/Loader';

// function CoinTable({ coins, loading }) {
//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <TableContainer component={Paper}>
//       <Table
//         sx={{
//           margin: 'auto',
//           minWidth: 650,
//           maxWidth: 800,
//           border: 1,
//         }}
//         aria-label="Coin Price List">
//         <TableHead
//           sx={{
//             background: 'gray',
//           }}>
//           <TableRow>
//             <TableCell align={'left'}>Icon</TableCell>
//             <TableCell align={'left'}>Name</TableCell>
//             <TableCell align={'left'}>Symbol</TableCell>
//             <TableCell align={'left'}>Price</TableCell>
//             <TableCell align={'left'}>Change 24h</TableCell>
//             <TableCell align={'left'}>MarketCap</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {coins.map((coin) => (
//             <CoinItem
//               key={coin.id.toString()}
//               name={coin.name}
//               symbol={coin.symbol}
//               image={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
//               price={coin.quote.USD.price}
//               volume_change_24h={coin.quote.USD.percent_change_24h}
//               marketCap={coin.quote.USD.market_cap}
//             />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default CoinTable;
