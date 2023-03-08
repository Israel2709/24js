/*Métodos para crear elementos en JavaScript*/

let paragraph = document.createElement("p");
let div = document.createElement("div");
let h1 = document.createElement("h1");

let paragraphContent = document.createTextNode("Hola Koders!!!");
console.log(paragraph);
console.log(paragraphContent);

paragraph.appendChild(paragraphContent);

document.body.appendChild(paragraph);

console.log(paragraph);

console.log(div);
console.log(h1);

let koders = [
  {
    name: "Isra",
    birthDate: "09/27/1989",
  },
  {
    name: "Rodolfo",
    birthDate: "11/27/1998",
  },
  {
    name: "Kim",
    birthDate: "11/15/1996",
  },
  {
    name: "Iyari",
    birthDate: "09/26/1997",
  },
  {
    name: "Manu",
    birthDate: "11/21/1986",
  },
  {
    name: "Antonio",
    birthDate: "07/23/1993",
  },
  {
    name: "Rafa",
    birthDate: "03/11/1997",
  },
  {
    name: "Eddie",
    birthDate: "11/05/1997",
  },
  {
    name: "Jesús",
    birthDate: "11/04/2000",
  },
  {
    name: "Mar",
    birthDate: "12/18/1994",
  },
  {
    name: "Roberto",
    birthDate: "01/14/1985",
  },
  {
    name: "Javi",
    birthDate: "12/07/1993",
  },
  {
    name: "Mario",
    birthDate: "11/02/1999",
  },
];

/*
Recorrer la lista de koders
por cada koder, crear un elemento li
crear un nodo de texto que contenga el nombre del koder
agregar el nodo de texto al elemento li creado 
agregar el elemento li a la lista (ul) correspondiente
*/

const createKodersList = (kodersArray) => {
  let kodersList = document.getElementById("koders-list");
  kodersList.innerHTML = "lasjdfñlakjsdkasd";
  kodersArray.forEach((koder) => {
    let { name } = koder;
    let koderLi = document.createElement("li");
    let koderText = document.createTextNode(name);
    koderLi.appendChild(koderText);
    console.log(koderLi);

    kodersList.appendChild(koderLi);
  });
};

createKodersList(koders);

const addKoder = (koder) => {
  koders.push(koder);
  console.log(koders);
  createKodersList(koders);
};

/*
document.createElement(tagname) => crea un elemento de html con el tagname que indique en el argumento
document.createTextNode(text) => crea un nodo de texto con el contenido indicado en el argumento
element.appendChild(child) => inserta un elemento (child) a un elemento padre( element )
document.getElementById(id) => selecciona el elemento de DOM cuyo id coincida con el id que se use de arugmento, devuelve un elemento de DOM
document.getElementsByClassName(classname) => selecciona todos los elementos de DOM que incluyan "classname" en su lista de clases, devuelve una HTMLCollection
document.querySelector(cssSelector) => selecciona el primer elemento que coincida con el selector de CSS proporcionado, devuelve un elemento
document.querySelectorAll(cssSelector) => selecciona todos los elementos que coincidan con el selector, devuelve una NodeList
*/
