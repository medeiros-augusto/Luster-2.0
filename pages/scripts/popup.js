const button = document.querySelector('#login')
const signup = document.querySelector('.popup-link')
const popup = document.querySelector('.popup-wrapper')
const popupcad = document.querySelector('.popup-total')
const closebutton = document.querySelector('.popup-close')
const geral = document.querySelector('.pg-footer')
const volta = document.querySelector('#pop-volta')

button.addEventListener('click', () => {
    popup.style.display = 'block'
    geral.style.display = 'none'
})
signup.addEventListener('click', () => {
    popup.style.display = 'none'
    popupcad.style.display = 'block'
})
volta.addEventListener('click', () => {
    popup.style.display = 'block'
    popupcad.style.display = 'none'
})

popup.addEventListener('click', event => {
    const classnameofclickedelement = event.target.classList[0];
    console.log(classnameofclickedelement)
    const classnames = ['popup-close', 'popup-wrapper']
    const closepopup = classnames.some(classname => classname === classnameofclickedelement)
    if (closepopup) {
        popup.style.display = 'none'
        geral.style.display = 'block'
    }
})

popupcad.addEventListener('click', event => {
    const classnameofclickedelement = event.target.classList[0];
    console.log(classnameofclickedelement)
    const classnames = ['popup-close', 'popup-total']
    const closepopup = classnames.some(classname => classname === classnameofclickedelement)
    if (closepopup) {
        popupcad.style.display = 'none'
        geral.style.display = 'block'
    }
})