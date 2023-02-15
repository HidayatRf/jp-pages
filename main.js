const navbar = document.querySelector('nav')
const navlist = navbar.querySelector('.navlist')
const opnNav = navbar.querySelector('.opnNav')
const menuIcon = opnNav.querySelector('i')

opnNav.addEventListener('click', function () {
	navlist.style.top = `${navbar.clientHeight}px`
  navlist.classList.toggle('opened')
  menuIcon.classList.toggle('fa-xmark')
})

window.addEventListener('load', () => {
  document.body.style.paddingTop = navbar.clientHeight + "px"
})

window.addEventListener('scroll', () => {
  const wScroll = Math.floor(window.scrollY)
  if (wScroll >= 4) {
    navbar.style.boxShadow = "0 0 20px rgba(84, 98, 218, 1)"
  }else {
    navbar.style.boxShadow = "0 0 20px rgba(84, 98, 218, 0)"
  }
})