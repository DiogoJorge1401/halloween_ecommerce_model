/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

if (navToggle)
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
if (navClose)
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')
const linkAction = () => {
  navMenu.classList.remove('show-menu')
}
navLinks.forEach((el) => {
  el.addEventListener('click', linkAction)
})

/*=============== HOME SWIPER ===============*/
const homeSwiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  if (window.scrollY >= 50) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== NEW SWIPER ===============*/
const newSwiper = new Swiper('.new-swiper', {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  grabCursor: true,
  pagination: {
    clickable: true,
  },
})
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach((el) => {
    const sectionHeight = el.offsetHeight,
      sectiTop = el.offsetTop - 50,
      sectionId = el.getAttribute('id'),
      navLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`)

    if (scrollY > sectiTop && scrollY <= sectiTop + sectionHeight)
      navLink.classList.add('active-link')
    else navLink.classList.remove('active-link')
  })
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  if (window.scrollY >= 460) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home-swiper, .new-swiper, .newsletter__container')
sr.reveal('.category__data, .trick__content, .footer__content', {
  interval: 100,
})
sr.reveal('.about__data, .discount__img', { origin: 'left' })
sr.reveal('.about__img, .discount__data', { origin: 'right' })
