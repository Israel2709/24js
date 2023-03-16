import { text } from "./myModule.js";
//import api from "./api.js";
import { obtenerKoders } from "./namedapi.js";

const testApi = async () => {
  let koders = await obtenerKoders();
  console.log(koders);
};

testApi();
