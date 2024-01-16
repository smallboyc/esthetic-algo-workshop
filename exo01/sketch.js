//L'idée est de représenter un bâtiment du campus dans la nuit.
//L'image se veut minimaliste
//Un jeu a été imaginé : Reboiser le campus en appuyant sur votre clavier, car la nature c'est la vie.



//on stock les composantes de couleurs de notre background (important pour la suite)
const backgroundColor = [54, 40, 128, 255];
let count = 0; //compteur pour afficher le nombre d'arbres plantés
let gap = 250; //gap permet un écart cohérent selon la composante x de 'road'

//Fonction qui retourne un nombre aléatoire entre 0 et max.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//Fonction qui dessine la route parallèle au bâtiment.
function road() {
  strokeWeight(9);
  stroke(91, 74, 181);
  line(gap, height, width - gap, 0);
}

//Fonction qui dessine la route perpendiculaire au bâtiment.
function road2() {
  strokeWeight(9);
  stroke(91, 74, 181);
  line(700, 300, width, height);
}

//Fonction qui dessine le toit du bâtiment.
function topEsiee() {
  strokeWeight(0);
  fill(40, 29, 99);
  quad(355, 365, 668, 95, 800, 200, 480, 495);
}

//Fonction qui dessine le côté du bâtiment.
function sideEsiee() {
  strokeWeight(0);
  fill(27, 18, 74);
  triangle(355, 365, 355, 423, 480, 495);
}

//Fonction qui dessine le rond-point.
function rondabout() {
  stroke(91, 74, 181);
  fill(27, 18, 74);
  ellipse(700, 300, 85, 80);
  strokeWeight(0);
  fill(255);
  triangle(695, 300, 752, 250, 700, 300);
}

//Fonction qui dessine un arbre aux coordonnées x et y.
function tree(x, y) {
  strokeWeight(4);
  line(x + 3, y + 3, x + 3, y + 27);
  strokeWeight(0);
  fill(45, getRandomInt(42), 105);
  circle(x + 9, y, 20);
  fill(45, getRandomInt(42), 105);
  circle(x, y, 20);
  fill(45, getRandomInt(42), 105);
  circle(x, y + 9, 20);
  fill(45, getRandomInt(42), 105);
  circle(x + 9, y + 9, 20);
}

//Fonction principale : setup est appelée une fois au début du programme.
function setup() {
  createCanvas(1280, 720);
  background(backgroundColor);
  topEsiee();
  sideEsiee();
  fill(54, 40, 128);
  ellipse(700, 300, 120, 110);
  road();
  road2();
  rondabout();
}


//Fonction principale : draw est appelée à chaque frame.
function draw() {
  let score = document.querySelector("#score"); //on récupère l'élément où on affiche le nombre d'arbres plantés.
  //Chaque pression d'une touche de clavier génère 10 arbres à une position aléatoire.
  if (keyIsPressed) {
    for (let i = 0; i < 10; i++) {
      const x = getRandomInt(width);
      const y = getRandomInt(height);
      if (JSON.stringify(get(x, y)) == JSON.stringify(backgroundColor)) {
        tree(x, y);
        count++;
        score.textContent = count;
      }
    }
  }
}

//Description de l'objet triangle()
// Dessine un triangle avec la syntaxe : triangle(x1,y1,x2,y2,x3,y3)
// x1,y1 est la coordonnée du coin inférieur gauche
// x2,y2 est la coordonnée du coin supérieur
// x3,y3 est la coordonnée du coin inférieur droit
