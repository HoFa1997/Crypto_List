import { TableBody } from '@mui/material';
import { useEffect } from 'react';
import { CoinList } from 'shared/components/coin/List';
import CoinItem from '../CoinItem';

export function BodyTable() {
  
  return (
    <TableBody>
        <CoinList/>
    </TableBody>
  );
}
