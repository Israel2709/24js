const getProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  return data;
};

const getProductById = async (id) => {
  let response = await fetch(`https://fakestoreapi.com/products/${id}`);
  let data = await response.json();
  return data;
};

export { getProducts, getProductById };
