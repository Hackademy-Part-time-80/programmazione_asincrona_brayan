import getData from "./module.js";

const mainContainer = document.getElementById("mainContainer");
const btnGetProducts = document.getElementById("btnGetProducts");

btnGetProducts.addEventListener("click", async () => {
  generateLoading();
  destructProducts();

  const response = await getData();
  const products = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 1500);
  });

  generateProducts(products);

});


const destructLoading = () => {
  if (document.getElementById("loading")) {
    mainContainer.removeChild(document.getElementById("loading"));
  }
}

const generateLoading = () => {
  destructLoading();
  const divLoading = document.createElement("div");
  divLoading.id = "loading";
  divLoading.setAttribute("aria-busy", "true");
  divLoading.textContent = "Generando i prodotti...";
  mainContainer.appendChild(divLoading);
}



const generateProducts = (products) => {
  destructLoading();
  destructProducts();
  products.forEach(product => {
    const divProduct = document.createElement("article");

    const h2Product = document.createElement("h2");
    h2Product.textContent = product.title;
    divProduct.appendChild(h2Product);

    const imgProduct = document.createElement("img");
    imgProduct.src = product.image;
    imgProduct.alt = product.title;
    divProduct.appendChild(imgProduct);

    const pProduct = document.createElement("p");
    pProduct.textContent = product.description;
    divProduct.appendChild(pProduct);

    const spanProduct = document.createElement("span");
    spanProduct.textContent = '€ ' + product.price;
    spanProduct.style.fontWeight = 'bold';
    divProduct.appendChild(spanProduct);

    mainContainer.appendChild(divProduct);
  });
}

const destructProducts = () => {
  const cardProducts = document.querySelectorAll('article');
  cardProducts.forEach(card => {
    mainContainer.removeChild(card);
  });

}