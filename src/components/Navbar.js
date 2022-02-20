import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: red;
  display: flex;
  align-items: center;
`;

const NavItem = styled.span`
  padding: 15px;
  font-size: 15px;
  background: blue;
  color: white;
`;

const NavBar = () => {
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
    </Container>
  )
}

export default NavBar;
