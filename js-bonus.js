// 🚀 BONUS-PROJEKT: Mini-Produktfilter
// Hier kombinierst du alle gelernten Array-Operatoren!
// 
// Ziel: Baue einen einfachen Produktfilter wie in einem echten Online-Shop
// Du wirst filter, map, sort, slice und reduce zusammen verwenden

const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log("Alle Produkte geladen:", produkte.length);

// Beispiel 1: Kompletter Produktfilter
console.log("\n=== BEISPIEL: Günstiger Schmuck ===");

const günstigerSchmuck = produkte
    .filter(produkt => produkt.category === "jewelery")  // Nur Schmuck
    .filter(produkt => produkt.price < 200)              // Unter 200€
    .sort((a, b) => a.price - b.price)                   // Nach Preis sortieren
    .slice(0, 2);                                        // Nur die ersten 2

console.log("Gefilterte Produkte:", günstigerSchmuck);

// Beispiel 2: Statistiken berechnen
console.log("\n=== BEISPIEL: Kategorien-Statistik ===");

const kategoriePreise = produkte
    .filter(produkt => produkt.category === "men's clothing")
    .map(produkt => produkt.price)
    .reduce((summe, preis) => summe + preis, 0);

console.log("Gesamtwert aller Männerkleidung:", kategoriePreise + "€");

// 🎯 DEINE AUFGABEN:

// Aufgabe 1: Top bewertete Electronics
console.log("\n=== AUFGABE 1: Top Electronics ===");
// - Filtere nur "electronics" Produkte
// - Nimm nur die mit Bewertung über 3.0
// - Sortiere nach Bewertung (beste zuerst)
// - Zeige nur die ersten 2
// - Gib nur die Titel aus (verwende map am Ende)

// Dein Code hier:


// Aufgabe 2: Preis-Analyse
console.log("\n=== AUFGABE 2: Preis-Analyse ===");
// - Finde alle Produkte unter 100€
// - Berechne den Durchschnittspreis (reduce + division)
// - Gib das Ergebnis aus

// Dein Code hier:


// Aufgabe 3: Vollständiger Shop-Filter
console.log("\n=== AUFGABE 3: Shop-Filter ===");
// Baue einen Filter für: "Alle Produkte mit mindestens 4.0 Bewertung, 
// sortiert nach Preis (günstigste zuerst), zeige die ersten 3 Titel"

// Dein Code hier:


// 🔧 DEBUGGING-CHALLENGE:
console.log("\n=== DEBUGGING-CHALLENGE ===");
// Dieser Code ist kaputt - finde und repariere die 3 Fehler!

const kaputterCode = produkte
    .filter(produkt => produkt.price > 50)
    .map(produkt => {
        produkt.title.toUpperCase()  // Fehler 1: Kein return
    })
    .sort(a, b => a.length - b.length)  // Fehler 2: Falsche Syntax
    .splice(0, 3);  // Fehler 3: splice statt slice

console.log("Kaputtes Ergebnis:", kaputterCode);

// Reparierter Code hier:


// 🏆 MASTER-CHALLENGE:
console.log("\n=== MASTER-CHALLENGE ===");
// Erstelle eine Funktion die folgendes macht:
// 1. Gruppiere Produkte nach Kategorien
// 2. Finde die teuerste Kategorie (höchster Durchschnittspreis)
// 3. Gib den Namen und Durchschnittspreis aus

// Tipp: Du brauchst reduce um zu gruppieren!

function teuersteKategorie(produkte) {
    // Dein Code hier:
    
}

// console.log("Teuerste Kategorie:", teuersteKategorie(produkte));

// 💡 LÖSUNGSHINWEISE:
// - Kombiniere die Operatoren mit Punkt-Notation: array.filter().map().sort()
// - Vergiss nicht 'return' in den Funktionen
// - slice(0, n) für die ersten n Elemente
// - sort((a, b) => a.wert - b.wert) für aufsteigend
// - reduce braucht einen Startwert als zweiten Parameter