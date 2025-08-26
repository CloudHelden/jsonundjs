// 1. Was macht der sort Operator?
// sort sortiert die Elemente in einem Array nach einer bestimmten Reihenfolge
// ACHTUNG: Verändert das ursprüngliche Array! (nicht wie map/filter)
// Praktische Anwendungen in echten Apps:
// - Produktliste nach Preis sortieren (günstig → teuer)
// - Benutzer alphabetisch nach Namen ordnen
// - Ranglisten nach Punktzahl sortieren
// - Nachrichten nach Datum ordnen (neueste zuerst)
// - Suchergebnisse nach Relevanz sortieren

// 2. Einfaches Beispiel mit Obst:
const obst = ['Banane', 'Apfel', 'Orange', 'Kiwi'];
console.log(obst);

// Obst alphabetisch sortieren
const sortiertObst = [...obst].sort(function(a, b) {
    return a.localeCompare(b); // Alphabetisch sortieren
});
console.log(sortiertObst);

// 3. Beispiel mit Produktdaten aus produkte.json:
const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log(produkte);

// Produkte nach Preis sortieren (günstigste zuerst)
const nachPreis = [...produkte].sort(function(a, b) {
    return a.price - b.price;
});
console.log(nachPreis);

// Produkte nach Bewertung sortieren (beste zuerst)
const nachBewertung = [...produkte].sort(function(a, b) {
    return b.rating.rate - a.rating.rate; // b - a für absteigend
});
console.log(nachBewertung);

// 4. Aufgabe:
// Verwende sort um die Produkte alphabetisch nach title zu sortieren
// 
// Lösungshinweise:
// - Erstelle eine Kopie: const sortiert = [...produkte]
// - Nutze sort: sortiert.sort(function(a, b) { ... })
// - Für Alphabetisch: return a.title.localeCompare(b.title)
// - Gib das sortierte Array aus: console.log(sortiert)
// 
// Erwartetes Ergebnis Format: Array sortiert von A-Z nach Produktnamen

// 🧠 Mini-Quiz:
// - Warum musst du [...produkte] verwenden statt nur produkte?
// - Was macht localeCompare() genau?
// - Häufiger Fehler: sort() verändert das ursprüngliche Array!

// 💡 Performance-Tipp:
// Erstelle immer eine Kopie mit [...array] wenn du das Original behalten willst