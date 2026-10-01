const getProducts = async () => {
  const response = await fetch("prodotti.json");
  const products = await response.json();
  return products;
}

export default getProducts;