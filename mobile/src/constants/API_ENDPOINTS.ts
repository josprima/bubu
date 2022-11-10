const BASE_URL = 'https://api.pintu.co.id/v2';

const API_ENDPOINTS = {
  coinList: `${BASE_URL}/wallet/supportedCurrencies`,
  priceChanges: `${BASE_URL}/trade/price-changes`,
};

export default API_ENDPOINTS;
