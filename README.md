# BlockFolio AI

## Overview
BlockFolio AI is a cryptocurrency tracking application that provides users with the latest updates on cryptocurrencies, including prices, market trends, and predictions. The application uses multiple APIs to fetch and display real-time data and features a clean, responsive design optimized for both desktop and mobile users.

## Features

### 1. Cryptocurrency Information
- Displays popular and latest cryptocurrency listings in the sidebar.
- Fetches real-time market data using the **CoinGecko API**.
- Provides users with key details such as:
  - Coin name and symbol.
  - Market rank.
  - Current price.
  - Market capitalization.
  - Circulating supply.
  - All-time high price.

### 2. Latest Crypto News
- Uses the **CryptoCompare News API** to fetch the latest cryptocurrency-related news.
- Features a horizontal scrolling slider to display news headlines and summaries.
- Each news item includes:
  - Title.
  - Thumbnail image.
  - A short description (limited to 50 words).
  - A link to the full article.

### 3. Search Functionality
- Users can search for specific cryptocurrencies by entering the coin’s name or ticker symbol in the search bar.
- Redirects to a dedicated coin dashboard displaying:
  - Real-time price.
  - Historical price trends over 5 years (plotted on an interactive graph).
  - Future price predictions (using time-series analysis or mock data).
  - Relevant news about the coin.

### 4. Dark and Light Mode Toggle
- Allows users to switch between dark and light themes for a personalized experience.

### 5. Future Enhancements (Planned)
- Add downloadable reports summarizing historical trends and future predictions.
- Enhance prediction models using machine learning APIs.
- Provide additional filters for viewing data (e.g., linear vs logarithmic scales).

## APIs Used
1. **CoinGecko API**:
   - Fetches real-time cryptocurrency prices, market data, and historical charts.
   - Endpoint: `/coins/{id}/market_chart` for price trends.

2. **CryptoCompare News API**:
   - Retrieves the latest cryptocurrency news articles.
   - Endpoint: `/data/v2/news/?lang=EN`.

## Installation and Setup
### Prerequisites
- A local development environment with a web server (e.g., **Live Server** in VS Code).
- An internet connection to fetch live API data.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/blockfolio-ai.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blockfolio-ai
   ```
3. Open the project in your code editor and launch it using **Live Server** or deploy it to a hosting service like **Vercel**.

4. Ensure all required dependencies (e.g., `Chart.js`) are included via a CDN or package manager.

## Project Structure
```
blockfolio-ai/
├── index.html       # Main landing page
├── css/
│   └── style.css    # Main stylesheet
├── js/
│   ├── market.js    # Logic for popular
│   ├── news.js      # Handles fetching and displaying news
│   ├── latest.js    # latest crypto markets
│   ├── toggle.js    # Toggle script
│
├── assets/
│   └── icons/       # Icons for dark mode, search, etc.
├── README.md        # Project documentation
```

## How to Use
1. Open the application in your browser.
2. Browse popular and latest cryptocurrencies in the sidebar.
3. Read the latest news displayed in the slider.
4. Use the search bar to search for a cryptocurrency by name or ticker symbol.
5. View detailed information, graphs, and predictions on the dedicated coin dashboard.
6. Switch between dark and light modes using the toggle.

## Known Issues
- **API Rate Limits**: Ensure your API keys are valid and respect the rate limits to avoid disruptions.
- **Mobile Responsiveness**: Some elements may require additional optimization for smaller screens.

## Future Plans
- Enhance the predictive models using machine learning APIs.
- Add more interactive filters and customization options for graphs.
- Implement a notification system for price alerts.

---

For any issues or feature requests, please open a ticket on the project’s [GitHub repository](https://github.com/your-repo/blockfolio-ai/issues).

