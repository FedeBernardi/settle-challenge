import styled from "styled-components";

import TradeForm from './TradeForm/index'; 

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TradePage = () => {
  return (
    <Container>
      <TradeForm />
    </Container>
  )
}

export default TradePage;
