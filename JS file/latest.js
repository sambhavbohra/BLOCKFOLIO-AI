async function fetchLatestListings() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = '?vs_currency=inr&order=market_cap_descc&per_page=10&page=1'; 

    try {
        const response = await fetch(url + params);
        const data = await response.json();
        console.log("Fetched Latest Listings:", data);
        displayLatestListings(data);
    } catch (error) {
        console.error("Error fetching latest listings:", error);
    }
}

setInterval(fetchLatestListings, 15000);

function displayLatestListings(data) {
    const latestListContainer = document.getElementById('latest-list-container');
    latestListContainer.innerHTML = '';

    data.forEach(coin => {
        const item = document.createElement('div');
        item.className = 'latest-item';
        item.innerHTML = `
            <img src="${coin.image}" alt="${coin.name}" width="40">
            <h3>${coin.name}</h3>
            <p>Price: ₹${coin.current_price.toLocaleString()}</p>
        `;
        latestListContainer.appendChild(item);
    });
}

// Fetch and display latest listings on page load
document.addEventListener('DOMContentLoaded', fetchLatestListings);
