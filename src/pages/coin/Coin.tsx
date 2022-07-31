import styled from 'styled-components';
import { HeadTable, BodyTable } from './table';
import {
  Table,
  TableContainer,
  Paper,
  TextField,
  TablePagination,
} from '@mui/material';
import { useSearch } from 'shared/hooks/useSearch';
import { useState } from 'react';
import { CoinRootObject, Loader } from 'shared/utils';
import { CoinList } from 'shared/components/coin/List';
import { usePagination } from 'shared/hooks/usePagination';

const MainDiv = styled.div`
  font-size: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function CoinPage() {
  //state for save search text from user
  const [inputSearch, setInputSearch] = useState<string>('');

  //coinList, Loading ,Error from fetch data
  const [coins, loading, error]: [CoinRootObject.Datum[], boolean, string] =
    CoinList();

  //filter coinList for search result
  const searchedCoins = useSearch(inputSearch, coins);

  const [pagination, paginationList] = usePagination(searchedCoins, 5);

  //handel searchInput from user
  const handleSearch = (event) => {
    setInputSearch(event.target.value);
  };

  if (error) {
    return <MainDiv>ERROR Enable CORS Mode</MainDiv>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <MainDiv>
      <TextField
        style={{ width: 800, paddingBottom: 5, paddingTop: 5 }}
        placeholder={'Search Coins...'}
        value={inputSearch}
        onChange={handleSearch}
      />
      <TableContainer component={Paper}>
        <Table
          sx={{ margin: 'auto', minWidth: 650, maxWidth: 800, border: 1 }}
          aria-label="Coin Price List">
          <HeadTable />
          <BodyTable coins={paginationList} />
        </Table>
      </TableContainer>
      {pagination}
    </MainDiv>
  );
}
