const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

let isDarkTheme = localStorage.getItem('theme') === 'dark';
document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : '');
themeIcon.src = isDarkTheme ? 'assests/light.svg' : 'assests/dark.svg';

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : '');
    themeIcon.src = isDarkTheme ? 'assests/light.svg' : 'assests/dark.svg';
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});
