import * as actionTypes from './actionTypes';

export const depositFiat = amount => ({
  type: actionTypes.DEPOSIT_FIAT,
  payload: {
    amount
  }
});

/**
 * @param currencyPair object - contains the two currencies of the transaction
 * and their quantities
 * @param currencyToBuy string - is the ticker of the currency being bought
 */
export const buyCrypto = (currencyPair, currencyToBuy) => ({
  type: actionTypes.BUY_CRYPTO,
  payload: {
    currencyPair,
    currencyToBuy
  }
});
