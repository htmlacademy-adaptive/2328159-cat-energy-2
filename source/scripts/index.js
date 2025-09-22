/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-header__navigation');
const navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__navigation--nojs');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('main-header__navigation--closed');
  navMain.classList.toggle('main-header__navigation--opened');
});
