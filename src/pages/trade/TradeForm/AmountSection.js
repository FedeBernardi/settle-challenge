import { Input } from "antd";

const AmountSection = ({ amount, currencyToOperate, onAmountToSpendChange, latestCurrencyPrice, isBuying, isLimitOrder, orderType, limitPrice, onLimitPriceChange }) => {
  const getResultMsg = () => {
    const price = isLimitOrder ? limitPrice : latestCurrencyPrice;
    const payingCurrency = isBuying ? 'ARS' : currencyToOperate;
    const receivingCurrency = isBuying ? currencyToOperate : 'ARS';
    const totalAfterOperating = isBuying ? amount / price : parseFloat(amount * price).toFixed(2);

    return `For ${amount} ${payingCurrency} you will get ${totalAfterOperating} ${receivingCurrency}`
  }

  return (
    <>
      <h3>{`How much you want to ${isBuying ? 'spend' : 'sell'}`}</h3>
      <Input
        placeholder={`${isBuying ? 'ARS' : currencyToOperate}`}
        type="number"
        min="0"
        value={amount}
        onChange={onAmountToSpendChange}
      />
      {
        isLimitOrder && (
          <>
            <h3>{`What's your price limit for ${currencyToOperate}?`}</h3>
            <Input
              placeholder="ARS"
              type="number"
              min="0"
              value={limitPrice}
              onChange={onLimitPriceChange}
            />
          </>
        )
      }
      <div className="to-receive-section">
        { !!amount && getResultMsg() }
      </div>
    </>
  );
}

export default AmountSection;
