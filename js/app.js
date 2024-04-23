const hamburgerButton = document.querySelector('[data-js="header-hamburger"]')
const headerList = document.querySelector('[data-js="header-list"]')

hamburgerButton.addEventListener('click', (e) => {
  const clickedElement = e.target.closest('[data-js="header-hamburger"]')
  clickedElement.classList.toggle('active')
  headerList.classList.toggle('active')
})