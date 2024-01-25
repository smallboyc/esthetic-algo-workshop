const CANVAS_SIZE = 400;
const CELL_COUNT = 40;
const CELL_SIZE = CANVAS_SIZE / CELL_COUNT;
const BORDER = CELL_SIZE / 2;
const MARGIN = 5;

const COLORS = [
  "#668F80",
  "#BDE4A7",
  "#5941A9",
  "#C33149",
  "#E63B2E",
  "#361D2E",
  "#BFDBF7",
  "#F49F0A",
];
let isClicked = false;

function setup() {
  const canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  canvas.position(windowWidth / 2 - CANVAS_SIZE / 2, CANVAS_SIZE / 2);
  stroke(0);
  const density = document.getElementById("density");
  frameRate(0);
  const btn = document.querySelector("#toggle");
  const save = document.querySelector("#save");
  btn.addEventListener("click", () => {
    isClicked = !isClicked;
    if (isClicked) frameRate(4);
    else frameRate(0);
  });
  save.addEventListener("click", () => {
    saveGif("mySketch", 5);
  });
  strokeWeight(BORDER);
}

function draw() {
  background(235, 229, 211);

  const shapes = 5;
  for (let i = 0; i < shapes; i++) drawRect(0, 0, CELL_COUNT, CELL_COUNT, 6);
}

function drawRect(x, y, w, h, depth) {
  if (depth < 0) return;

  if (w < 1 || h < 1) {
    return;
  }

  if (depth > 0) {
    if (depth % 2 == 0) {
      let sub_size = int(random(1, w - 1));
      //Rectangle gauche
      drawRect(x, y, sub_size, h, depth - 1);
      //Rectangle droit
      drawRect(x + sub_size, y, w - sub_size, h, depth - 1);
    } else {
      let sub_size = int(random(1, h - 1));
      //Rectangle haut
      drawRect(x, y, w, sub_size, depth - 1);
      //Rectangle bas
      drawRect(x, y + sub_size, w, h - sub_size, depth - 1);
    }
  } else {
    if (
      x > MARGIN &&
      y > MARGIN &&
      x + w < CELL_COUNT - MARGIN &&
      y + h < CELL_COUNT - MARGIN
    ) {
      if (random(1) < density.value) {
        fill(random(COLORS));
        rect(x * CELL_SIZE, y * CELL_SIZE, w * CELL_SIZE, h * CELL_SIZE);
      }
    }
  }
}
