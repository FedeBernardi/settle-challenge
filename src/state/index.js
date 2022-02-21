import React, { createContext, useReducer } from 'react';

import { CURRENCIES } from '../constants';
import reducer from './reducer';

const initialState = {
  currenciesPrice: {
    [CURRENCIES.BTC]: 0,
    [CURRENCIES.ETH]: 0,
    [CURRENCIES.USDC]: 0
  },
  wallet: {
    [CURRENCIES.BTC]: 0,
    [CURRENCIES.ETH]: 0,
    [CURRENCIES.USDC]: 0,
    [CURRENCIES.ARS]: 0
  },
  fees: 0,
  ordersHistory: []
}

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppContext.Provider>
) 
