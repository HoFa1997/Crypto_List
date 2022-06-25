import React, { useCallback, useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

//Style
import '../../css/Cryptoo.css';

//Components
import { getCoin } from '../utils/Api';
import Loader from '../utils/Loader';
import CoinItem from './CoinItem';
import CoinTable from './CoinTable';
import { Pagination } from '@mui/material';

export function Crypto() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(8);

  const [search, setSearch] = useState('');

  const fetchApi = useCallback(async () => {
    setLoading(true);
    const res = await getCoin();
    setCoins(res.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchApi();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  // Add memoization
  const searchedCoin = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  //get current page
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoin = searchedCoin.slice(indexOfFirstCoin, indexOfLastCoin);

  //change page
  const pageNumber = Math.ceil(searchedCoin.length / coinsPerPage);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const handelChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DebounceInput
        className="input"
        placeholder="Search Crypto..."
        minLength={2}
        debounceTimeout={500}
        onChange={searchHandler}
      />
      <CoinTable coins={currentCoin} loading={loading} />
      <Pagination
        variant="outlined"
        shape="rounded"
        count={pageNumber}
        onChange={(_, pageNumber) => handelChange(pageNumber)}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
}

export default Crypto;
