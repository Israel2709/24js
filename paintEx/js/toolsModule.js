const getPaint = (color) => {
  return `Tienes pintura color ${color}`;
};

const getBrush = (type) => {
  return `Tienes un pincel del tipo ${type}`;
};

const getTool = (type) => {
  return `Tienes una herramienta del tipo ${type}`;
};

const paintCanvas = (canvasId, color) => {
  let canvas = document.getElementById(canvasId);
  canvas.style.background = color;
};

export { getPaint, getBrush, getTool, paintCanvas };
