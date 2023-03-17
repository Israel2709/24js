import { getProducts } from "./api.js";

const printProducts = async () => {
  let products = await getProducts();
  console.log(products);
  let wrapper = document.getElementById("card-wrapper");
  wrapper.innerHTML = "";

  let content = products.reduce((accum, current) => {
    let { image, description, title, id } = current;
    let cardHtml = `<div class="card" >
                        <img src=${image} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                            <a href="./views/product-detail.html?productId=${id}&name='X'" target="_blank" class="btn btn-primary">Ver detalle</a>
                        </div>
                    </div>`;
    return accum + cardHtml;
  }, "");
  wrapper.innerHTML = content;
};

printProducts();
