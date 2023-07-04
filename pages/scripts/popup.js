const button = document.querySelector("#login"); // Seleciona o elemento com id "login" e armazena na variável button
const signup = document.querySelector(".popup-link"); // Seleciona o elemento com classe "popup-link" e armazena na variável signup
const popup = document.querySelector(".popup-wrapper"); // Seleciona o elemento com classe "popup-wrapper" e armazena na variável popup
const popupcad = document.querySelector(".popup-total"); // Seleciona o elemento com classe "popup-total" e armazena na variável popupcad
const closebutton = document.querySelector(".popup-close"); // Seleciona o elemento com classe "popup-close" e armazena na variável closebutton
const volta = document.querySelector("#pop-volta"); // Seleciona o elemento com id "pop-volta" e armazena na variável volta
const recarga = document.querySelector("#recarga"); // Seleciona o elemento com id "recarga" e armazena na variável recarga
const poprecarga = document.querySelector(".popup-recarga"); // Seleciona o elemento com classe "popup-recarga" e armazena na variável poprecarga
const linkhistorico = document.querySelector("#historico")
const popuphistorico = document.querySelector(".popuphistorico")

button.addEventListener("click", () => {
  // Adiciona um ouvinte de eventos de clique ao botão "login"
  popup.style.display = "block"; // Altera o estilo de exibição do popup para "block" (exibido)
});

signup.addEventListener("click", () => {
  // Adiciona um ouvinte de eventos de clique ao elemento "popup-link"
  popup.style.display = "none"; // Altera o estilo de exibição do popup para "none" (oculto)
  popupcad.style.display = "block"; // Altera o estilo de exibição do popupcad para "block" (exibido)
});

volta.addEventListener("click", () => {
  // Adiciona um ouvinte de eventos de clique ao elemento com id "pop-volta"
  popup.style.display = "block"; // Altera o estilo de exibição do popup para "block" (exibido)
  popupcad.style.display = "none"; // Altera o estilo de exibição do popupcad para "none" (oculto)
});

recarga.addEventListener("click", () => {
  // Adiciona um ouvinte de eventos de clique ao elemento com id "recarga"
  poprecarga.style.display = "block"; // Altera o estilo de exibição do poprecarga para "block" (exibido)
});

linkhistorico.addEventListener("click", () => {
  popuphistorico.style.display = "block"
})

popup.addEventListener("click", (event) => {
  // Adiciona um ouvinte de eventos de clique ao elemento "popup-wrapper"
  const classnameofclickedelement = event.target.classList[0]; // Obtém a classe do elemento clicado dentro do popup
  console.log(classnameofclickedelement); // Imprime a classe do elemento clicado no console
  const classnames = ["popup-close", "popup-wrapper"]; // Array de classes que indicam que o popup deve ser fechado
  const closepopup = classnames.some(
    (classname) => classname === classnameofclickedelement
  ); // Verifica se a classe do elemento clicado está presente no array de classes
  if (closepopup) {
    popup.style.display = "none"; // Fecha o popup alterando o estilo de exibição para "none" (oculto)
  }
});

popupcad.addEventListener("click", (event) => {
  // Adiciona um ouvinte de eventos de clique ao elemento "popup-total"
  const classnameofclickedelement = event.target.classList[0]; // Obtém a classe do elemento clicado dentro do popupcad
  console.log(classnameofclickedelement); // Imprime a classe do elemento clicado no console
  const classnames = ["popup-close", "popup-total"]; // Array de classes que indicam que o popupcad deve ser fechado
  const closepopup = classnames.some(
    (classname) => classname === classnameofclickedelement
  ); // Verifica se a classe do elemento clicado está presente no array de classes
  if (closepopup) {
    popupcad.style.display = "none"; // Fecha o popupcad alterando o estilo de exibição para "none" (oculto)
  }
});

poprecarga.addEventListener("click", (event) => {
  // Adiciona um ouvinte de eventos de clique ao elemento "popup-recarga"
  const classnameofclickedelement = event.target.classList[0]; // Obtém a classe do elemento clicado dentro do poprecarga
  console.log(classnameofclickedelement); // Imprime a classe do elemento clicado no console
  const classnames = ["popup-close", "popup-recarga"]; // Array de classes que indicam que o poprecarga deve ser fechado
  const closepopup = classnames.some(
    (classname) => classname === classnameofclickedelement
  ); // Verifica se a classe do elemento clicado está presente no array de classes
  if (closepopup) {
    poprecarga.style.display = "none"; // Fecha o poprecarga alterando o estilo de exibição para "none" (oculto)
  }
});

popuphistorico.addEventListener("click", (event) => {
  // Adiciona um ouvinte de eventos de clique ao elemento "popup-recarga"
  const classnameofclickedelement = event.target.classList[0]; // Obtém a classe do elemento clicado dentro do poprecarga
  console.log(classnameofclickedelement); // Imprime a classe do elemento clicado no console
  const classnames = ["popup-close", "popuphistorico"]; // Array de classes que indicam que o poprecarga deve ser fechado
  const closepopup = classnames.some(
    (classname) => classname === classnameofclickedelement
  ); // Verifica se a classe do elemento clicado está presente no array de classes
  if (closepopup) {
    popuphistorico.style.display = "none"; // Fecha o poprecarga alterando o estilo de exibição para "none" (oculto)
  }
});
