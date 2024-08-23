const menuBtn = document.querySelector('.menu__btn'),
  navigation = document.querySelector('.nav__menu');


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
  navigation.classList.toggle('active')
})