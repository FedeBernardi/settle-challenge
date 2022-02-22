import { useState } from "react";
import styled from "styled-components";

import TradeForm from './TradeForm/index'; 
import OpenOrdersTable from './OpenOrdersTable';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  .title {
    margin: 0 25px;
  }
`;

const TradePage = () => {
  const [openOrders, setOpenOrders] = useState([]);

  const addNewLimitOrder = order => {
    order.key = Math.random();

    setOpenOrders([ ...openOrders, order ]);
  }

  const removeLimitOrder = () => {
    const openOrdersCopy = [ ...openOrders ];

    openOrdersCopy.shift();

    setOpenOrders([ ...openOrdersCopy ]);
  }

  return (
    <Container>
      <h1 className="title">Trade</h1>
      <TradeForm addNewLimitOrder={addNewLimitOrder} removeLimitOrder={removeLimitOrder} />
      <OpenOrdersTable openOrders={openOrders} />
    </Container>
  )
}

export default TradePage;
