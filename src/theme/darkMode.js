const html = document.documentElement;
const togglerTheme = document.getElementById('toggler-theme');
const toggleImage = document.getElementById('toggleThemeImage');
const bannerDark = document.querySelector('.banner-image');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    html.classList.add('dark');
    toggleImage.setAttribute('src', './src/assets/imgs/sun.svg');
    bannerDark.setAttribute('src', './src/assets/imgs/banner-dark.png');
} else {
    html.classList.remove('dark');
    toggleImage.setAttribute('src', './src/assets/imgs/moon.svg');
    bannerDark.setAttribute('src', './src/assets/imgs/banner.png');
}

togglerTheme.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');

    if (isDark) {
        toggleImage.setAttribute('src', './src/assets/imgs/sun.svg');
        bannerDark.setAttribute('src', './src/assets/imgs/banner-dark.png');
        localStorage.setItem('theme', 'dark');
    } else {
        toggleImage.setAttribute('src', './src/assets/imgs/moon.svg');
        bannerDark.setAttribute('src', './src/assets/imgs/banner.png');
        localStorage.setItem('theme', 'light');
    }
});
