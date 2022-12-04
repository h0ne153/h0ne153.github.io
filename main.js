const burgerMenu = document.querySelector('.nav__burger'), line = document.querySelector('.lines'), nav = document.querySelector('nav')
const burgerMenuRU = document.querySelector('.nav__burgerRU'), lineRU = document.querySelector('.linesRU'), navRU = document.querySelector('.navRU')
const enButton = document.getElementById('en'), ruButton = document.getElementById('ru')
const link = document.querySelectorAll('.aa')
const body = document.querySelector('body')

burgerMenu.addEventListener('click', () => {
    line.classList.toggle('mainRotate')
    line.classList.toggle('afterRotate')
    line.classList.toggle('beforeOpacity')
    nav.classList.toggle('nav-visible')
})

burgerMenuRU.addEventListener('click', () => {
    lineRU.classList.toggle('mainRotate')
    lineRU.classList.toggle('afterRotate')
    lineRU.classList.toggle('beforeOpacity')
    navRU.classList.toggle('nav-visible')
})

link.forEach(element => {
    element.addEventListener('click', () => {
        line.classList.toggle('mainRotate')
        line.classList.toggle('afterRotate')
        line.classList.toggle('beforeOpacity')
        nav.classList.toggle('nav-visible')

        lineRU.classList.toggle('mainRotate')
        lineRU.classList.toggle('afterRotate')
        lineRU.classList.toggle('beforeOpacity')
        navRU.classList.toggle('nav-visible')
    })
});


enButton.addEventListener('click', ()=>{
    body.classList.add('en')
    body.classList.remove('ru')
})

ruButton.addEventListener('click',()=>{
    body.classList.add('ru')
    body.classList.remove('en')
})
