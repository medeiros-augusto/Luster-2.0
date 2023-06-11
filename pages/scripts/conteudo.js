var mais = document.querySelector('#mais')
var menos = document.querySelector('#menos')
const conteudo = document.querySelector('.conteudo p')

mais.addEventListener('click', function () {
    conteudo.style.display="block"
    mais.style.display="none"
    menos.style.display="inline"

})
menos.addEventListener('click', function () {
    conteudo.style.display="none"
    mais.style.display="inline"
    menos.style.display="none"

})