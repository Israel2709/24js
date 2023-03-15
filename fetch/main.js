/*url: la dirección o el recurso al que nos queremos conectar (string)
init: objeto de configuración de la petición ( objeto)*/
//fetch(url, init)

const getKoders = async () => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/koders/.json"
  );
  let data = await response.json();
  return data;
};

const getProducts = async () => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/products/.json"
  );
  let data = await response.json();
  return data;
};

const printKoders = () => {
  getKoders().then((koders) => {
    document.write(JSON.stringify(koders));
  });
};

const printProducts = () => {
  getProducts().then((products) => {
    document.write(JSON.stringify(products));
  });
};

printProducts();
