import React, { createContext, useReducer } from 'react';

import reducer from './reducer';

const initialState = {
  currenciesPrice: {
    'btc': 0,
    'eth': 0,
    'usdt': 0
  },
  wallet: {
    'btc': 0,
    'eth': 0,
    'usdt': 0,
    'ars': 0
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
