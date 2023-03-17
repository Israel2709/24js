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

const getKoders = async () => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/koders/.json"
  );
  let data = await response.json();
  return data;
};

const addTestObject = async (objectData) => {
  let response = await fetch(
    `https://kodemia-24g-default-rtdb.firebaseio.com/cardTest/.json`,
    {
      method: "POST",
      body: JSON.stringify(objectData),
    }
  );
  let data = await response.json();
  return data;
};

export { deleteKoder, getKoders as obtenerKoders, addTestObject };
