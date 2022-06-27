import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { CoinRootObject } from 'shared/utils';

export function usePagination(
  inputList: CoinRootObject.Datum[],
  inputPerPage: number = 8
) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(inputPerPage);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    setPerPage(inputPerPage);
  }, [inputList]);

  //get current page
  const indexOfLastCoin = currentPage * perPage;
  const indexOfFirstCoin = indexOfLastCoin - perPage;
  const currentCoin = inputList.slice(indexOfFirstCoin, indexOfLastCoin);

  //change page
  const pageNumber = Math.ceil(inputList.length / perPage);

  const handelChange = (page) => {
    setCurrentPage(page);
  };

  return [
    <Pagination
      variant="outlined"
      shape="rounded"
      count={pageNumber}
      onChange={(_, pageNumber) => handelChange(pageNumber)}
      hidePrevButton
      hideNextButton
    />,
    currentCoin,
  ];
}
