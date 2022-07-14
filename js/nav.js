const hamb = document.querySelector('#hamb')
const popup = document.querySelector('#popup')
const menu = document.querySelector('#menu').cloneNode(1)
const body = document.body

// Функция открытия нав-бара
hamb.addEventListener('click', hambHandler)
function hambHandler(e) {
    e.preventDefault()
    popup.classList.toggle('open')
    hamb.classList.toggle('active')
    body.classList.toggle('noscroll')
    if (popup.classList.contains('open')) {
        popup.appendChild(menu)
    } else {
        popup.removeChild(menu)
    }
}


// Прокрутка при клике
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener('click', onMenuLinkClick)
//     })
//     function onMenuLinkClick(e) {
//         const menuLink = e.target.dataset.goto
//         if (menuLink && document.querySelector(menuLink)) {
//             const gotoBlock = document.querySelector(menuLink.dataset.goto)
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.navbar').offsetHeight

//             if (hamb.classList.contains('active')) {
//                 body.classList.remove('noscroll')
//                 hamb.classList.remove('active')
//                 popup.classList.remove('open')
//             }
//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: 'smooth'
//             })
//             e.preventDefault()
//         }
//     }
// }
// const goToFunc = e => {
//     const goTo = e.target.dataset.goto
//     if ((goTo === '.hero' || goTo === '.services' || goTo === '.about' || goTo === '.fast') && document.querySelector(goTo)) {
//         if (hamb.classList.contains('active')) {
//             body.classList.remove('noscroll')
//             hamb.classList.remove('active')
//             popup.classList.remove('open')
//         }
//         const gotoBlock = document.querySelector(goTo)
//         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.navbar').offsetHeight
//         window.scrollTo({
//         top: gotoBlockValue,
//         behavior: 'smooth'
//         })
//         e.preventDefault()
//     }
// }
const goToFunc = e => {
    const goTo = e.target.dataset.goto
    if ((goTo === '.hero' || goTo === '.services' || goTo === '.about' || goTo === '.fast') && document.querySelector(goTo)) {
        if (hamb.classList.contains('active')) {
            body.classList.remove('noscroll')
            hamb.classList.remove('active')
            popup.classList.remove('open')
        }
        const gotoBlock = document.querySelector(goTo).getBoundingClientRect().top + scrollY - document.querySelector('.navbar').offsetHeight
        window.scrollTo({
            top: gotoBlock,
            behavior: 'smooth'
            })
        e.preventDefault()
    }
}
window.addEventListener('click', goToFunc)