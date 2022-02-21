import axios from 'axios';
import { CURRENCIES } from '../constants';

const apiInstance = axios.create({
  baseURL: 'https://api-staging2.zetl.network'
});

export const getPrice = (fromAsset, isBuying) => {
  return apiInstance.get('/api/quotes', {
    params: {
      fromAsset, 
      toAsset: CURRENCIES.ARS,
      type: `${isBuying ? 'buy' : 'sell'}-crypto`,
      pid: '1CmURrXeoKwyXF'
    }
  })
}
