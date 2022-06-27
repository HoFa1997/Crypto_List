import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export const CoinItem = ({
  name,
  symbol,
  image,
  price,
  volume_change_24h,
  marketCap,
}) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell align="left">
        <img src={image} alt={image} style={{ width: '40px' }} />
      </TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{symbol}</TableCell>
      {/* The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. */}
      <TableCell align="left">$ {price.toFixed(2)}</TableCell>
      {/* <TableCell align="left">{volume_change_24h.toFixed(2)}%</TableCell> */}
      {volume_change_24h > 0 ? (
        <TableCell sx={{ color: 'green' }} align="left">
          $ {volume_change_24h.toFixed(2)}
        </TableCell>
      ) : (
        <TableCell sx={{ color: 'red' }} align="left">
          $ {volume_change_24h.toFixed(2)}
        </TableCell>
      )}
      <TableCell align="left">$ {marketCap}</TableCell>
    </TableRow>
  );
};
