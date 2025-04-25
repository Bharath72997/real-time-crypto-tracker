import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, updateAssets } from './features/crypto/cryptoSlice';
import './CryptoTable.css';
import './App.css';
import MockWebSocket from './utils/mockWebSocket';

const CryptoTable = () => {
  const assets = useSelector(selectAssets);

  const formatPercentage = (value) => {
    if (value > 0) {
      return <span className="positive">{value.toFixed(2)}%</span>;
    } else if (value < 0) {
      return <span className="negative">{value.toFixed(2)}%</span>;
    } else {
      return <span>{value.toFixed(2)}%</span>;
    }
  };

  const Sparkline = ({ data }) => {
    if (!data || !data.price || data.price.length < 2) {
      return <div>No data</div>;
    }
    const minPrice = Math.min(...data.price);
    const maxPrice = Math.max(...data.price);
    const priceRange = maxPrice - minPrice;
    const points = data.price.map((p, index) => {
      const x = index * (70 / (data.price.length - 1));
      const y = priceRange === 0 ? 12.5 : 25 - ((p - minPrice) / priceRange) * 20;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width="70" height="25">
        <polyline points={points} stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    );
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td data-column="#">{index + 1}</td>
              <td data-column="Logo"><img src={asset.logo} alt={asset.name} width="24" height="24" /></td>
              <td data-column="Name">{asset.name}</td>
              <td data-column="Symbol">{asset.symbol}</td>
              <td data-column="Price">${asset.price.toFixed(2)}</td>
              <td data-column="1h %">{formatPercentage(asset.price_change_percentage_1h_in_currency)}</td>
              <td data-column="24h %">{formatPercentage(asset.price_change_percentage_24h_in_currency)}</td>
              <td data-column="7d %">{formatPercentage(asset.price_change_percentage_7d_in_currency)}</td>
              <td data-column="Market Cap">${asset.market_cap.toLocaleString()}</td>
              <td data-column="24h Volume">${asset.total_volume.toLocaleString()}</td>
              <td data-column="Circulating Supply">{asset.circulating_supply.toLocaleString()} {asset.symbol}</td>
              <td data-column="Max Supply">{asset.max_supply ? asset.max_supply.toLocaleString() : '∞'}</td>
              <td data-column="7D Chart"><Sparkline data={asset.sparkline_7d} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const mockWebSocket = new MockWebSocket((updatedAssets) => {
      dispatch(updateAssets(updatedAssets));
    });

    mockWebSocket.connect();

    return () => {
      mockWebSocket.disconnect();
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;