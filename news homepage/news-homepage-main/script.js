let hamburger = document.querySelector('#hamburger');
let crossMark = document.querySelector('#cross-mark');
let iconMenuClose = document.querySelector('#icon-menu-close')
let menu = document.querySelector('.menu')



hamburger.addEventListener('click', function () {
    hamburger.classList.add('hidden')
    crossMark.classList.remove('hidden')
    iconMenuClose.classList.remove('hidden')
    menu.classList.add('is-active')

})

crossMark.addEventListener('click', function () {
    hamburger.classList.remove('hidden')
    crossMark.classList.add('hidden')
    iconMenuClose.classList.add('hidden')
    menu.classList.remove('is-active')
})

