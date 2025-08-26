// 1. Was macht der reduce Operator?
// reduce "reduziert" ein Array zu einem einzigen Wert (Zahl, String, Objekt)
// Geht durch jedes Element und sammelt/berechnet dabei einen Gesamtwert
// Praktische Anwendungen in echten Apps:
// - Gesamtsumme im Warenkorb berechnen
// - Durchschnittsbewertung aller Produkte ermitteln
// - Alle Fehlermeldungen zu einem Text zusammenfassen
// - Statistiken berechnen (min, max, Anzahl)
// - Daten gruppieren oder transformieren

// 2. Einfaches Beispiel mit Wörtern:
const wörter = ['Hallo', 'schöne', 'Welt', '!'];
console.log(wörter);

// Alle Wörter zu einem Satz zusammenfügen
const satz = wörter.reduce(function(gesamtSatz, wort) {
    return gesamtSatz + ' ' + wort;
}, ''); // Leerer String als Startwert
console.log(satz);

// 3. Beispiel mit Produktdaten aus produkte.json:
const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log(produkte);

// Gesamtwert aller Produkte berechnen (wie Warenkorbsumme)
const gesamtWert = produkte.reduce(function(summe, produkt) {
    return summe + produkt.price;
}, 0);
console.log(gesamtWert);

// Durchschnittspreis berechnen
const durchschnittspreis = gesamtWert / produkte.length;
console.log(durchschnittspreis);

// 4. Aufgabe:
// Verwende reduce um die Gesamtanzahl aller Bewertungen zu berechnen
// (Summiere alle rating.count Werte auf)
// 
// Lösungshinweise:
// - Nutze produkte.reduce(function(summe, produkt) { ... }, 0)
// - Addiere die Bewertungsanzahl: return summe + produkt.rating.count
// - Starte mit 0 als Anfangswert
// - Gib das Endergebnis aus: console.log(gesamtBewertungen)
// 
// Erwartetes Ergebnis Format: Eine Zahl wie 2342 (Gesamtanzahl aller Bewertungen)

// 🧠 Mini-Quiz:
// - Was passiert wenn du den Startwert bei reduce vergisst?
// - Kannst du reduce auch für andere Dinge als Summen verwenden?
// - Häufiger Fehler: Den Accumulator (ersten Parameter) vergessen zurückzugeben!

// 💡 Performance-Tipp:
// reduce ist mächtig aber komplex - für einfache Summen reicht oft eine for-Schleife