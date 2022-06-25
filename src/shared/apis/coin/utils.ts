import axios from 'axios';
import { CoinRootObject } from 'shared/utils';

const BASE_URL: string =
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?';

const API_KEY: string = 'CMC_PRO_API_KEY=98b31430-cd61-492e-830c-528c73e56a01';

export const getCoinList = async () => {
  return await axios.get<CoinRootObject.RootObject>(BASE_URL + API_KEY);
};
