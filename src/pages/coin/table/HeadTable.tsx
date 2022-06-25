import {
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

export function HeadTable() {
  
  return (
    
        <TableHead
          sx={{
            background: 'gray',
          }}>
          <TableRow>
            <TableCell align={'left'}>Icon</TableCell>
            <TableCell align={'left'}>Name</TableCell>
            <TableCell align={'left'}>Symbol</TableCell>
            <TableCell align={'left'}>Price</TableCell>
            <TableCell align={'left'}>Change 24h</TableCell>
            <TableCell align={'left'}>MarketCap</TableCell>
          </TableRow>
        </TableHead>
  );
}
