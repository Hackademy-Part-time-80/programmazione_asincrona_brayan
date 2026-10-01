const getData = async () => {
  const response = await fetch("data.json");
  const products = await response.json();
  return products;
}

export default getData;