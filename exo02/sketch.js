function setup() {
  createCanvas(1000, 1000);
  background(255);
  noStroke();
  frameRate(1);
  selectPalette();
}

const palette = new Array(12);

//Palette fixe (peut être remplacée par "palette" à la ligne 46)
// const fixedPalette = [
//   "#00120B",
//   "#011B11",
//   "#6B818C",
//   "#31E981",
//   "#05160F",
//   "#E49AB0",
//   "#FFB700",
//   "#66757D",
//   "#439165",
//   "#000000",
//   "#515B60",
// ];

//Fonction qui remplie un tableau (palette) avec 12 couleurs aléatoires.
function selectPalette() {
  const range = 255;
  for (let i = 0; i < 12; i++) {
    //on peut ajuster l'intervalle pour cibler l'importance de certaines composantes.
    let r = random(30, range - 10);
    let v = random(78, range);
    let b = random(89, range - 23);
    let a = random(0, range);
    palette[i] = color(r, v, b, a);
  }
}

//Fonction qui gènère une grille de 10x10 cases, centrée sur le canvas.
function newGrid() {
  let n = 50;
  const scale = 10;
  const margin = (width - n * scale) / 2;
  for (let i = 0; i < scale; i++)
    for (let j = 0; j < scale; j++) {
      let color = random(palette); //remplacez "palette" par "fixedPalette" pour des couleurs non aléatoires.
      fill(color);
      square(margin + n * i, margin + n * j, n);
    }
}

function draw() {
  newGrid();
}
