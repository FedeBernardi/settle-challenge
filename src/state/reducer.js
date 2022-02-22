import * as actionTypes from './actionTypes';
import { CURRENCIES, OPERATION_TYPE } from '../constants';

const reducer = (state, { type, payload }) => {
  switch(type) {
    case actionTypes.DEPOSIT_FIAT: {
      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] + payload.amount;

      return { ...state };
    }
    case actionTypes.BUY_CRYPTO: {
      const { optInfo, currencyToBuy } = payload;

      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] - optInfo.total;
      state.wallet[currencyToBuy] = state.wallet[currencyToBuy] + optInfo.amount;

      state.ordersHistory.push({
        date: Date.now(),
        ...optInfo
      });

      return { ...state };
    }
    case actionTypes.SELL_CRYPTO: {
      const { optInfo, currencyToSell } = payload;

      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] + optInfo.total;
      state.wallet[currencyToSell] = state.wallet[currencyToSell] - optInfo.amount;

      state.ordersHistory.push({
        date: Date.now(),
        ...optInfo
      });

      return { ...state };
    }
    default:
      return state;
  }
}

export default reducer;
