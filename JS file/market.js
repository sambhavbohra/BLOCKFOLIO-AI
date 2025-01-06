async function fetchPopularMarkets() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = '?vs_currency=inr&order=gecko_desc&per_page=10&page=1';

    try {
        const response = await fetch(url + params);
        const data = await response.json();
        console.log("Updated Popular Markets Data:", data);
        
        if (data && Array.isArray(data) && data.length > 0) {
            displayPopularMarkets(data); 
        } else {
            console.error("No popular markets data found or incorrect response format.");
        }
    } catch (error) {
        console.error("Error fetching popular markets:", error);
    }
}

setInterval(fetchPopularMarkets, 15000);

document.addEventListener('DOMContentLoaded', fetchPopularMarkets);

function displayPopularMarkets(data) {
    const popularList = document.getElementById('popular-list');
    popularList.innerHTML = '';

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
