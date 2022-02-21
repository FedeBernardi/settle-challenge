import { Radio } from "antd";

import { ORDER_TYPES } from "../../../constants";

const OrderTypeSection = ({ orderType, onChange }) => {
  return (
    <>
      <h3>Order Type</h3>
      <Radio.Group value={orderType} onChange={onChange}>
        <Radio value={ORDER_TYPES.LIMIT}>Limit</Radio>
        <Radio value={ORDER_TYPES.MARKET}>Market</Radio>
      </Radio.Group>
    </>
  )
}

export default OrderTypeSection;
