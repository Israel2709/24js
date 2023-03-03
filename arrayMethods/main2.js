/*let fullNames = [
  ["Israel", "Salinas"],
  ["Charles", "Silva"],
];

let mentors = [
  {
    name: "Israel",
    lastName: "Salinas",
    id: 0001,
  },
  {
    name: "Charles",
    lastName: "Silva",
    id: 0002,
  },
];

const convertArray = (originalArray) => {
  let resultArray = [];
  originalArray.forEach((item) => {
    let mentorObject = {};
    mentorObject.name = item[0];
    mentorObject.lastName = item[1];
    resultArray.push(mentorObject);
  });
  return resultArray;
};

let result1 = convertArray(fullNames);
console.log(result1);

let result2 = fullNames.map((item) => ({ name: item[0], lastName: item[1] }));
console.log(result2);

let result3 = fullNames.reduce(
  (accum, current) => [...accum, { name: current[0], lastName: current[1] }],
  []
);
console.log(result3);

const findMentorById = (id, array) => {
  let result = array.find((item) => item.id === id);
  return result;
};

let mentor1 = findMentorById(0001, mentors);
console.log(mentor1);*/

let numbers = [1, 2, 3, 4, 5];

/*Quiero un nuevo array que contenga cada uno de los números del array original multiplicado por sí mismo*/

const getSquares = (orginalArray) => {
  let result = orginalArray.map((item) => item * item);
  return result;
};

let squaresResult = getSquares(numbers);
console.log(squaresResult);

/*Quiero un nuevo array que contenga únicamente los números pares*/

let getEvens = (orginalArray) => {
  let result = orginalArray.filter((item) => item % 2 === 0);
  return result;
};

let evensResult = getEvens(numbers);
console.log(evensResult);

/*Quiero la sumatoria de todos los números contenidos en el array <original></original>*/
const getTotal = (orginalArray) => {
  let result = orginalArray.reduce((accum, current) => {
    return accum + current;
  }, 0);
  return result;
};

let totalResult = getTotal(numbers);
console.log(totalResult);

/*Quiero encontrar el primer número que sea divisible entre 5*/
let findAnumber = (orginalArray) => {
  let result = orginalArray.find((item) => item % 5 === 0);
  return result;
};

let findResult = findAnumber(numbers);

console.log(findResult);

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

const getDistanceAverage = (array) => {
  let result =
    array.reduce((accum, current) => accum + current.distance, 0) /
    array.length;
  return result;
};

let distanceAverage = getDistanceAverage(travels);
console.log(distanceAverage);
