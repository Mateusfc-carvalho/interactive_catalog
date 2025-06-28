
const btnMenuToggler = document.getElementById('menu-toggler');
const mobileMenu = document.getElementById('mobile-menu');
const imageToggler = document.querySelector('#btnTogglerImage')

btnMenuToggler.addEventListener('click', () => {
  if (mobileMenu.classList.contains('max-h-0')) {
    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-[500px]');
    imageToggler.setAttribute('src', './src/assets/imgs/open-menu.svg');
  } else {
    mobileMenu.classList.add('max-h-0');
    mobileMenu.classList.remove('max-h-[500px]');
    imageToggler.setAttribute('src', './src/assets/imgs/menu.svg');
  }
});
