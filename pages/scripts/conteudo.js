// Seleciona o elemento com o id "mais"
var mais = document.querySelector("#mais");

// Seleciona o elemento com o id "menos"
var menos = document.querySelector("#menos");

// Seleciona o elemento com a classe "conteudo p"
const conteudo = document.querySelector(".conteudo p");

// Adiciona um ouvinte de evento de clique ao elemento "mais"
mais.addEventListener("click", function () {
  // Altera o estilo de exibição do elemento de conteúdo para "block"
  conteudo.style.display = "block";
  // Altera o estilo de exibição do elemento "mais" para "none" (oculto)
  mais.style.display = "none";
  // Altera o estilo de exibição do elemento "menos" para "inline" (exibido)
  menos.style.display = "inline";
});

// Adiciona um ouvinte de evento de clique ao elemento "menos"
menos.addEventListener("click", function () {
  // Altera o estilo de exibição do elemento de conteúdo para "none" (oculto)
  conteudo.style.display = "none";
  // Altera o estilo de exibição do elemento "mais" para "inline" (exibido)
  mais.style.display = "inline";
  // Altera o estilo de exibição do elemento "menos" para "none" (oculto)
  menos.style.display = "none";
});
