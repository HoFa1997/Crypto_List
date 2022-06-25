import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import './css/Cryptoo.css'
import {getCoin} from "./CoinApi";
import Loader from "./Loader";
import CoinItem from "./CoinItem";
import {DebounceInput} from 'react-debounce-input'

const CoinWrapper = styled.div`
  display: flex;
  width: 800px;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const TableCoinItem = styled.table`
  width: inherit;
  border-collapse: collapse;
  font-family: sans-serif;
`;

const TableHeadCoinItem = styled.thead`
  background-color: gray;
  color: white;
`;

const Th = styled.th`
  padding: 10px 0;
  :first-child {
    border-top-left-radius: 10px;
  }
  :last-child {
    border-top-right-radius: 10px;
  }
`;

const Tr = styled.tr`
  text-align: left;
  border-bottom: 2.5px solid black;
`;

// eslint-disable-next-line no-global-assign
export default Crypto = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin()
            setCoins(data.data)
            // console.log(data.data)
        }
        fetchApi()
    }, [])

    useEffect(() => {
        console.log(search)
    }, [search])

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchedCoin = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
            || coin.symbol.toLowerCase().includes(search.toLowerCase())

    })

    return (
        <>
            <CoinWrapper>
                <DebounceInput
                    className="input"
                    placeholder="Search Crypto..."
                    minLength={2}
                    debounceTimeout={500}
                    onChange={searchHandler}
                />
                {coins.length ?
                    <TableCoinItem>
                        <TableHeadCoinItem>
                            <Tr>
                                <Th></Th>
                                <Th>Name</Th>
                                <Th>Symbol</Th>
                                <Th>Price</Th>
                                <Th>Change 24h</Th>
                                <Th>MarketCap</Th>
                            </Tr>
                        </TableHeadCoinItem>
                        <tbody>
                        {
                            searchedCoin.map(coin => <CoinItem
                                key={coin.id}
                                name={coin.name}
                                symbol={coin.symbol}
                                image={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                                price={coin.quote.USD.price}
                                volume_change_24h={coin.quote.USD.percent_change_24h}
                                marketCap={coin.quote.USD.market_cap}

                            />)
                        }
                        </tbody>
                    </TableCoinItem> :
                    <Loader/>}
            </CoinWrapper>
        </>

    );
};

