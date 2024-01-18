const borderPx = 6;
const margin = 20;
let isClicked = false;

function setup() {
  createCanvas(400, 400);
  stroke(0);
  frameRate(0);
  const btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    isClicked = !isClicked;
    if (isClicked) frameRate(10);
    else frameRate(0);
  });
  strokeWeight(borderPx);
}

function draw() {
  background(255);
  drawRect(margin, margin, width - margin * 2, height - margin * 2, 6);
  // linkPixels();
}

function linkPixels() {
  for (let i = margin; i < width - margin * 2; i++) {
    for (let j = margin; j < height - margin * 2; j++) {
      const colorLeft = get(i - borderPx, j);
      const colorRight = get(i + borderPx, j);
      if (
        JSON.stringify(get(i, j)) == JSON.stringify([0, 0, 0, 255]) &&
        JSON.stringify(colorLeft) == JSON.stringify(colorRight) &&
        JSON.stringify(colorLeft) != JSON.stringify([0, 0, 0, 255]) &&
        JSON.stringify(colorRight) != JSON.stringify([0, 0, 0, 255])
      ) {
        set(i, j, colorLeft);
        updatePixels();
      }
    }
  }
}

function drawRect(x, y, w, h, depth) {
  if (depth > 0) {
    let ratio = random(0.3, 0.8);
    if (depth % 2 == 0) {
      //Rectangle gauche
      drawRect(x, y, ratio * w, h, depth - 1);
      //Rectangle droit
      drawRect(x + ratio * w, y, (1 - ratio) * w, h, depth - 1);
    } else {
      //Rectangle gauche
      drawRect(x, y, w, ratio * h, depth - 1);
      //Rectangle droit
      drawRect(x, y + ratio * h, w, (1 - ratio) * h, depth - 1);
    }
  } else {
    fill(
      random([
        "#668F80",
        "#BDE4A7",
        "#5941A9",
        "#C33149",
        "#E63B2E",
        "#361D2E",
        "#BFDBF7",
        "#F49F0A",
      ])
    );
    if (
      x > margin &&
      y > margin &&
      x + w + 1 < width - margin &&
      y + h + 1 < height - margin
    )
      rect(x, y, w, h);
  }
}
