// 1. Was macht der find Operator?
// find sucht das ERSTE Element in einem Array, das eine Bedingung erfüllt
// Gibt das komplette Objekt zurück (nicht nur true/false)
// Praktische Anwendungen in echten Apps:
// - Benutzer anhand der ID in der Datenbank finden
// - Spezifisches Produkt in der Produktliste lokalisieren
// - Den aktuell eingeloggten User aus der User-Liste finden
// - Das erste verfügbare Hotelzimmer finden
// - Den ersten Fehler in einer Fehlerprotokoll-Liste finden

// 2. Einfaches Beispiel mit Tieren:
const tiere = ['Katze', 'Hund', 'Elefant', 'Maus'];
console.log(tiere);

const langesTier = tiere.find(function(tier) {
    return tier.length > 5;
});
console.log(langesTier);

// 3. Beispiel mit Produktdaten aus produkte.json:
const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log(produkte);

// Das erste Schmuckprodukt finden (für Produktdetailseite)
const erstesSchmuckProdukt = produkte.find(function(produkt) {
    return produkt.category === "jewelery";
});
console.log(erstesSchmuckProdukt);

// 4. Aufgabe:
// Verwende find um das erste Produkt mit einer Bewertung über 4.0 zu finden
// 
// Lösungshinweise:
// - Nutze produkte.find(function(produkt) { ... })
// - Prüfe die Bewertung mit: return produkt.rating.rate > 4.0
// - Speichere das Ergebnis: const gutesProdukt = ...
// - Gib das gefundene Produkt aus: console.log(gutesProdukt)
// 
// Erwartetes Ergebnis Format: Ein Produkt-Objekt mit rating.rate > 4.0

// 🧠 Mini-Quiz:
// - Was ist der Unterschied zwischen find und filter?
// - Was passiert wenn find nichts findet? (Antwort: undefined)
// - Häufiger Fehler: find() gibt das erste Element zurück, nicht ein Array!

// 💡 Performance-Tipp:
// find stoppt beim ersten Treffer - schneller als filter wenn du nur ein Element brauchst