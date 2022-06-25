import axios from "axios";
const BASE_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=98b31430-cd61-492e-830c-528c73e56a01'
const BASE_URL_PRODUCT = 'https://fakestoreapi.com/products'

const getCoin = async () => {
    const response = await axios.get(BASE_URL)
    return response.data;
};

const getProduct = async () => {
    const response = await axios.get(BASE_URL_PRODUCT)
    return response.data
}

export {getCoin, getProduct};
