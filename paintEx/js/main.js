import { getPaint, getBrush, getTool, paintCanvas } from "./toolsModule.js";

document.getElementById("paint-btn").addEventListener("click", () => {
  paintCanvas("test-canvas", "peru");
});

let firstLayer = getPaint("Rojo");
let secondLayer = getPaint("Verde");

console.log(firstLayer);
console.log(secondLayer);
