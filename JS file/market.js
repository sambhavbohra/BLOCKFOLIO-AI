// Function to fetch and display popular cryptocurrency markets
async function fetchPopularMarkets() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = '?vs_currency=inr&order=gecko_desc&per_page=10&page=1';

    try {
        const response = await fetch(url + params);
        const data = await response.json();
        console.log("Updated Popular Markets Data:", data);
        
        // Ensure valid data before calling display function
        if (data && Array.isArray(data) && data.length > 0) {
            displayPopularMarkets(data); // Call display function
        } else {
            console.error("No popular markets data found or incorrect response format.");
        }
    } catch (error) {
        console.error("Error fetching popular markets:", error);
    }
}

// Automatically fetch and update popular markets every 15 seconds
setInterval(fetchPopularMarkets, 15000);

// Fetch data once on page load
document.addEventListener('DOMContentLoaded', fetchPopularMarkets);

// Function to display popular markets data
function displayPopularMarkets(data) {
    const popularList = document.getElementById('popular-list');
    popularList.innerHTML = ''; // Clear existing list

    data.forEach(coin => {
        const item = document.createElement('div');
        item.className = 'popular-item';
        item.innerHTML = `
            <img src="${coin.image}" alt="${coin.name}" width="40">
            <h3>${coin.name}</h3>
            <p>Price: ₹${coin.current_price.toLocaleString()}</p>
            <p>Rank: ${coin.market_cap_rank}</p>
        `;
        popularList.appendChild(item);
    });
}
