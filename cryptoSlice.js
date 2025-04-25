// src/features/crypto/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400', price: 93759.48, price_change_percentage_1h_in_currency: -0.43, price_change_percentage_24h_in_currency: 0.33, price_change_percentage_7d_in_currency: -11.11, market_cap: 1861618902186, total_volume: 43874950947, circulating_supply: 19685000, max_supply: 21000000, sparkline_7d: { price: [94000, 93500, 93800, 93200, 93600, 93900, 93700] } },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628', price: 1802.46, price_change_percentage_1h_in_currency: -0.60, price_change_percentage_24h_in_currency: -3.21, price_change_percentage_7d_in_currency: -13.68, market_cap: 217581279327, total_volume: 23547469307, circulating_supply: 120710000, max_supply: null, sparkline_7d: { price: [1820, 1810, 1830, 1800, 1825, 1840, 1805] } },
    { id: 'tether', name: 'Tether', symbol: 'USDT', logo: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1696501661', price: 1.00, price_change_percentage_1h_in_currency: 0.00, price_change_percentage_24h_in_currency: 0.00, price_change_percentage_7d_in_currency: 0.04, market_cap: 145320022085, total_volume: 92288882007, circulating_supply: 145270000000, max_supply: null, sparkline_7d: { price: [1.001, 1.002, 1.00, 0.999, 1.001, 1.003, 1.00] } },
    { id: 'ripple', name: 'XRP', symbol: 'XRP', logo: 'https://assets.coingecko.com/coins/images/44/large/xrp-logo.png?1696501248', price: 2.22, price_change_percentage_1h_in_currency: -0.46, price_change_percentage_24h_in_currency: 0.54, price_change_percentage_7d_in_currency: -6.18, market_cap: 130073814986, total_volume: 5131481491, circulating_supply: 58398000000, max_supply: 100000000000, sparkline_7d: { price: [2.23, 2.21, 2.24, 2.20, 2.23, 2.25, 2.22] } },
    { id: 'binance-coin', name: 'BNB', symbol: 'BNB', logo: 'https://assets.coingecko.com/coins/images/825/large/bnb-logo.png?1696501919', price: 606.65, price_change_percentage_1h_in_currency: -0.09, price_change_percentage_24h_in_currency: -1.20, price_change_percentage_7d_in_currency: -3.73, market_cap: 85471956947, total_volume: 1874281784, circulating_supply: 140890000, max_supply: null, sparkline_7d: { price: [610, 605, 608, 602, 606, 612, 607] } },
  ],
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;

export default cryptoSlice.reducer;