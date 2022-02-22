import * as actionTypes from './actionTypes';

export const depositFiat = amount => ({
  type: actionTypes.DEPOSIT_FIAT,
  payload: {
    amount
  }
});

export const buyCrypto = (optInfo, currencyToBuy) => ({
  type: actionTypes.BUY_CRYPTO,
  payload: {
    optInfo,
    currencyToBuy
  }
});

export const sellCrypto = (optInfo, currencyToSell) => ({
  type: actionTypes.SELL_CRYPTO,
  payload: {
    optInfo,
    currencyToSell
  }
});
