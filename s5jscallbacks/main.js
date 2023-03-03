let carsArray = [
  {
    name: "Toledo",
    branch: "Seat",
    year: "2017",
    hp: 125,
    price: 300000,
    presentation: () => {
      console.log("Seat Toledo por tan sólo $300,000 MXN!!!");
    },
  },
  {
    name: "Chevy",
    branch: "Chevrolet",
    year: "2010",
    hp: 125,
    price: 90000,
    presentation: () => {
      console.log("super chevy!!!");
    },
  },
];

carsArray.forEach(({ presentation }) => presentation());

const calculateMonthlyPayment = (car, index, arr, months) => {
  let { branch, name, price } = car;
  console.log(
    `Los pagos mensuales de ${branch} ${name} serían de ${price / months}`
  );
};

const getMonthlyPayments = (months) => {
  carsArray.forEach((item, index, array) => {
    calculateMonthlyPayment(item, months);
  });
};

getMonthlyPayments(6);
