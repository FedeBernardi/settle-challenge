import * as actionTypes from './actionTypes';

export const depositFiat = amount => ({
  type: actionTypes.DEPOSIT_FIAT,
  payload: {
    amount
  }
})
