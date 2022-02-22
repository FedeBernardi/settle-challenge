import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AppContext } from '../state';

const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: rgb(22, 26, 30);
  display: flex;
  align-items: center;
  padding: 20px;

  .fees-counter {
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-left: auto;
  }
`;

const NavItem = styled.span`
  padding: 15px;
  font-size: 15px;
  background: rgb(240, 185, 11);
  font-weight: bold;
  color: white;
`;

const NavBar = () => {
  const [{ fees }] = useContext(AppContext);

  return (
    <Container>
      <Link to="/trade">
        <NavItem>Trade</NavItem>
      </Link>
      <Link to="/wallet">
        <NavItem>Wallet</NavItem>
      </Link>
      <Link to="/deposit">
        <NavItem>Deposit</NavItem>
      </Link>
      <span className="fees-counter">{`Fees: ${parseFloat(fees).toFixed(2)} ARS`}</span>
    </Container>
  )
}

export default NavBar;
