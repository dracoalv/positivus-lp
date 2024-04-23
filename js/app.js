const hamburgerButton = document.querySelector('[data-js="header-hamburger"]')
const headerList = document.querySelector('[data-js="header-list"]')

function toggleBodyScroll(shouldPreventScroll) {
  if (shouldPreventScroll) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }

}

function toggleHamburger() {
  hamburgerButton.classList.toggle('active')
  headerList.classList.toggle('active')

  const isHamburgerActive = hamburgerButton.classList.contains('active')
  const isHeaderListActive = headerList.classList.contains('active')

  const isMenuOpen = isHamburgerActive || isHeaderListActive

  toggleBodyScroll(isMenuOpen)
}

function toggleHeaderList(event) {
  const clickedElement = event.target
  const isAnchorElement = clickedElement.tagName === 'A'
  const isLIChidlrenElement = clickedElement.parentElement.tagName === 'LI'

  if (isAnchorElement && isLIChidlrenElement) {
    hamburgerButton.classList.remove('active')
    headerList.classList.remove('active')

    toggleBodyScroll(false);
  }
}

hamburgerButton.addEventListener('click', toggleHamburger)
headerList.addEventListener('click', toggleHeaderList)