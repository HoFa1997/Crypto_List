import styled from 'styled-components';
import { HeadTable,BodyTable } from './table'; 
import {
  Table,
  TableContainer,
  Paper,
} from '@mui/material';
import { CoinList } from 'shared/components/coin/List';
import { useEffect } from 'react';


// import { DebounceInput } from 'react-debounce-input';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function CoinPage() {
  return (
    <MainDiv>
      {/* <DebounceInput
        className="input"
        placeholder="Search Crypto..."
        minLength={2}
        debounceTimeout={500}
        onChange={searchHandler}
      /> */}
      <TableContainer component={Paper}>
        <Table
          sx={{ margin: 'auto', minWidth: 650, maxWidth: 800, border: 1 }}
          aria-label="Coin Price List">
          <HeadTable />
          <BodyTable />
          
        </Table>
      </TableContainer>

      {/* <Pagination
        variant="outlined"
        shape="rounded"
        count={pageNumber}
        onChange={(_, pageNumber) => handelChange(pageNumber)}
        hidePrevButton
        hideNextButton
      /> */}
    </MainDiv>
  );
}
