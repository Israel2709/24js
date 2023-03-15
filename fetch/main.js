/*url: la dirección o el recurso al que nos queremos conectar (string)
init: objeto de configuración de la petición ( objeto)*/
//fetch(url, init)

const getKoders = async () => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/koders/.json"
  );
  let data = await response.json();
  return data;
};

const printKoders = async () => {
  let koders = await getKoders();
  console.log(koders);
  let kodersKeysArray = Object.keys(koders);
  kodersKeysArray.forEach((key) => {
    let { name } = koders[key];
    console.log(key);
    console.log(koders[key]);
    let heading = document.createElement("h1");
    heading.innerText = name;
    document.body.appendChild(heading);
  });
};

const deleteKoder = async (koderKey) => {
  let response = await fetch(
    `https://kodemia-24g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  return data;
};

const createKoder = async (koderObject) => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/koders/.json",
    {
      method: "POST",
      body: JSON.stringify(koderObject),
    }
  );
  let data = await response.json();
  console.log(data);
  return data;
};

printKoders();

const createFromForm = () => {
  createKoder({ name: "x" });
};

const deleteFromButton = () => {
  deleteKoder("koder1");
};

document.getElementById("delete").addEventListener("click", () => {
  deleteFromButton();
});
