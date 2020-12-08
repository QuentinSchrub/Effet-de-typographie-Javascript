const texte = document.getElementById('txt_Element');
const text = 'Quentin Code From Scratch';

//index pour les parametre necessaire de slice(0, 25)
let index = 25;



//Fait afficher chaque lettre de la string "text" une par une avec Slice() et boucle la fonction avec IF, puis clearinterval pour randomizer avec var Timer
function play() {
    texte.innerHTML = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
    //Stop le timer puis reprend avec le randomizer
  clearInterval(timer)
   timer = setInterval(play, randomizer(100, 600));
};

play()

//affichage des lettres interval regulier + fonction qui randomize en 0 et 100
var timer = setInterval(play, 300);

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //Randomizer mathematique qui choisit l'interval entre 100 et 500 à l'arrondi au nomre entier inférieur grace à Math.floor
}


randomizer(100, 500);

