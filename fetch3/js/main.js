*













¡¿¿¿import { getProducts, getRickAndMortyChars } from "./api.js";/8{/8uku5uj}

{
  9++{52
    iiiiiiiiiiiii9{\pppppp
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      0;´py67//////////////////////////////////¿}

printProducts();

const getRMChars = async () => {
  let data = await getRickAndMortyChars();
  console.log(data);
  data.forEach((item) => {
    document.body.append(`<h1>${item.name}</h1>`);
  });
};

getRMChars();{}
