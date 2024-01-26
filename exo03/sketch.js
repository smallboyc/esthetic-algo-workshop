const CANVAS_SIZE = 400; //Taille de l'image
const CELL_COUNT = 40; //Nombre d'unité découpé sur la taille de l'image.
const CELL_SIZE = CANVAS_SIZE / CELL_COUNT; //Taille d'une unité : IMPORTANT pour quadriller l'espace.
const BORDER = CELL_SIZE / 2; //Bord du rectangle dessiné
const MARGIN = 5; //Marge présente entre les bords de l'image et l'ensemble des formes dessinées.

//Tableau de couleurs prédéfinies.
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

let isClicked = false; //Booléen permettant de lancer l'animation ou de la stopper.

function setup() {
  const canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE); //On créer le canva que l'on stock dans une constante
  canvas.position(windowWidth / 2 - CANVAS_SIZE / 2, CANVAS_SIZE / 2); //Permet de positionner le canva
  frameRate(0);
  const btn = document.querySelector("#toggle"); //On récupère le bouton Run / Stop
  const save = document.querySelector("#save"); //On récupère le bouton Save Image (GIF)

  //Evenement permettant de vérifier si l'utilisateur à intéragi avec le bouton Run / Stop
  btn.addEventListener("click", () => {
    isClicked = !isClicked;
    if (isClicked) frameRate(4);
    else frameRate(0);
  });
  //Evenement permettant de vérifier si l'utilisateur à intéragi avec le bouton Save Image (GIF)
  save.addEventListener("click", () => {
    saveGif("mySketch", 5); //Génère un gif de 5 secondes.
  });
  strokeWeight(BORDER); //Bordure des rectangles
}

function draw() {
  background(235, 229, 211);
  const shapes = 5;
  //Boucle importante permettant la superposition des rectangles.
  for (let i = 0; i < shapes; i++) drawRect(0, 0, CELL_COUNT, CELL_COUNT, 6);
}

//Fonction qui dessine un groupe de rectangles.
function drawRect(x, y, w, h, depth) {
  //Conditions d'arrêt
  if (depth < 0) return;

  if (w < 1 || h < 1) {
    return;
  }
  //Partie récursive :
  if (depth > 0) {
    //Profondeur paire => Découpage selon la verticale.
    //Profondeur impaire => Découpage selon l'horizontale.
    if (depth % 2 == 0) {
      //Variable permettant de déterminer la nouvelle largeur du rectangle.
      let sub_size = int(random(1, w - 1));
      //Rectangle gauche
      drawRect(x, y, sub_size, h, depth - 1);
      //Rectangle droit
      drawRect(x + sub_size, y, w - sub_size, h, depth - 1);
    } else {
      //Variable permettant de déterminer la nouvelle hauteur du rectangle.
      let sub_size = int(random(1, h - 1));
      //Rectangle haut
      drawRect(x, y, w, sub_size, depth - 1);
      //Rectangle bas
      drawRect(x, y + sub_size, w, h - sub_size, depth - 1);
    }
  } else {
    //Conditions essentielles pour ne pas afficher les rectangles au bords et donc d'obtenir une forme différente d'un rectangle.
    if (
      x > MARGIN &&
      y > MARGIN &&
      x + w < CELL_COUNT - MARGIN &&
      y + h < CELL_COUNT - MARGIN
    ) {
      //Condtion permettant de créer un rectangle de couleur avec une probabilité dépendant de la densité (variable manuellement par l'utilisateur)
      if (random(1) < density.value) {
        fill(random(COLORS)); //Remplissage aléatoire des rectangles avec le tableau de couleurs
        rect(x * CELL_SIZE, y * CELL_SIZE, w * CELL_SIZE, h * CELL_SIZE);
      }
    }
  }
}
