// 1. Was macht der forEach Operator?
// forEach führt eine Funktion für jedes Element in einem Array aus
// Praktische Anwendungen in echten Apps:
// - E-Mails an alle Benutzer versenden
// - UI-Elemente für jedes Produkt im Warenkorb aktualisieren
// - Benachrichtigungen an alle verbundenen Clients senden
// - Jede Datei in einem Upload verarbeiten

// 2. Einfaches Beispiel mit Namen:
const namen = ['Anna', 'Ben', 'Clara', 'David'];
console.log(namen);

namen.forEach(function(name) {
    console.log('Hallo ' + name + '!');
});

// 3. Beispiel mit Produktdaten aus produkte.json:
const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log(produkte);

// Jeden Produktnamen ausgeben (wie eine Produktliste in der App anzeigen)
produkte.forEach(function(produkt) {
    console.log(produkt.title);
});

// 4. Aufgabe:
// Verwende forEach um nur den Preis jedes Produkts auszugeben
// 
// Lösungshinweise:
// - Nutze produkte.forEach(function(produkt) { ... })
// - Greife auf den Preis zu mit: produkt.price
// - Gib den Preis aus mit: console.log(produkt.price)
// 
// Erwartetes Ergebnis Format: 109.95, 22.3, 55.99, 15.99, 695, 168, 9.99, 10.99, 64, 109

// 🧠 Mini-Quiz:
// - Was ist der Unterschied zwischen forEach und map?
// - Warum gibt forEach kein neues Array zurück?
// - Häufiger Fehler: const preise = produkte.forEach(...) ← Das funktioniert nicht!

// 💡 Performance-Tipp:
// forEach ist optimal wenn du nur etwas mit jedem Element machen willst (anzeigen, speichern, etc.)