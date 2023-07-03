// Definição da lista de produtos com seus detalhes
var products = [
  {
    name: "Gosverni Xernou 9 Pro",
    category: "smartphones",
    price: 999.99,
    image: "images/produtos/gosverni.png",
  },
  {
    name: "Iphone 14 PRO MAX",
    category: "smartphones",
    price: 799.99,
    image: "images/produtos/iphone.png",
  },
  {
    name: "Samsung Galaxy Z Folder 4",
    category: "smartphones",
    price: 1299.99,
    image: "images/produtos/samsung.png",
  },
  {
    name: "Playstation 5",
    category: "consoles",
    price: 1999.99,
    image: "images/produtos/ps51.png",
  },
  {
    name: "X Box Series X",
    category: "consoles",
    price: 2999.99,
    image: "images/produtos/xbox.png",
  },
  {
    name: "Notebook Alienware",
    category: "computadores",
    price: 2999.99,
    image: "images/produtos/alienware.png",
  },
  {
    name: "PC Gamer",
    category: "computadores",
    price: 3999.99,
    image: "images/produtos/pcgamer.png",
  },
  {
    name: "Headset Astro A50",
    category: "acessorios",
    price: 49.99,
    image: "images/produtos/headset.png",
  },
  {
    name: "Nike Air Max Plus",
    category: "acessorios",
    price: 29.99,
    image: "images/produtos/nike.png",
  },
];

// Função para exibir os produtos com base na categoria fornecida
function showProducts(category) {
  // Obtém o contêiner de produtos na página HTML
  var productContainer = document.getElementById("product-list");
  // Limpa o conteúdo atual do contêiner
  productContainer.innerHTML = "";

  // Variável para armazenar os produtos filtrados
  var filteredProducts = [];

  // Verifica se a categoria é "all" (todos os produtos)
  if (category === "all") {
    // Se for, exibe todos os produtos
    filteredProducts = products;
  } else {
    // Caso contrário, filtra os produtos com base na categoria fornecida
    filteredProducts = products.filter(function (product) {
      return product.category === category;
    });
  }

  // Loop pelos produtos filtrados
  filteredProducts.forEach(function (product) {
    // Cria um elemento de produto
    var productElement = document.createElement("div");
    productElement.classList.add("product");

    // Cria um elemento de link para a página do produto
    var linkElement = document.createElement("a");
    linkElement.href = "gosverni.html";

    // Cria um elemento de imagem do produto
    var imageElement = document.createElement("img");
    imageElement.src = product.image;
    linkElement.appendChild(imageElement);
    productElement.appendChild(linkElement);

    // Cria um elemento de nome do produto
    var nameElement = document.createElement("div");
    nameElement.classList.add("product-name");
    nameElement.textContent = product.name;
    productElement.appendChild(nameElement);

    // Cria um elemento de preço do produto
    var priceElement = document.createElement("div");
    priceElement.classList.add("product-price");
    priceElement.textContent = "R$ " + product.price.toFixed(2);
    productElement.appendChild(priceElement);

    // Adiciona o elemento do produto ao contêiner
    productContainer.appendChild(productElement);
  });
}

// Chama a função showProducts com a categoria "all" para exibir todos os produtos inicialmente
showProducts("all");
