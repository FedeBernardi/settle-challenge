import { useEffect, useState, useContext } from "react";
import styled from 'styled-components';

import { getBuyingPrice } from '../../../api';
import { ORDER_TYPES, OPERATION_TYPE, CURRENCIES } from "../../../constants";
import { AppContext } from "../../../state";

import OperationSection from './OperationSection';
import CurrencySelection from "./CurrencySelection";
import OrderTypeSection from "./OrderTypeSection";
import AmountSection from "./AmountSection";
import OperateButton from './OperateButton';

const Container = styled.div`
  width: 400px;
  
  h3 {
    margin-top: 30px;
  }

  .opt-type {
    width: 100%;
  }

  .to-receive-section {
    margin-top: 10px;
  }
`;

const TradeForm = () => {
  const [state, dispatcher] = useContext(AppContext);
  const [operationType, setOperationType] = useState(OPERATION_TYPE.BUY);
  const [currencyToOperate, setCurrencyToOperate] = useState(CURRENCIES.BTC);
  const [orderType, setOrderType] = useState(ORDER_TYPES.MARKET);
  const [amount, setAmount] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [latestCurrencyPrice, setLatestCurrencyPrice] = useState(0);

  const getLatestBuyingPrice = async () => {
    const price = await getBuyingPrice(currencyToOperate, CURRENCIES.ARS);
    setLatestCurrencyPrice(price.data.quote);
  }

  useEffect(() => {
    // We want to get it as soon as the component gets mounted
    getLatestBuyingPrice();

    // Then we want to update it every three seconds
    const intervalId = setInterval(getLatestBuyingPrice, 3000);

    return () => window.clearInterval(intervalId); 
  }, [currencyToOperate]);

 /*
  * For some reason e.target.value was undefined sometimes
  * so I decided to get the value from a parameter
  */
  const onOperationBtnClick = value => setOperationType(value);

  const onCurrencyChange = e => setCurrencyToOperate(e.target.value);
  
  const onOrderTypeChange = e => setOrderType(e.target.value);

  // @TODO: add validations to provent non numeric characters and founds available
  const onAmountChange = e => setAmount(e.target.value);

  const isBuying = operationType === OPERATION_TYPE.BUY;

  // This function will take care of all the transaction process
  const operateAsset = () => {
    // const paymentCurrency = isBuying ? CURRENCIES.ARS : currencyToOperate;
    // const returnCurrency = isBuying ? currencyToOperate : CURRENCIES.ARS;

    // if (isBuying) {
      
    // }
  }

  return (
    <Container>
      <div className="opt-type">
        <OperationSection isBuying={isBuying} onBtnClick={onOperationBtnClick} />
      </div>
      <div className="currency-container">
        <CurrencySelection currencyToOperate={currencyToOperate} onChange={onCurrencyChange} />
      </div>
      <div className="order-type">
        <OrderTypeSection orderType={orderType} onChange={onOrderTypeChange} />
      </div>
      <div className="amount">
        <AmountSection
          amount={amount}
          latestCurrencyPrice={latestCurrencyPrice}
          onChange={onAmountChange}
          isBuying={isBuying}
        />
      </div>
      <div className="operate">
        <OperateButton
            className={`${isBuying ? 'buy' : 'sell'} opt-btn active`}
            type="primary"
            size="large"
            onClick={operateAsset}
          >
            { isBuying ? 'Buy' : 'Sell' }
        </OperateButton>
      </div>
    </Container>
  );
}

export default TradeForm;
