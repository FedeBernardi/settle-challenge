export const dateFormat = { year:"numeric", month:"short", day:"numeric", hour: "numeric", minute: "numeric"};

export const ordersTableConfig = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Pair',
    dataIndex: 'pair',
    key: 'pair',
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    key: 'operation',
    render: operation => <span className={`row-${operation.toLowerCase()}`}>{operation}</span>
  },
  {
    title: 'Order Type',
    dataIndex: 'orderType',
    key: 'orderType',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: total => parseFloat(total).toFixed(2)
  }
];

export const openOrdersTableConfig = [
  {
    title: 'Pair',
    dataIndex: 'pair',
    key: 'pair',
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    key: 'operation',
    render: operation => <span className={`row-${operation.toLowerCase()}`}>{operation}</span>
  },
  {
    title: 'Order Type',
    dataIndex: 'orderType',
    key: 'orderType',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: total => parseFloat(total).toFixed(2)
  }
];
