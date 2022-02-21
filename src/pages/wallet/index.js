import { useContext } from "react";
import styled from "styled-components";
import { Table } from 'antd';

import { AppContext } from '../../state';

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
      <h1>Wallet</h1>
      <h4>Check your balances</h4>
      <Table
        dataSource={getTableData()}
        columns={tableConfig}
        pagination={false}
        rowKey={obj => obj.rowKey}
      />
    </Container>
  )
}

export default WalletPage;
