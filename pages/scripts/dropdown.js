var products = [
    { name: "Produto 1", category: "smartphones", price: 999.99, image: "product1.jpg" },
    { name: "Produto 2", category: "smartphones", price: 799.99, image: "product2.jpg" },
    { name: "Produto 3", category: "smartphones", price: 1299.99, image: "product8.jpg" },
    { name: "Produto 4", category: "consoles", price: 1999.99, image: "product3.jpg" },
    { name: "Produto 5", category: "consoles", price: 2999.99, image: "product4.jpg" },
    { name: "Produto 6", category: "computadores", price: 2999.99, image: "product5.jpg" },
    { name: "Produto 7", category: "computadores", price: 3999.99, image: "product6.jpg" },
    { name: "Produto 8", category: "acessorios", price: 49.99, image: "product7.jpg" },
    { name: "Produto 9", category: "acessorios", price: 29.99, image: "product8.jpg" }
  ];
  
  function showProducts(category) {
    var productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";
  
    var filteredProducts = [];
  
    if (category === "all") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(function(product) {
        return product.category === category;
      });
    }
  
    filteredProducts.forEach(function(product) {
      var productElement = document.createElement("div");
      productElement.classList.add("product");
  
      var imageElement = document.createElement("img");
      imageElement.src = product.image;
      productElement.appendChild(imageElement);
  
      var nameElement = document.createElement("div");
      nameElement.classList.add("product-name");
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);
  
      var priceElement = document.createElement("div");
      priceElement.classList.add("product-price");
      priceElement.textContent = "R$ " + product.price.toFixed(2);
      productElement.appendChild(priceElement);
  
      productContainer.appendChild(productElement);
    });
  }
  
  showProducts("all"); // Exibe todos os produtos inicialmente
  