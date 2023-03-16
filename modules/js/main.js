import { createCard, text, useUpperCase } from "./myModule.js";
import api from "./api.js";
console.log(text);
console.log(useUpperCase("Israel"));
api.getKoders();
document.body.append(createCard("creada desde módulo"));
