import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://api-staging2.zetl.network'
});

export const getBuyingPrice = (fromAsset, toAsset) => {
  return apiInstance.get('/api/quotes', {
    params: {
      fromAsset, 
      toAsset,
      type: 'buy-crypto',
      pid: '1CmURrXeoKwyXF'
    }
  })
}
