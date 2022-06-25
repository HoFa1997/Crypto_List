import React from 'react';

import spinner from '../images/spinnervlll.gif'
import styled from "styled-components";

const DivImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Loader = () => {


    return (
        <DivImg>
            <img src={spinner} alt=""/>
            <h1>Loading</h1>
        </DivImg>
    );
};

export default Loader;
