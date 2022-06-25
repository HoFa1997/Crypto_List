import React from 'react';
import styled from "styled-components";

const Tr = styled.tr`
  border: 1px solid black;
`;

const Th = styled.th`
  text-align: left;
  width: 500px;
  padding: 10px 0;
`;

const PeercentRed = styled.span`
  color: red;
`;
const PeercentGreen = styled.span`
  color: green;
`;

const Logo = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 12px;
  padding: 0 20px;
`;

const CoinItem = ({name, symbol, image, price, volume_change_24h, marketCap}) => {

    return (
        <Tr>
            <Th><Logo src={image} alt=""/></Th>
            <Th>{name}</Th>
            <Th>{symbol}</Th>
            <Th>$ {price.toLocaleString()}</Th>
            <Th>
                {
                    volume_change_24h > 0
                        ? <PeercentGreen>{volume_change_24h.toFixed(2)}%</PeercentGreen>
                        : <PeercentRed>{volume_change_24h.toFixed(2)}%</PeercentRed>
                }
            </Th>
            <Th>$ {marketCap.toLocaleString()}</Th>
        </Tr>
    );
};

export default CoinItem;
