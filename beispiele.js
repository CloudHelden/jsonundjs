// ==================================================
// FOLIE 1 – forEach (Farben) – Alles durchlaufen
// ==================================================

const farben = ["rot", "grün", "blau", "gelb"];

// Aufgabe: Gib alle Farben mit console.log aus.
farben.forEach(farbe => {
  console.log(farbe);
});

farben.forEach(function(farbe) {
  console.log(farbe);
});

// ==================================================
// FOLIE 2 – map (Zahlen) – Neues Array erzeugen
// ==================================================

const zahlen = [1, 2, 3, 4];

// Aufgabe: Erzeuge ein neues Array, in dem alle Zahlen verdoppelt sind.
const verdoppelt = zahlen.map(z => z * 2);
console.log(verdoppelt);



// ==================================================
// FOLIE 3 – filter (Tiere) – Nur passende behalten
// ==================================================

const tiere = ["Hund", "Katze", "Kuh", "Maus"];

// Aufgabe: Filtere alle Tiere heraus, die mit "K" beginnen.
const tiereMitK = tiere.filter(tier => tier.startsWith("K"));
console.log(tiereMitK);



// ==================================================
// FOLIE 4 – find (Städte) – Erstes passendes Element
// ==================================================

const staedte = ["Rom", "Berlin", "Paris", "London"];

// Aufgabe: Finde die erste Stadt, die länger als 5 Buchstaben hat.
const ersteLangeStadt = staedte.find(stadt => stadt.length > 5);
console.log(ersteLangeStadt);



// ==================================================
// FOLIE 5 – reduce (Einkaufsliste) – Zusammenfassen
// ==================================================

const einkauf = [
  { name: "Apfel", preis: 1 },
  { name: "Brot",  preis: 2 },
  { name: "Milch", preis: 3 }
];

// Aufgabe: Berechne die Gesamtsumme aller Preise.
const gesamtpreis = einkauf.reduce((sum, artikel) => sum + artikel.preis, 0);
console.log(gesamtpreis);



// ==================================================
// FOLIE 6 – sort (Namen) – Elemente ordnen
// ==================================================

const namen = ["Lena", "Anna", "Peter", "Max"];

// Aufgabe: Sortiere die Namen alphabetisch (aufsteigend).
const sortiert = [...namen].sort();
console.log(sortiert);
