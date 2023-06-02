const button = document.querySelector('#login')
const popup = document.querySelector('.popup-wrapper')
const closebutton = document.querySelector('.popup-close')
const geral = document.querySelector('.pg-footer')

button.addEventListener('click', () => {
    popup.style.display = 'block'
    geral.style.display = 'none'
})

popup.addEventListener('click', event => {
    const classnameofclickedelement = event.target.classList[0];
    console.log(classnameofclickedelement)
    const classnames = ['popup-link', 'popup-close', 'popup-wrapper']
    const closepopup = classnames.some(classname => classname === classnameofclickedelement)
    if (closepopup) {
        popup.style.display = 'none'
        geral.style.display = 'block'
    }
})