let personObject = {
  name: "",
  lastname: "",
  email: "",
};
let peopleArray = [
  {
    name: "Israel",
    lastname: "Salinas Martínez",
    email: "israel@kodemia.mx",
  },
];

document.querySelectorAll("#person-form input").forEach((element) => {
  element.addEventListener("keyup", (event) => {
    event.target.classList.remove("is-invalid");
    let property = event.target.name;
    let value = event.target.value;
    console.log(property, value);
    personObject[property] = value;
    console.log(personObject);
  });
});

const resetForm = () => {
  document
    .querySelectorAll("#person-form input")
    .forEach((element) => (element.value = ""));
};

document.getElementById("save-person").addEventListener("click", () => {
  let errors = 0;
  for (key in personObject) {
    console.log(key);
    console.log(personObject[key]);
    let property = key;
    let value = personObject[property];
    console.log(value);
    if (!value) {
      document
        .querySelector(`input[name='${property}']`)
        .classList.add("is-invalid");
      console.log("error");
      errors++;
    }
  }
  errors
    ? alert("Errores en el form")
    : (peopleArray.push(personObject),
      fillTable(peopleArray, "person-table"),
      resetForm());
});

const emptyTable = (tableId) => {
  document.querySelectorAll(`#${tableId} tr`).forEach((row) => row.remove());
};

const fillTable = (data, tableId) => {
  let table = document.getElementById(tableId);
  emptyTable(tableId);
  data.forEach((item, index) => {
    let { name, lastname, email } = item;

    let personRow = document.createElement("tr");

    let nameTd = document.createElement("td");
    let lastnameTd = document.createElement("td");
    let emailTd = document.createElement("td");
    let buttonTd = document.createElement("td");

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", () => {
      console.log(index);
      data.splice(index, 1);
      fillTable(data, tableId);
    });

    let nameText = document.createTextNode(name);
    let lastnameText = document.createTextNode(lastname);
    let emailText = document.createTextNode(email);
    let buttonText = document.createTextNode("Borrar");

    nameTd.appendChild(nameText);
    lastnameTd.appendChild(lastnameText);
    emailTd.appendChild(emailText);
    deleteButton.appendChild(buttonText);

    buttonTd.appendChild(deleteButton);

    personRow.append(nameTd, lastnameTd, emailTd, buttonTd);
    table.appendChild(personRow);
  });
};

fillTable(peopleArray, "person-table");
