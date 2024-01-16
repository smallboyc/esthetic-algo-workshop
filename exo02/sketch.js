function setup() {
  createCanvas(1000, 1000);
  background(255);
  noStroke();
  frameRate(0.5);
  // selectPalette();
}

// const palette = new Array(12);

const fixedPalette = [
  "#00120B",
  "#011B11",
  "#6B818C",
  "#31E981",
  "#05160F",
  "#E49AB0",
  "#FFB700",
  "#66757D",
  "#439165",
  "#000000",
  "#515B60",
];

function selectPalette() {
  const range = 255;
  for (let i = 0; i < 12; i++) {
    let r = random(0, range);
    let v = random(0, range);
    let b = random(0, range);
    let a = random(0, range);
    palette[i] = color(r, v, b, a);
  }
}

function newGrid() {
  let n = 50;
  const scale = 10;
  const gap = (width - n * scale) / 2;
  for (let i = 0; i < scale; i++)
    for (let j = 0; j < scale; j++) {
      let color = random(fixedPalette);
      fill(color);
      square(gap + n * i, gap + n * j, n);
    }
}

function draw() {
  newGrid();
}
