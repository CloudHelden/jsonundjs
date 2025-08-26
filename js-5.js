// 1. Was machen die some/every Operatoren?
// some: Gibt true zurück, wenn MINDESTENS EIN Element die Bedingung erfüllt
// every: Gibt true zurück, wenn ALLE Elemente die Bedingung erfüllen
// Beide geben nur true/false zurück (ja/nein-Antworten)
// Praktische Anwendungen in echten Apps:
// - Formular-Validierung: "Sind alle Felder ausgefüllt?" (every)
// - Berechtigungen: "Hat der User irgendeine Admin-Rolle?" (some)
// - Warenkorb: "Sind alle Produkte verfügbar?" (every)
// - Benachrichtigungen: "Gibt es ungelesene Nachrichten?" (some)
// - Quiz-App: "Sind alle Fragen beantwortet?" (every)

// 2. Einfaches Beispiel mit Städten:
const städte = ['Berlin', 'Hamburg', 'München', 'Köln'];
console.log(städte);

// some: Gibt es mindestens eine Stadt mit 'M'?
const hatStadtMitM = städte.some(function(stadt) {
    return stadt.startsWith('M');
});
console.log(hatStadtMitM);

// every: Beginnen alle Städte mit Großbuchstaben?
const alleGroß = städte.every(function(stadt) {
    return stadt[0] === stadt[0].toUpperCase();
});
console.log(alleGroß);

// 3. Beispiel mit Produktdaten aus produkte.json:
const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log(produkte);

// some: Gibt es mindestens ein Produkt unter 20€?
const hatGünstigeProdukte = produkte.some(function(produkt) {
    return produkt.price < 20;
});
console.log(hatGünstigeProdukte);

// every: Haben alle Produkte eine Bewertung über 1.0?
const alleHabenBewertung = produkte.every(function(produkt) {
    return produkt.rating.rate > 1.0;
});
console.log(alleHabenBewertung);

// 4. Aufgabe:
// Verwende some um zu prüfen ob es mindestens ein Electronics-Produkt gibt
// Verwende every um zu prüfen ob alle Produkte einen Preis über 5€ haben
// 
// Lösungshinweise:
// - Für some: produkte.some(function(produkt) { return produkt.category === "electronics" })
// - Für every: produkte.every(function(produkt) { return produkt.price > 5 })
// - Gib beide Ergebnisse aus: console.log(hatElektronik, alleTeuer)
// 
// Erwartetes Ergebnis Format: true, true (oder false, je nach Bedingung)

// 🧠 Mini-Quiz:
// - Was ist der Unterschied zwischen some und every?
// - Was gibt some([]) zurück? (leeres Array)
// - Häufiger Fehler: some/every verwechseln - some = mindestens eins, every = alle!

// 💡 Performance-Tipp:
// some/every sind perfekt für Validierungen und Ja/Nein-Fragen