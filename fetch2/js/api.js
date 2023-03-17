const BASE_URL = "https://kodemia-24g-default-rtdb.firebaseio.com";
const COLLECTION = "koders";

export default {
  getKoders: async () => {
    let response = await fetch(`${BASE_URL}/${COLLECTION}/.json`);
    let data = await response.json();
    return data;
  },
  deleteKoder: async (koderKey) => {
    let response = await fetch(`${BASE_URL}/${COLLECTION}/${koderKey}/.json`, {
      method: "DELETE",
    });
    let data = await response.json();
    return data;
  },
};
