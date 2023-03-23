const printShoppingCart = () => {
  let data = JSON.parse(localStorage.getItem("cartList"));
  data.forEach((item) => {
    document.body.append(item.name);
  });
};

printShoppingCart();
