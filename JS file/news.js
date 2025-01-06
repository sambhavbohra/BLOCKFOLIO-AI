let currentSlideIndex = 0;

async function fetchCryptoNews() {
    const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
    const apiKey = '390df55107e9a62688776fd2f9c8f06ab3155b520023788de4bd98a0ffd608f3';

    try {
        const response = await fetch(url, {
            headers: { authorization: `Apikey ${apiKey}` }
        });
        const newsData = await response.json();
        console.log("Fetched Crypto News:", newsData);

        if (newsData.Data && newsData.Data.length > 0) {
            displayCryptoNews(newsData.Data);
            startNewsSlider();
        } else {
            showFallbackMessage();
        }
    } catch (error) {
        console.error("Error fetching crypto news:", error);
    }
}

function displayCryptoNews(news) {
    const newsSlider = document.getElementById('news-slider');
    newsSlider.innerHTML = '';

    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <img src="${item.imageurl || 'fallback-image.jpg'}" alt="${item.title}">
            <p>${truncateText(item.body, 35)}</p>
            <a href="${item.url}" target="_blank">Read More</a>
        `;
        newsSlider.appendChild(newsItem);
    });
}

function truncateText(text, wordLimit) {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
}

function startNewsSlider() {
    const newsSlider = document.getElementById('news-slider');
    const newsItems = document.querySelectorAll('.news-item');
    const slideWidth = newsItems[0].offsetWidth + 10;
    const totalWidth = slideWidth * newsItems.length;

    newsSlider.style.width = `${totalWidth}px`; 

    setInterval(() => {
        currentSlideIndex++;
        if (currentSlideIndex >= newsItems.length) {
            currentSlideIndex = 0; 
        }

        const offset = -(currentSlideIndex * slideWidth);
        newsSlider.style.transform = `translateX(${offset}px)`;
    }, 5000); 
}

function showFallbackMessage() {
    const fallbackMessage = document.querySelector('.fallback-message');
    fallbackMessage.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', fetchCryptoNews);
