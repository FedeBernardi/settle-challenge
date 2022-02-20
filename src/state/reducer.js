import * as actionTypes from './actionTypes';

const reducer = (state, { type, payload }) => {
  switch(type) {
    case actionTypes.DEPOSIT_FIAT:
      state.wallet.ars = state.wallet.ars + payload.amount;

      return JSON.parse(JSON.stringify(state));
    default:
      return state;
  }
}

export default reducer;
