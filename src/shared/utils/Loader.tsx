import styled from 'styled-components';

//import loader from '../../../public/images/loading.gif'

const DivImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <DivImg>
      {/* <img src={loader} alt=""/> */}
      <h1>Loading</h1>
    </DivImg>
  );
};
