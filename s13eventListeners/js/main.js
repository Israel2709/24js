/*sujeto,condición,acción*/
let element = document.querySelector("#my-button");

element.addEventListener("click", () => {
  console.log("hola koders!");
});

let firstInput = document.getElementById("first-input");

firstInput.addEventListener("keyup", (event) => {
  let text = event.target.value;
  let title = document.querySelector("#title");
  title.innerText = text;
});

let checkbox = document.querySelectorAll("#checkbox-wrapper input");

checkbox.forEach((element) => {
  element.addEventListener("change", () => {
    console.log("cambiando");
  });
});
