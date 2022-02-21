import { Input } from "antd";

const AmountSection = ({ amount, currencyToOperate, onChange, latestCurrencyPrice, isBuying }) => {
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
        { !!amount && `For ${amount} ARS you will get ${amount / latestCurrencyPrice} ${currencyToOperate}` }
      </div>
    </>
  );
}

export default AmountSection;
