import { Input } from "antd";

const AmountSection = ({ amount, currencyToOperate, onChange, latestCurrencyPrice, isBuying }) => {
  const getResultMsg = () => {
    const payingCurrency = isBuying ? 'ARS' : currencyToOperate;
    const receivingCurrency = isBuying ? currencyToOperate : 'ARS';
    const totalAfterOperating = isBuying ? amount / latestCurrencyPrice : amount * latestCurrencyPrice;

    return `For ${amount} ${payingCurrency} you will get ${totalAfterOperating} ${receivingCurrency}`
  }
  
  return (
    <>
      <h3>{`How much you want to ${isBuying ? 'buy' : 'sell'}`}</h3>
      <Input
        id="fiat-input"
        placeholder={`${isBuying ? 'ARS' : currencyToOperate}`}
        type="number"
        min="0"
        value={amount}
        onChange={onChange}
      />
      <div className="to-receive-section">
        { !!amount && getResultMsg() }
      </div>
    </>
  );
}

export default AmountSection;
