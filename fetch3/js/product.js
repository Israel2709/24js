import { getProductById } from "./api.js";

console.log(window.location);
console.log(window.location.search);
let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("productId");
console.log(productId);

const getSelectedProduct = async () => {
  let productData = await getProductById(productId);
  let { title, description, image } = productData;
  document.getElementById("detail-image").setAttribute("src", image);
  document.getElementById("detail-title").innerText = title;
  document.getElementById("detail-description").textContent = description;
};

getSelectedProduct();
