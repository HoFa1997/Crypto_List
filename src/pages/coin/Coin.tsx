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




const MainDiv = styled.div`
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

  //handel searchInput from user
  const handleSearch = (event) => {
    setInputSearch(event.target.value);
  };


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - searchedCoins.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const coinList = searchedCoins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  if(error){
    return(
      <h1>ERROR</h1>
    )
  }
  if(loading){
    return(
      <Loader/>
    )
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
          <BodyTable coins={coinList} />
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={searchedCoins.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </MainDiv>
  );
}
