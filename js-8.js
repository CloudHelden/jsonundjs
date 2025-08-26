// 1. Was machen die slice/splice Operatoren?
// slice: Nimmt Teile aus einem Array OHNE das ursprüngliche Array zu verändern
// splice: Verändert das ursprüngliche Array (entfernt/fügt Elemente hinzu)
// Praktische Anwendungen in echten Apps:
// - Paginierung: Nur die ersten 10 Suchergebnisse zeigen (slice)
// - "Mehr laden" Button: Nächste 20 Produkte anzeigen (slice)
// - Produktbewertungen begrenzen: Nur erste 5 Kommentare zeigen (slice)
// - Element aus Warenkorb entfernen (splice)
// - Admin-Panel: Benutzer aus Liste löschen (splice)

// 2. Einfaches Beispiel mit Wochentagen:
const wochentage = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
console.log(wochentage);

// slice: Nur Arbeitswoche nehmen (Index 0 bis 4)
const arbeitswoche = wochentage.slice(0, 5);
console.log(arbeitswoche);
console.log(wochentage); // Original bleibt unverändert

// slice: Nur Wochenende nehmen (Index 5 bis 7)
const wochenende = wochentage.slice(5, 7);
console.log(wochenende);

// 3. Beispiel mit Produktdaten aus produkte.json:
const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log(produkte);

// slice: Nur die ersten 3 Produkte für die Homepage zeigen
const erste3Produkte = produkte.slice(0, 3);
console.log(erste3Produkte);

// slice: Produkte 4-6 für die zweite Seite (Paginierung)
const seite2Produkte = produkte.slice(3, 6);
console.log(seite2Produkte);

// splice Beispiel: Ein Produkt aus der Liste entfernen
const produkteKopie = [...produkte]; // Kopie erstellen
const entferntesProdukt = produkteKopie.splice(1, 1); // Index 1, 1 Element entfernen
console.log(entferntesProdukt); // Was entfernt wurde
console.log(produkteKopie.length); // Jetzt 9 statt 10 Produkte

// 4. Aufgabe:
// Verwende slice um nur die letzten 3 Produkte aus der Liste zu bekommen
// 
// Lösungshinweise:
// - Nutze produkte.slice(-3) für die letzten 3 Elemente
// - Negative Zahlen zählen vom Ende des Arrays
// - Speichere das Ergebnis: const letzten3 = ...
// - Gib das neue Array aus: console.log(letzten3)
// 
// Erwartetes Ergebnis Format: Array mit den letzten 3 Produkten

// 🧠 Mini-Quiz:
// - Was ist der Unterschied zwischen slice und splice?
// - Was passiert bei slice(-1)?
// - Häufiger Fehler: slice und splice verwechseln - slice kopiert, splice verändert!

// 💡 Performance-Tipp:
// slice ist sicher (verändert Original nicht), splice ist destruktiv (verändert Original)