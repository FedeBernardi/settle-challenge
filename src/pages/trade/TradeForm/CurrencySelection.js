import { Radio } from 'antd';

import { CURRENCIES } from '../../../constants';

const CurrencySelection = ({ currencyToOperate, onChange }) => {
  return (
    <>
      <h3>Currency</h3>
      <Radio.Group value={currencyToOperate} onChange={onChange}>
        <Radio value={CURRENCIES.BTC}>{CURRENCIES.BTC}</Radio>
        <Radio value={CURRENCIES.ETH}>{CURRENCIES.ETH}</Radio>
        <Radio value={CURRENCIES.USDC}>{CURRENCIES.USDC}</Radio>
      </Radio.Group>
    </>
  )
}

export default CurrencySelection;
