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
    header,
    .content,
    #news .card`);

ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: '2000'
}).reveal(`.input`);

ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: '2000',
}).reveal(`#lobinho`);

ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: '2000',
    delay: '100'
}).reveal(`#escoteiro`);

ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: '2000',
    delay: '200'
}).reveal(`#senior`);

ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: '2000',
    delay: '300'
}).reveal(`#pioneiro`);

ScrollReveal({
    origin: 'right',
    distance: '100px',
    duration: '2000',
    delay: '400'
}).reveal(`#adulto`);