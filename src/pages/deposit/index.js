import styled from 'styled-components';

import DepositForm from './DepositForm';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DepositPage = () => {
  return (
    <Container>
      <h1>Deposit Fiat</h1>
      <h4>Make a deposit with Credit Card and start operating</h4>
      <DepositForm />
    </Container>
  )
}

export default DepositPage;
