# Real-Time Crypto Price Tracker

## Overview

This project is a real-time cryptocurrency price tracker built using React and Redux Toolkit. It displays the prices and other relevant information for five popular cryptocurrencies (Bitcoin, Ethereum, Tether, XRP, and Binance Coin) and simulates real-time updates using a mocked WebSocket. The application features a responsive table layout that adapts to different screen sizes and a user-friendly interface with color-coded percentage changes and sparkline charts.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    ```
    *(Replace `<YOUR_REPOSITORY_URL>` with the actual URL of your GitHub/GitLab repository)*

2.  **Navigate to the project directory:**
    ```bash
    cd <YOUR_PROJECT_FOLDER>
    ```
    *(Replace `<YOUR_PROJECT_FOLDER>` with the name of your project folder)*

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

5.  **Open your browser:** Navigate to `http://localhost:3000` to view the application.

## Tech Stack

* **Frontend Framework:** React
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Styling:** CSS (with responsive design using media queries, custom styling for enhanced UI)
* **Simulated Real-Time Updates:** JavaScript (`setInterval`, custom `MockWebSocket` class)
* **Sparkline Charts:** SVG

## Architecture

The application follows a component-based architecture with Redux Toolkit managing the global state.

* **`src/App.js`:** The main component that sets up the Redux store and initializes the mock WebSocket connection. It renders the main heading and the `CryptoTable` component.
* **`src/components/CryptoTable.js`:** This component displays the cryptocurrency data in a responsive table format. It uses the `useSelector` hook to access the asset data from the Redux store and formats the data for display, including color-coding percentage changes and rendering sparkline charts.
* **`src/features/crypto/cryptoSlice.js`:** This file defines the Redux slice for managing the cryptocurrency data. It includes the initial state, reducers to update the state (`updateAssets`), and selectors (`selectAssets`).
* **`src/utils/mockWebSocket.js`:** This file contains the `MockWebSocket` class, which simulates a WebSocket connection by generating random updates to cryptocurrency data at intervals and dispatching the `updateAssets` action.
* **`src/App.css`:** Contains global styles for the application, including the background and heading.
* **`src/components/CryptoTable.css`:** Contains the CSS styles specifically for the `CryptoTable` component, including the responsive design and visual enhancements.
* **`public/images/`:** This folder contains the locally hosted logo images for XRP (`xrp-logo.png`) and Binance Coin (`bnb-logo.png`). These were used as a workaround for a potential CORS issue or temporary unavailability when fetching directly from the external CoinGecko server.

The data flow is as follows:

1.  The `App` component starts the `MockWebSocket` within the `CryptoTable` component's `useEffect`.
2.  `MockWebSocket` generates updated data and dispatches the `updateAssets` action.
3.  The `cryptoSlice` reducer updates the `assets` array in the Redux store.
4.  The `CryptoTable` component, using `useSelector(selectAssets)`, retrieves the updated data and re-renders the UI with the latest information.

## Demo

[![Real-Time Crypto Price Tracker Demo](<YOUR_DEMO_VIDEO_THUMBNAIL_URL>)](<YOUR_DEMO_VIDEO_LINK>)
*(Replace `<YOUR_DEMO_VIDEO_THUMBNAIL_URL>` with a link to a thumbnail of your demo video if you have one, otherwise you can leave it as is. Replace `<YOUR_DEMO_VIDEO_LINK>` with the actual URL of your demo video on YouTube, Loom, or another platform. If you created a GIF, you can embed it directly using `![Demo GIF](path/to/your/demo.gif)`)*

This demo showcases the real-time updating of cryptocurrency prices and other data, the responsive table layout adapting to different screen sizes, and the overall user interface.

## Potential Improvements (Optional)

* Integration with a real WebSocket API (e.g., Binance).
* Adding features like sorting and filtering of the cryptocurrency data (e.g., top gainers, losers).
* Implementing local storage to persist user preferences or data.
* Writing unit tests for Redux reducers and selectors.
* Using TypeScript for enhanced type safety.

## Challenges Faced and Solutions

One of the challenges encountered was the inability to directly load logo images for XRP and Binance Coin from an external source (CoinGecko) due to potential CORS (Cross-Origin Resource Sharing) restrictions or temporary unavailability. To ensure these logos were visible for the demonstration, the images were downloaded and hosted locally within the `public/images` folder of the project. The `logo` properties in the initial asset data were then updated to point to these local files.

## Author

*(Bharath Chandra)*