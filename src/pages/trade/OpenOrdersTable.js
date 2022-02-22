import { Table } from "antd";
import styled from "styled-components";

import { openOrdersTableConfig } from "../../config";

const Container = styled.span`
  margin: 0 25px;

  .row-buy {
    color: rgb(14, 203, 129);
    font-weight: bold;
  }

  .row-sell {
    color: rgb(246, 70, 93);
    font-weight: bold;
  }
`;

const OpenOrdersTable = ({ openOrders }) => {
  const getTableData = () => {
    return openOrders.sort((first, second) => second.total - first.total);
  }
  
  return (
    <Container>
      <h1>Open Orders</h1>
      <Table
        dataSource={getTableData()}
        columns={openOrdersTableConfig}
        pagination={false}
        rowKey={obj => obj.key}
      />
    </Container>
  );
};

export default OpenOrdersTable;
