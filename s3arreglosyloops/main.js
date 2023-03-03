let numbers = [34, 12, 3, 8, 76];
let names = ["Israel", "Charles", "David"];
let text = "La mejor forma de predecir el futuro es creándolo";
let fullNames = [
  ["Israel", "Salinas"],
  ["Charles", "Silva"],
  ["David", "Moranchel"],
  ["Naomi", "López"],
  ["Rose", "Ortega"],
];

/*
    1.- Crear una función que reciba un array de números y devuelva la suma total de todos los números del array
    2.- Crear una función que reciba un array de strings y devuelva un nuevo array con los strings ordenados alfabéticamente
    3.- Crear una función que reciba un array de strings y devuelva un nuevo array con los strings invertidos
    4.- Crear una función que reciba un string y me devuelva la cantidad de palabras que existen en ese string
    5.- Crear una función que reciba una matriz de nombres y apellidos, y me devuelva un nuevo array con las iniciales de esos nombres
    input:
    [
        ["Israel", "Salinas"],
        ["Charles", "Silva"],
        ["David", "Moranchel"],
        ["Naomi", "López"],
        ["Rose", "Ortega"]
    ]
    output:
    [
        "I.S.",
        "C.S.",
        "D.M.",
        "N.L.",
        "R.O."
    ]
*/

const numberAddition = (numberList) => {
  let total = 0;
  for (let i = 0; i < numberList.length; i++) {
    let currentNumber = numberList[i];
    total += currentNumber;
  }
  return total;
};

let sumatoria1 = numberAddition([2, 8, 9, 6]);
console.log(sumatoria1);
let sumatoria2 = numberAddition(numbers);
console.log(sumatoria2);

const sortArray = (stringsArray) => stringsArray.sort();
let sortedArray = sortArray(names);
console.log(sortedArray);
