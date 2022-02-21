import { useContext } from "react";
import { Table } from 'antd';

import { AppContext } from "../../state";
import { ordersTableConfig, dateFormat } from "./config";

const OrdersHistory = () => {
  const [state] = useContext(AppContext);

  const getTableData = () => {
    return state.ordersHistory.map(order => ({
      ...order,
      date: new Date(order.date).toLocaleDateString('en-us', dateFormat),
      key: order.date
    }));
  }

  return (
    <Table
      dataSource={getTableData()}
      columns={ordersTableConfig}
      pagination={false}
      rowKey={obj => obj.key}
    />
  )
};

export default OrdersHistory;
