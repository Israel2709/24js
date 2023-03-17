import { text } from "./myModule.js";
//import api from "./api.js";
import { obtenerKoders, addTestObject } from "./namedapi.js";
import { createCard } from "./createDom.js";

const testApi = async () => {
  let koders = await obtenerKoders();
  console.log(koders);
};

let data = [
  {
    titleText: "titulo 1",
    pText: "contenido 1",
    imgSrc: "https://picsum.photos/id/237/200/300",
    btnText: "Click Me",
    link: "https://picsum.photos/",
  },
  {
    titleText: "titulo 2",
    pText: "contenido 2",
    imgSrc: "https://picsum.photos/id/236/200/300",
    btnText: "Click Me",
    link: "https://picsum.photos/",
  },
  {
    titleText: "titulo 3",
    pText: "contenido 3",
    imgSrc: "https://picsum.photos/id/235/200/300",
    btnText: "Click Me",
    link: "https://picsum.photos/",
  },
];

const printCards = () => {
  let wrapper = document.getElementById("card-wrapper");
  data.forEach((item) => {
    let { imgSrc, titleText, pText, btnText, link } = item;
    let col = document.createElement("div");
    col.classList.add("col");
    col.appendChild(
      createCard(imgSrc, titleText, pText, btnText, link, addTestObject)
    );
    wrapper.append(col);
  });
};

testApi();
printCards();
