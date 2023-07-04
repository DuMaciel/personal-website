const header = document.getElementById('header')
const navbar = header.querySelector('.navbar')
const logo = header.querySelector('.navbar-brand')
const btnBackToTop = document.getElementById('btn-back-to-top')

const scrollTo = window.scrollTo
window.scrollTo = (to) => {
    if (to.top) {
        to.top -= header.offsetHeight
    }
    scrollTo(to)
}

btnBackToTop.addEventListener('click', () => {
    window.scroll({ top: 0 })
})

let btnInvisibleTimeout = undefined

const handleScroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-body', 'shadow')
        navbar.classList.remove('navbar-dark')
        logo.classList.remove('negative-img')
        btnBackToTop.classList.remove('opacity-0', 'invisible')
        if (btnInvisibleTimeout) {
            clearTimeout(btnInvisibleTimeout)
            btnInvisibleTimeout = undefined
        }

    } else {
        header.classList.remove('bg-body', 'shadow')
        navbar.classList.add('navbar-dark')
        logo.classList.add('negative-img')

        btnBackToTop.classList.add('opacity-0')
        if (!btnInvisibleTimeout) {
            btnInvisibleTimeout = setTimeout(() => {
                btnBackToTop.classList.add('invisible')
            }, 500)
        }
    }
}
handleScroll();
window.onscroll = () => {
    handleScroll()
}