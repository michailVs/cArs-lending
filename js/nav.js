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
    renderPopup()
}

function renderPopup() {
    popup.appendChild(menu)
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })
    function onMenuLinkClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.navbar').offsetHeight

            if (body.classList.contains('noscroll')) {
                body.classList.remove('noscroll')
                hamb.classList.remove('active')
                popup.classList.remove('open')
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}