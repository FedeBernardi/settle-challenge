import { useEffect, useState, useContext } from "react";
import styled from 'styled-components';
import { notification } from "antd";

import { getPrice } from '../../../api';
import { ORDER_TYPES, OPERATION_TYPE, CURRENCIES } from "../../../constants";
import { AppContext } from "../../../state";
import { buyCrypto, sellCrypto } from "../../../state/actions";

import OperationSection from './OperationSection';
import CurrencySelection from "./CurrencySelection";
import OrderTypeSection from "./OrderTypeSection";
import AmountSection from "./AmountSection";
import OperateButton from './OperateButton';

const Container = styled.div`
  width: 400px;
  margin: auto auto 40px;
  
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

const TradeForm = ({ addNewLimitOrder, removeLimitOrder }) => {
  const [, dispatcher] = useContext(AppContext);
  const [operationType, setOperationType] = useState(OPERATION_TYPE.BUY);
  const [currencyToOperate, setCurrencyToOperate] = useState(CURRENCIES.BTC);
  const [orderType, setOrderType] = useState(ORDER_TYPES.MARKET);
  const [amountToSpend, setAmountToSpend] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [latestCurrencyPrice, setLatestCurrencyPrice] = useState(0);

  const isLimitOrder = orderType === ORDER_TYPES.LIMIT;
  const isBuying = operationType === OPERATION_TYPE.BUY;

  const getLatestBuyingPrice = async () => {
    const price = await getPrice(currencyToOperate, isBuying);
    setLatestCurrencyPrice(price.data.quote);
  }

  useEffect(() => {
    // We don't need the API's quotes when the user is placing a LIMIT order
    if (isLimitOrder) return;
    
    // We want to get it as soon as the component gets mounted
    getLatestBuyingPrice();

    // Then we want to update it every three seconds
    const intervalId = setInterval(getLatestBuyingPrice, 3000);

    return () => window.clearInterval(intervalId); 
  }, [currencyToOperate, operationType, orderType]);

 /**
  * For some reason e.target.value was undefined sometimes
  * so I decided to get the value from a parameter
  */
  const onOperationBtnClick = value => setOperationType(value);

  const onCurrencyChange = e => setCurrencyToOperate(e.target.value);
  
  const onOrderTypeChange = e => setOrderType(e.target.value);

  // @TODO: add validations to provent non numeric characters and founds available
  const onAmountToSpendChange = e => setAmountToSpend(e.target.value);

  const onLimitPriceChange = e => setLimitPrice(e.target.value);
  
  const executeOperation = optInfo => {
    if (isBuying) {
      dispatcher(buyCrypto(optInfo, currencyToOperate));
    } else {
      dispatcher(sellCrypto(optInfo, currencyToOperate));
    }

    notification.success({
      message: 'Operation done!',
      description:
        `Your trade was successful`,
    });

    // reseting the input
    setAmountToSpend('');
  }
  
  // This function will take care of all the transaction process
  const operateAsset = () => {
    const price = isLimitOrder ? limitPrice : latestCurrencyPrice;
    const optInfo = {
      operation: operationType,
      orderType,
      pair: `${currencyToOperate}/${CURRENCIES.ARS}`,
      price,
      amount: 0,
      total: 0
    }

    if (isBuying) {
      optInfo.amount = amountToSpend / price;
      optInfo.total = amountToSpend;
    } else {
      optInfo.amount = amountToSpend;
      optInfo.total = parseFloat(amountToSpend * price).toFixed(2)
    }
    
    // If it's a Market opt, we want to immediately execute it
    if (!isLimitOrder) {
      executeOperation(optInfo);
      return;
    }

    addNewLimitOrder(optInfo)

    setTimeout(() => {
      executeOperation(optInfo);
      removeLimitOrder();
    }, 60000);
    
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
          amount={amountToSpend}
          limitPrice={limitPrice}
          latestCurrencyPrice={latestCurrencyPrice}
          currencyToOperate={currencyToOperate}
          onAmountToSpendChange={onAmountToSpendChange}
          onLimitPriceChange={onLimitPriceChange}
          isBuying={isBuying}
          isLimitOrder={isLimitOrder}
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
