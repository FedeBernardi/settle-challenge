import { useContext } from "react";
import styled from "styled-components";
import { Table } from 'antd';

import { AppContext } from '../../state';

import OrdersHistory from "./OrdersHistory";

const tableConfig = [
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  }
]

const Container = styled.div`
  .wallet-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 50px;
  }

  .orders-container {
    margin: 25px;
  }

  .row-buy {
    color: rgb(14, 203, 129);
    font-weight: bold;
  }

  .row-sell {
    color: rgb(246, 70, 93);
    font-weight: bold;
  }
`;

const WalletPage = () => {
  const [state] = useContext(AppContext);
  const { wallet } = state;

  const getTableData = () => {
    return Object.keys(wallet).map(key => ({
      currency: key.toUpperCase(),
      total: wallet[key],
      rowKey: key
    }))
  }

  return (
    <Container>
      <div className="wallet-container">
        <h1>Wallet</h1>
        <h4>Check your balances</h4>
        <Table
          dataSource={getTableData()}
          columns={tableConfig}
          pagination={false}
          rowKey={obj => obj.rowKey}
        />
      </div>
      <div className="orders-container">
        <h1>Orders History</h1>
        <OrdersHistory />
      </div>
    </Container>
  )
}

export default WalletPage;
