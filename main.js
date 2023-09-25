window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 500) {
        document.querySelector("#backToTopButton").classList.add("show")
    } else {
        document.querySelector("#backToTopButton").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: '700'
}).reveal(
    `.home-image,
    .card,
    header,
    .content`);

ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: '2000'
}).reveal(`.input`);

ScrollReveal({
    origin: 'left',
    distance: '100px',
    duration: '2000'
}).reveal(`.menu ul li`);