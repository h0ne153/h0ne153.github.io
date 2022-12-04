const burgerMenu = document.querySelector('.nav__burger'), line = document.querySelector('.lines'), nav = document.querySelector('nav')
const link = document.querySelectorAll('.aa')
burgerMenu.addEventListener('click', () => {
    line.classList.toggle('mainRotate')
    line.classList.toggle('afterRotate')
    line.classList.toggle('beforeOpacity')
    nav.classList.toggle('nav-visible')
})
link.forEach(element => {
    element.addEventListener('click', () => {
        line.classList.toggle('mainRotate')
        line.classList.toggle('afterRotate')
        line.classList.toggle('beforeOpacity')
        nav.classList.toggle('nav-visible')
    })
    
});

