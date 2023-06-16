console.log('asdsad')
document.querySelectorAll('section').forEach(item => {
    item.addEventListener('click', () => {
        const text = item.querySelectorAll('h1, span')
        text.forEach(child => {
            if (child.classList.contains('fadeOut')) {
                child.classList.remove('fadeOut')
                child.classList.add('fadeIn')
            } else {
                child.classList.remove('fadeIn')
                child.classList.add('fadeOut')
            }
        })
        //.classList.add('fadeOut')
        //document.querySelectorAll('section').forEach(section => {
        //    section.innerHTML = ''
        //})
    })
})