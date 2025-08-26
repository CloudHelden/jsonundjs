// 🔧 DEBUGGING-ÜBUNGEN
// Lerne durch das Reparieren von kaputtem Code!
// 
// In echten Projekten ist Debugging eine der wichtigsten Fähigkeiten.
// Hier findest du typische Fehler die JavaScript-Anfänger machen.

const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));

console.log("=== DEBUGGING CHALLENGE ===");
console.log("Finde und repariere die Fehler in jedem Code-Block!\n");

// 🐛 FEHLER 1: forEach Problem
console.log("--- Fehler 1: forEach ---");
console.log("Ziel: Alle Produktnamen in einem Array sammeln");

// Kaputten Code - das funktioniert nicht!
console.log("Kaputten Code:");
const namen1 = produkte.forEach(function(produkt) {
    return produkt.title;
});
console.log("Ergebnis:", namen1); // undefined - warum?

// Aufgabe: Repariere den Code
console.log("Deine Reparatur:");
// const namen1Fixed = ...


// 🐛 FEHLER 2: map ohne return
console.log("\n--- Fehler 2: Vergessenes return ---");
console.log("Ziel: Alle Preise verdoppeln");

console.log("Kaputten Code:");
const verdoppeltePreise = produkte.map(function(produkt) {
    produkt.price * 2; // Fehler: Kein return!
});
console.log("Erstes Ergebnis:", verdoppeltePreise[0]); // undefined

// Aufgabe: Füge das fehlende return hinzu
console.log("Deine Reparatur:");
// const verdoppeltePreiseFixed = ...


// 🐛 FEHLER 3: filter Bedingung falsch
console.log("\n--- Fehler 3: Falsche filter-Bedingung ---");
console.log("Ziel: Nur Produkte unter 50€");

console.log("Kaputten Code:");
const günstige = produkte.filter(function(produkt) {
    produkt.price < 50; // Fehler: Kein return!
});
console.log("Anzahl gefunden:", günstige.length); // 0 - das stimmt nicht!

// Aufgabe: Repariere die filter-Bedingung
console.log("Deine Reparatur:");
// const günstigeFixed = ...


// 🐛 FEHLER 4: sort Syntax falsch
console.log("\n--- Fehler 4: Falsche sort-Syntax ---");
console.log("Ziel: Produkte nach Preis sortieren");

console.log("Kaputten Code:");
const sortiert = [...produkte].sort(function(a, b) {
    a.price > b.price; // Fehler: Falsche Vergleichslogik!
});
console.log("Erstes Produkt-Preis:", sortiert[0].price);
console.log("Letztes Produkt-Preis:", sortiert[sortiert.length-1].price);

// Aufgabe: Repariere die sort-Funktion
console.log("Deine Reparatur:");
// const sortiertFixed = ...


// 🐛 FEHLER 5: reduce Startwert vergessen
console.log("\n--- Fehler 5: Reduce ohne Startwert ---");
console.log("Ziel: Summe aller Preise berechnen");

console.log("Kaputten Code:");
const gesamtsumme = produkte.reduce(function(summe, produkt) {
    return summe + produkt.price;
}); // Fehler: Kein Startwert!
console.log("Gesamtsumme:", gesamtsumme); // NaN oder falsches Ergebnis

// Aufgabe: Füge den Startwert hinzu
console.log("Deine Reparatur:");
// const gesamtsummeFixed = ...


// 🐛 FEHLER 6: splice vs slice verwechselt
console.log("\n--- Fehler 6: splice statt slice ---");
console.log("Ziel: Erste 3 Produkte KOPIEREN (Original soll unverändert bleiben)");

console.log("Kaputten Code:");
const erste3 = produkte.splice(0, 3); // Fehler: splice verändert das Original!
console.log("Kopierte Elemente:", erste3.length);
console.log("Original Länge nach splice:", produkte.length); // Wurde verändert!

// Aufgabe: Verwende slice statt splice
console.log("Deine Reparatur:");
// const erste3Fixed = ...


// 🐛 FEHLER 7: Verschachtelte Eigenschaften falsch
console.log("\n--- Fehler 7: Falsche Eigenschaft ---");
console.log("Ziel: Produkte mit Bewertung über 4.0 finden");

console.log("Kaputten Code:");
const gutBewertet = produkte.filter(function(produkt) {
    return produkt.rating > 4.0; // Fehler: rating ist ein Objekt!
});
console.log("Gut bewertete Produkte:", gutBewertet.length);

// Aufgabe: Greife richtig auf rating.rate zu
console.log("Deine Reparatur:");
// const gutBewertetFixed = ...


// 🐛 BONUS FEHLER: Chaining Problem
console.log("\n--- Bonus: Chaining-Fehler ---");
console.log("Ziel: Günstige Schmuckprodukte, sortiert, erste 2 Titel");

console.log("Kaputten Code:");
const schmuckTitel = produkte
    .filter(p => p.category === "jewelery")
    .filter(p => p.price < 100)
    .sort((a, b) => a.price - b.price)
    .slice(0, 2)
    .map(p => p.title)
    .forEach(titel => titel.toUpperCase()); // Fehler: forEach gibt undefined zurück!
console.log("Ergebnis:", schmuckTitel);

// Aufgabe: Repariere das Chaining
console.log("Deine Reparatur:");
// const schmuckTitelFixed = ...


// 📚 LÖSUNGSHINWEISE:
console.log("\n=== LÖSUNGSHINWEISE ===");
console.log("• forEach gibt undefined zurück - nutze map für neue Arrays");
console.log("• Vergiss nie 'return' in map, filter, reduce Funktionen");
console.log("• sort braucht return a - b für Zahlen, a.localeCompare(b) für Strings");
console.log("• reduce braucht einen Startwert als zweiten Parameter");
console.log("• slice KOPIERT, splice VERÄNDERT das Original");
console.log("• Verschachtelte Objekte: produkt.rating.rate (nicht produkt.rating)");
console.log("• Bei Chaining: forEach am Ende vermeiden, nutze map");

// 🏆 EXTRA-CHALLENGE:
console.log("\n=== EXTRA-CHALLENGE ===");
console.log("Schreibe eine Funktion die alle diese Fehler vermeidet:");
console.log("Finde alle Electronics über 50€, sortiere nach Bewertung, nimm die ersten 3 Namen");

function sichereElectronics(produkte) {
    // Dein fehlerfreier Code hier:
    
}

// console.log("Sichere Electronics:", sichereElectronics(produkte));