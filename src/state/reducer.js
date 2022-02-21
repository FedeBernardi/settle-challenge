import * as actionTypes from './actionTypes';
import { CURRENCIES, OPERATION_TYPE } from '../constants';

const reducer = (state, { type, payload }) => {
  switch(type) {
    case actionTypes.DEPOSIT_FIAT: {
      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] + payload.amount;

      return { ...state };
    }
    case actionTypes.BUY_CRYPTO: {
      const { currencyPair, currencyToBuy, price, orderType } = payload;

      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] - currencyPair[CURRENCIES.ARS];
      state.wallet[currencyToBuy] = state.wallet[currencyToBuy] + currencyPair[currencyToBuy];

      state.ordersHistory.push({
        date: Date.now(),
        operation: OPERATION_TYPE.BUY,
        orderType,
        pair: `${currencyToBuy}/${CURRENCIES.ARS}`,
        price,
        amount: currencyPair[currencyToBuy],
        total: currencyPair[CURRENCIES.ARS]
      });

      return { ...state };
    }
    case actionTypes.SELL_CRYPTO: {
      const { currencyPair, currencyToSell, price, orderType } = payload;

      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] + currencyPair[CURRENCIES.ARS];
      state.wallet[currencyToSell] = state.wallet[currencyToSell] - currencyPair[currencyToSell];

      state.ordersHistory.push({
        date: Date.now(),
        operation: OPERATION_TYPE.SELL,
        orderType,
        pair: `${CURRENCIES.ARS}/${currencyToSell}`,
        price,
        amount: currencyPair[currencyToSell],
        total: currencyPair[CURRENCIES.ARS]
      });

      return { ...state };
    }
    default:
      return state;
  }
}

export default reducer;
