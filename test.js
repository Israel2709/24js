let name = "Israel Salinas Martínez";

const initials = (str) => {
  const arraySplit = str.toUpperCase().split(" ");
  return arraySplit.reduce((total, current) => total + current.charAt(0), 0);
};

let test = initials(name);
console.log(test);
