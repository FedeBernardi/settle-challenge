import OperateButton from './OperateButton';

import { OPERATION_TYPE } from "../../../constants";

const OperationSection = ({ isBuying, onBtnClick }) => {
  return (
    <>
      <h3>Operation</h3>
      <OperateButton
        className={`${ isBuying ? 'active' : ''} buy`}
        type="primary"
        size="large"
        onClick={() => onBtnClick(OPERATION_TYPE.BUY)}
      >
          Buy
      </OperateButton>
      <OperateButton
        className={`${ !isBuying ? 'active' : ''} sell`}
        type="primary"
        size="large"
        onClick={() => onBtnClick(OPERATION_TYPE.SELL)}
      >
          Sell
      </OperateButton>
    </>
  )
}

export default OperationSection;
