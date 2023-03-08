let student = {
  name: "Israel",
  lastName: "Salinas Martínez",
  age: 33,
};

const getObjectValue = (property) => {
  console.log(student[property]);
};

getObjectValue("name");
getObjectValue("lastName");
getObjectValue("score");

let date1 = new Date("09/27/2023").getTime();
let date2 = new Date("01/23/2023").getTime();
let currentDate = Date.now();

const compareDates = (firstDate, secondDate) => {
  console.log(firstDate, secondDate);
  let dateDiff = firstDate - secondDate;
  let dateDiffInMonths = Math.abs(dateDiff) / (1000 * 60 * 60 * 24 * 30.5);
  let daysComplement = dateDiffInMonths - Math.trunc(dateDiffInMonths);
  let days = Math.floor(daysComplement * 30.5);
  console.log(dateDiff);
  console.log(dateDiffInMonths);
  console.log(daysComplement);
  console.log(days);
  return dateDiff < 0
    ? `han pasado ${Math.floor(
        dateDiffInMonths
      )} Meses y ${days} días desde este cumpleaños`
    : `faltan ${Math.floor(
        dateDiffInMonths
      )} Meses y ${days} días para este cumpleaños`;
};

let result1 = compareDates(date1, currentDate);
let result2 = compareDates(date2, currentDate);
console.log(result1);
console.log(result2);

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

const getDifferenceInYears1 = (kodersArray) => {
  let yearsArray = kodersArray.map((koder) =>
    Number(new Date(koder.birthDate).getFullYear())
  );
  console.log(yearsArray);
  let sortedYears = yearsArray.sort((a, b) => a - b);
  return sortedYears[0] - sortedYears[sortedYears.length - 1];
};

const getDifferenceInYears2 = (kodersArray) => {
  let yearsArray = kodersArray.map((koder) =>
    Number(new Date(koder.birthDate).getFullYear())
  );
  console.log(yearsArray);
  return Math.max(...yearsArray) - Math.min(...yearsArray);
};

getDifferenceInYears1(koders);

getDifferenceInYears2(koders);
