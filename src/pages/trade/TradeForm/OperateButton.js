import { Button } from "antd";
import styled from 'styled-components';

const OperateButton = styled(Button)`
  width: 200px;
  background: rgb(132, 142, 156);
  border-color: rgb(132, 142, 156);

  &.buy:hover,
  &.buy.active{
    background-color: rgb(14, 203, 129);
    border-color: rgb(14, 203, 129);
  }

  &.sell:hover,
  &.sell.active{
    background-color: rgb(246, 70, 93);
    border-color: rgb(246, 70, 93);
  }

  &.opt-btn {
    width: 100%;
    margin-top: 30px;
  }
`;

export default OperateButton;
