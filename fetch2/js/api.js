export default {
  getKoders: async () => {
    let response = await fetch(
      "https://kodemia-24g-default-rtdb.firebaseio.com/koders/.json"
    );
    let data = await response.json();
    return data;
  },
  deleteKoder: async (koderKey) => {
    let response = await fetch(
      `https://kodemia-24g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    return data;
  },
};
