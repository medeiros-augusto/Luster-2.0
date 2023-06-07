var products = [
    { name: "Gosverni Xernou 9 Pro", category: "smartphones", price: 999.99, image: "images/produtos/gosverni.png" },
    { name: "Iphone 14 PRO MAX", category: "smartphones", price: 799.99, image: "images/produtos/iphone.png" },
    { name: "Samsung Galaxy Z Folder 4", category: "smartphones", price: 1299.99, image: "images/produtos/samsung.png" },
    { name: "Playstation 5", category: "consoles", price: 1999.99, image: "images/produtos/ps51.png" },
    { name: "X Box Series X", category: "consoles", price: 2999.99, image: "images/produtos/xbox.png" },
    { name: "Notebook Alienware", category: "computadores", price: 2999.99, image: "images/produtos/alienware.png" },
    { name: "PC Gamer", category: "computadores", price: 3999.99, image: "images/produtos/pcgamer.png" },
    { name: "Headset Astro A50", category: "acessorios", price: 49.99, image: "images/produtos/headset.png" },
    { name: "Nike Air Max Plus", category: "acessorios", price: 29.99, image: "images/produtos/nike.png" }
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

        var linkElement = document.createElement("a");
        linkElement.href = "gosverni.html";

        var imageElement = document.createElement("img");
        imageElement.src = product.image;
        linkElement.appendChild(imageElement);
        productElement.appendChild(linkElement);

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

showProducts("all");