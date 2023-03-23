const isLogged = () => {
  let token = localStorage.getItem("token");
  token
    ? window.open("./views/home.html", "_self")
    : window.open("./views/login-form.html", "_self");
};

isLogged();

let shoppingCart = [
  {
    name: "uno",
    price: 1,
  },
  {
    name: "dos",
    price: 2,
  },
  {
    name: "tres",
    price: 3,
  },
];

const storeShoppingCart = (cart) => {
  localStorage.setItem("cartList", JSON.stringify(cart));
};

storeShoppingCart(shoppingCart);
