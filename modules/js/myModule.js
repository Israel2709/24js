const text = "hello";

const useUpperCase = (someText) => someText.toUpperCase();

const createCard = (title) => {
  let card = document.createElement("div");
  card.classList.add("card", "p-3");

  let heading = document.createElement("h2");
  heading.innerText = title;

  card.append(heading);
  return card;
};

export { text, useUpperCase, createCard };
