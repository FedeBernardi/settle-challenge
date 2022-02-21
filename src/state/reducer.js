import * as actionTypes from './actionTypes';
import { CURRENCIES } from '../constants';

const reducer = (state, { type, payload }) => {
  switch(type) {
    case actionTypes.DEPOSIT_FIAT: {
      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] + payload.amount;

      return { ...state };
    }
    case actionTypes.BUY_CRYPTO: {
      const { currencyPair, currencyToBuy } = payload;

      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] - currencyPair[CURRENCIES.ARS];
      state.wallet[currencyToBuy] = state.wallet[currencyToBuy] + currencyPair[currencyToBuy];

      return { ...state };
    }
    case actionTypes.SELL_CRYPTO: {
      const { currencyPair, currencyToSell } = payload;

      state.wallet[CURRENCIES.ARS] = state.wallet[CURRENCIES.ARS] + currencyPair[CURRENCIES.ARS];
      state.wallet[currencyToSell] = state.wallet[currencyToSell] - currencyPair[currencyToSell];

      return { ...state };
    }
    default:
      return state;
  }
}

export default reducer;
