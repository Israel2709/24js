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

/*
{
    name:"some value",
    lastname:"some value",
    email:"some value"
}
*/

let fields = document.querySelectorAll("#person-form input");
let personObject = {};

fields.forEach((field) => {
  field.addEventListener("keyup", (event) => {
    let property = event.target.name;
    let value = event.target.value;
    personObject[property] = value;
    console.log(personObject);
    document.getElementById("code-sample").innerText =
      JSON.stringify(personObject);
  });
});
