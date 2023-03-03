let text = "este es un texto con muchas palabras de mucha longitud";

const getLongestWords = (textToEvaluate) => {
  let textToArray = textToEvaluate.split(" ");
  let longestWord = "";
  let longestWordsArray = [];
  for (let i = 0; i < textToArray.length; i++) {
    if (textToArray[i].length > longestWord.length) {
      longestWord = textToArray[i];
    }
  }
  console.log(longestWord.length);
  let largestLength = longestWord.length;

  for (let i = 0; i < textToArray.length; i++) {
    textToArray[i].length === largestLength
      ? longestWordsArray.push(textToArray[i])
      : null;
  }

  return longestWordsArray.length > 1
    ? `Las palabras más largas de este texto son: ${longestWordsArray.join()}`
    : `La palabra más larga de este texto es ${longestWordsArray[0]}`;
};

let result = getLongestWords(text);
console.log(result);

const solution2 = (textToEvaluate) => {
  let order = textToEvaluate.split(" ").sort((a, b) => b.length - a.length);
  console.log(order);
  let longestWordsArray = [];
  let largestLength = order[0].length;
  for (let i = 0; i < order.length; i++) {
    order[i].length === largestLength ? longestWordsArray.push(order[i]) : null;
  }

  return longestWordsArray.length > 1
    ? `Las palabras más largas de este texto son: ${longestWordsArray.join()}`
    : `La palabra más larga de este texto es ${longestWordsArray[0]}`;
};

let result2 = solution2(text);
console.log(result2);

const test1 = (arg1, arg2) => {
  //arg1length = arg1.length
  //arg1 = 30, arg2 = 20
  return !arg1 > arg2;
};
