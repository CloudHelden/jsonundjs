// 1. Was macht der map Operator?
// map erstellt ein NEUES Array mit veränderten Werten
// Jedes Element wird durch eine Funktion verarbeitet und das Ergebnis wird ins neue Array geschrieben
// Praktische Anwendungen in echten Apps:
// - Dropdown-Listen aus Datenbankeinträgen erstellen  
// - HTML-Elemente aus Daten-Arrays generieren
// - Preise von Euro in Dollar umrechnen
// - Benutzernamen aus User-Objekten extrahieren

// 2. Einfaches Beispiel mit Farben:
const farben = ['rot', 'grün', 'blau'];
console.log(farben);

const farbcodes = farben.map(function(farbe) {
    return '#' + farbe;
});
console.log(farbcodes);

// 3. Beispiel mit Produktdaten aus produkte.json:
const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log(produkte);

// Nur die Produktnamen in einem neuen Array sammeln (für Dropdown-Liste)
const produktNamen = produkte.map(function(produkt) {
    return produkt.title;
});
console.log(produktNamen);

// 4. Aufgabe:
// Verwende map um ein neues Array mit nur den Preisen zu erstellen
// 
// Lösungshinweise:
// - Nutze produkte.map(function(produkt) { ... })
// - Gib den Preis zurück mit: return produkt.price
// - Speichere das Ergebnis: const preise = ...
// - Gib das neue Array aus: console.log(preise)
// 
// Erwartetes Ergebnis Format: [109.95, 22.3, 55.99, 15.99, 695, 168, 9.99, 10.99, 64, 109]

// 🧠 Mini-Quiz:
// - Was ist der Hauptunterschied zwischen map und forEach?
// - Was passiert wenn du map auf ein leeres Array anwendest?
// - Häufiger Fehler: Vergessen 'return' zu schreiben in der map-Funktion!

// 💡 Performance-Tipp:
// map ist perfekt wenn du ein neues Array mit transformierten Werten brauchst