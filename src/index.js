import './styles.css';

import menu from './menu.json';
import menuTemlates from './templates/menu.hbs';

const menuMarkup = document.querySelector(".js-menu");
menuMarkup.insertAdjacentHTML('afterbegin', menuTemlates(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.body;

themeSwitch.addEventListener('change', onThemeChange);

if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.toggle(Theme.DARK);
    themeSwitch.checked = true;
}
else {
    body.classList.toggle(Theme.LIGHT);
    themeSwitch.checked = false;  
}

function onThemeChange(evt) {
    if (evt.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
         body.classList.remove(Theme.LIGHT);
        body.classList.add(localStorage.getItem('theme'));
    }
    else {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.remove(Theme.DARK);
    }
}
