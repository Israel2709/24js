//array.forEach( (item, index, arr) => console.log(item))

/*let fullNames = [
    ["Charles", "Silva"],
    ["Naomi", "López"],
    ["Rose", "Ortega"]
]*/

/*devolver un nuevo array con los nombres completos en un sólo string
  [
    "Charles Silva"
    ....
  ]
*/
/*
const createNames = (namesArray) => {
    let nombre = namesArray[0][0]
    let apellido = namesArray[0][1]
}*/

let numbers = [13, 5, 2, 6, 8, 9];

/*crear una función que me diga número por número si el número es par o es non*/

const damaris = (array) => {
  array.forEach((item) => item % 2 === 0);
};
damaris(numbers);

const moi = (array) => {
  array.forEach((item) => {
    return item % 2 === 0 ? "el número es par" : "el número no es par";
  });
};

moi(numbers);

const rodo = (array) => {
  array.forEach((item) => {
    item % 2 === 0
      ? console.log(`El número ${item} es par`)
      : console.log(`El número ${item} no es par`);
  });
};

rodo(numbers);

let songs = ["Heaven Can Wait", "Run to the hills", "The clairvoyant"];

/*Por cada canción, indicar la cantidad de palabras y de caracteres que tiene el nombre de la canción*/

/*
tomamos cada elemento 
lo separamos por palabras
contamos cada item
regresamos a consola el resultado de las palabras
*/

const javi = (array) => {
  array.forEach((item) => {
    console.log(item.split(" ").length);
  });
};

javi(songs);

/*
tomamos cada elemento del array
contamos los caracteres de cada elmento del array
guardamos ese dato en una variable
separamos cada item con base en los espacios
contamos las palabras que tiene cada elemento 
guardamos ese dato en una variable
imprimimos en consola el número de palabras y el número de caracteres
*/

const manu = (array) => {
  array.forEach((item) => {
    let charCount = item.length;
    let wordCount = item.split(" ").length;
    console.log(
      `El nombre de la canción ${item} tiene ${charCount} caracteres y ${wordCount} palabras`
    );
  });
};

manu(songs);

let average = 15;
let scores = [16, 7, 12, 18, 23, 12, 6, 15];

/*Para cada puntuación, necesito saber si esta por debajo del promedio o si esta por encima del promedio, y a cuántos puntos de distancia esta del promedio*/

/*
  recoremos los scores
  preguntamos si el score actual es menor que el promedio
  si no, preguntamos si esta encima del promedio
  a cada número le restamos el promedio
  el resultado lo guardamos en una variable
*/

const rafa = (array) => [
  array.forEach((item) => {
    let result;
    if (item < average) {
      result = average - item;
      console.log(
        `El número ${item} es menor que el promedio por ${result} puntos`
      );
    } else if (item > average) {
      result = item - average;
      console.log(
        `El número ${item} es mayor que el promedio por ${result} puntos`
      );
    } else {
      console.log(`El número ${item} es igual que el promedio`);
    }
  }),
];

const otherFunction = (array) => {
  array.forEach((item) => {
    let result = item - average;
    if (result !== 0 && result < 0) {
      console.log(
        `el número ${item} esta por debajo del promedio por ${Math.abs(
          result
        )} puntos`
      );
    } else if (result !== 0 && result > 0) {
      console.log(
        `el número ${item} esta por encima del promedio por ${Math.abs(
          result
        )} puntos`
      );
    } else {
      console.log(`el número ${item} es igual al promedio`);
    }
  });
};

otherFunction(scores);

let savings = 400;
let products = [
  {
    name: "Producto 1",
    category: "Cloths",
    price: 600,
    discount: 20,
  },
  {
    name: "Producto 2",
    category: "food",
    price: 300,
    discount: 15,
  },
  {
    name: "Producto 3",
    category: "Cloths",
    price: 785,
    discount: 10,
  },
  {
    name: "Producto 2",
    category: "food",
    price: 300,
    discount: 15,
  },
];

let productsByCategory = {
  food: [{}],
  cloths: [],
};

/*Necesito saber para cada producto, cúal será el precio final
"el ${producto} tiene un precio original de {precio} y un precio final de {preciofinal}"
*/

/*
recorrer el array de objetos
destructurar el objeto para extraer name, price y discount
imprimir el nombre del item actual, tiene un precio de (price), y un precio final de (price - (price * (discount/100))
*/

const hector = (array) => {
  array.forEach((product) => {
    let { name, price, discount } = product;
    console.log(
      `El producto ${name} tiene un precio de ${price} y un precio final de ${
        price - price * (discount / 100)
      }`
    );
  });
};

hector(products);

/*Necesito saber si con mis ahorros me alcanza para cada producto, si me alcanza, necesito saber cuánto me sobraría y si no necesito saber cuánto me faltaría*/

/*
  recorrer el array
  extraer el precio, discount, name
  comparar el precio con mis ahorros
  si mis ahorros son iguales o mayores que el precio del objeto imprimimos el mensaje que dice que sí alcanza 
  si el valor de ahorros es menor imprimir el mensaje de que no alcanza
  en el caso de que si me alcance restamos savings - price y ese resultado lo guardamos en una variable y la inseramos en el mensaje
  en el caso opuesto, restamos price - savings y el resultado lo guardamos en otra variable y la insertamos en el mensaje
*/

const antonio = (array) => {
  array.forEach((item) => {
    let { price, name, discount } = item;
    let finalPrice = price - price * (discount / 100);
    let result = savings - finalPrice;
    result < 0
      ? console.log(
          `No te alcanza para el ${name}, te faltan ${Math.abs(result)}`
        )
      : console.log(
          `Si te alcanza para el ${name}, te sobrarían ${Math.abs(result)}`
        );
  });
};

antonio(products);
/*ahora necesitamos saber el promedio de distancia, y de combustible consumido si realizaramos todos los viajes*/
let travels = [
  {
    averageSpeed: 100 /*km/h*/,
    distance: 62139 /*km*/,
    consumedFuel: 857 /*l*/,
    tag: "Viaje 1",
  },
  {
    averageSpeed: 84,
    distance: 45485,
    consumedFuel: 1400,
    tag: "Viaje 2",
  },
  {
    averageSpeed: 75,
    distance: 94887,
    consumedFuel: 986,
    tag: "Viaje 3",
  },
];

/*Necesito saber para cada viaje, cuánto tiempo me tomaría realizarlo*/
/*
Recorremos el array
deconstruimos cada objeto del array para obtener {averageSpeed, distancia, tag}
imprimir "el viaje {tag} tomaría un tiempo de { distancia / averageSpeed}"
*/

const iyari = (array) => {
  array.forEach((travel) => {
    let { averageSpeed, distance, tag } = travel;
    console.log(
      `El viaje ${tag} tomaría un tiempo de ${distance / averageSpeed} hrs`
    );
  });
};

iyari(travels);

/*
  recibimos el array
  iteramos en el array
  extraemos las distancias y el combustible
  sumar las distancias y guardar el resultado en una variable
  sumar los combustibles y guardarlos en una variable
  calcular el promedio de ambos datos ( distancia, combustibles)
  al final imprimir las dos variables
*/

const kim = (array) => {
  let totalDistance = 0;
  let totalFuel = 0;
  array.forEach((item) => {
    let { distance, consumedFuel } = item;
    totalDistance += distance;
    totalFuel += consumedFuel;
  });
  console.log(
    `La distancia promedio de todos los viajes es de ${
      totalDistance / array.length
    }km, y el consumo promedio de combustible es de ${
      totalFuel / array.length
    } litros`
  );
};

kim(travels);

let phrases = [
  {
    phrase: "Yo solo sé que no sé nada.",
    author: "Sócrates",
  },
  {
    phrase: "Hagas lo que hagas, hazlo bien.",
    author: "Abraham Lincoln",
  },
  {
    phrase: "El arte de vencer se aprende en las derrotas.",
    author: "Simón Bolívar",
  },
];

/*
  [
    "Hagas Lo Que Hagas, Hazlo Bien. - Abraham Lincoln",
    "Hagas Lo Que Hagas, Hazlo Bien. - Abraham Lincoln",
  ]
*/

/*
  creamos función que reciba el array
  recorremos el array
  de cada elemento destructuramos {phrase, author}
  tomamos la frase, la dividimos en palabras, y a cada palabra le cambiamos la primer letra a mayúscula y volvemos a juntar el string
  tomamos el autor, lo dividimos en palabras, y a cada palabra le cambiamos la primer letra a mayúscula y volvemos a jutnar el string
  creamos un nuevo array
  concatenamos la frase con el autor
  metemos el resultado al array nuevo
  retornamos el nuevo array
*/

const capitalizeString = (str, arrayToPush) => {
  let capitalized = `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  arrayToPush.push(capitalized);
};

const mario = (array) => {
  let resultArray = [];
  array.forEach((item) => {
    let { phrase, author } = item;
    let phraseWords = phrase.split(" ");
    let authorWords = author.split(" ");
    let capitalizedWords = [];
    let capitalizedAuthorNames = [];
    phraseWords.forEach((word) => {
      capitalizeString(word, capitalizedWords);
    });
    authorWords.forEach((word) => {
      capitalizeString(word, capitalizedAuthorNames);
    });

    let capitalizedPhrase = capitalizedWords.join(" ");
    let capitalizedAuthor = capitalizedAuthorNames.join(" ");

    resultArray.push(`${capitalizedPhrase} - ${capitalizedAuthor}`);
  });
  return resultArray;
};

let marioResult = mario(phrases);
console.log(marioResult);
