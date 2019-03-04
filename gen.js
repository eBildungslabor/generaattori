//Sami Jakonen jaksfi@github
//Runon rivit tai sanat
let sanat = "Habe nun ach! Philosophie; Juristerei und Medizin; Und leider auch Theologie; Durchaus studiert mit heißem Bemühn; Da steh ich nun ich armer Tor; Und bin so klug als wie zuvor; Heiße Magister heiße Doktor gar; Und ziehe schon an die zehen Jahr; Herauf herab und quer und krumm; Meine Schüler an der Nase herum; Und sehe daß wir nichts wissen können; Das will mir schier das Herz verbrennen; Zwar bin ich gescheiter als all die Laffen; Doktoren Magister Schreiber und Pfaffen;Mich plagen keine Skrupel noch Zweifel; Fürchte mich weder vor Hölle noch Teufel; Dafür ist mir auch alle Freud entrissen; Bilde mir nicht ein was Rechts zu wissen; Bilde mir nicht ein ich könnte was lehren; Die Menschen zu bessern und zu bekehren; Auch hab ich weder Gut noch Geld; Noch Ehr und Herrlichkeit der Welt; Es möchte kein Hund so länger leben; Drum hab ich mich der Magie ergeben";
/*Erotellaan data listaksi


Vaihda split-funktion attribuutti rivien erotusmerkiksi

*/
let sanaLista = sanat.split(";");
//Generoitavien säkeiden määrä
let maara = 3;

//Funktio ensimmäisen kirjaimen isoksi muuttamista varten
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

//Haetaan tekstielementti HTML-tiedostosta
let elementti = document.getElementById('t');
//Luodaan tyhjä lista satunnaisia indeksinumeroita varten
let indeksit = [];

//Generoidaan satunnaisia, uniikkeja indeksinumeroita
while (indeksit.length < maara) {
  //Arvotaan numero ja pyöristetään kokonaisluvuksi
  x = Math.round(Math.random() * (sanaLista.length - 1));
  //Tarkastetaan, onko kyseinen numero jo listalla
  if (indeksit.indexOf(x) < 0) {
    //Jos ei ole, lisätään listaan
    indeksit.push(x);
  }
}
console.log("Generoitiin:");
console.log(indeksit);

//Printataan sivulle generoituja indeksinumeroita vastaavat rivit
for (let i = 0; i < indeksit.length; i++) {
  if (i == indeksit.length - 1) {
    //Jos ollaan viimeisellä rivillä, ei pilkkua loppuun
    t.innerHTML += sanaLista[indeksit[i]] + "";
  } else if (i == 0) {
    //Jos ollaan ensimmäisellä rivillä, iso alkukirjain
    t.innerHTML += sanaLista[indeksit[i]].capitalize() + ",<br>";
  } else {
    //Normaali tilanne
    t.innerHTML += sanaLista[indeksit[i]] + ",<br>";
  }
}
//Lopetetaan runo pisteeseen
t.innerHTML += ".";
