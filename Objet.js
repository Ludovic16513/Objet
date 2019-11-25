var objet = ['valise', 'poivier connecté', 'épée', 'cahier', 'pneu', 'table', 'godsabre', 'truelle', 'madelaine', 'trident', 'pull rose', 'pc', 'tisonnier', 'guimbarde', 'chandelier',
'verre', 'table bancale', 'arbre', 'souris', 'dague'];
var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson", "Kylian", "Georges-Clooney", "Quintus", "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];
var temperatures = ['30', '24', '-273.15', '21', '42', '-38', '35', '584', '-8000', '28', '20', '37.2', '-30', '35', "hot", '27', '-100', '55' ];
var lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris' , 'Batcave', 'Maubeuge', 'Réacteur nucléaire', 'Martinique', 'Balamb garden', "L'enfer", 'Montbeilard', 'Namek', 'Londres', 'Une île', 'Une cave', 'le Caire', 'New York', 'Le tampon', 'Berlaimont',];
var verbes = ['Danser' ,'Frapper' ,'Lubrifier', 'Trikiter', 'Procrastiner', 'Foutre', 'Prendre', 'Nager',
    'Recoudre', 'Punir', 'Attaquer', 'Coder', 'Jouer', 'Manger', 'Avoir'];


var  randnom = Math.floor(Math.random()* noms.length);
var nomrandom = noms[randnom];
console.log(nomrandom);

var  randobjet = Math.floor(Math.random()* objet.length);
var motobjet = objet[randobjet];
console.log(motobjet);

var  randtemp = Math.floor(Math.random()* temperatures.length);
var temprandom = temperatures[randtemp];
console.log(temprandom);

var  randverbes = Math.floor(Math.random()* verbes.length);
var verbesrandom = verbes[randverbes];
console.log(verbesrandom);

var  randlieux = Math.floor(Math.random()* lieux.length);
var lieuxrandom = lieux[randlieux];
console.log(lieuxrandom);

var bouton = document.getElementById('boutonn');
var texte = document.getElementById('texte');
var input = document.getElementById('input').value;


bouton.addEventListener('click', function () {
    var  randnom = Math.floor(Math.random()* noms.length);
    var nomrandom = noms[randnom];
    console.log(nomrandom);

    var  randobjet = Math.floor(Math.random()* objet.length);
    var motobjet = objet[randobjet];
    console.log(motobjet);

    var  randtemp = Math.floor(Math.random()* temperatures.length);
    var temprandom = temperatures[randtemp];
    console.log(temprandom);

    var  randverbes = Math.floor(Math.random()* verbes.length);
    var verbesrandom = verbes[randverbes];
    console.log(verbesrandom);

    var  randlieux = Math.floor(Math.random()* lieux.length);
    var lieuxrandom = lieux[randlieux];
    console.log(lieuxrandom);
    var bouton = document.getElementById('boutonn');
    var texte = document.getElementById('texte');
    var input = document.getElementById('input').value;
    var ajout = document.createElement('p');

    texte.appendChild(ajout);
    ajout.innerHTML = 'Sachez ' + input + ' que ' +nomrandom+ ' a été arreté pour avoir '+ verbesrandom + ' avec un '+ motobjet+ ' a '+ lieuxrandom+ ' sous ' + randtemp + ' degrés';
});











