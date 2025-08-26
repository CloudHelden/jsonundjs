// 1. Was macht der filter Operator?
// filter erstellt ein NEUES Array mit nur den Elementen, die eine Bedingung erfüllen
// Es "filtert" die Elemente heraus, die wir behalten wollen
// Praktische Anwendungen in echten Apps:
// - Suchfunktion in Online-Shops (Produkte nach Preis/Kategorie filtern)
// - Spam-Filter für E-Mails
// - Nur aktive Benutzer aus einer Liste zeigen
// - Verfügbare Termine aus einem Kalender filtern
// - Nur Produkte auf Lager anzeigen

// 2. Einfaches Beispiel mit Wörtern:
const wörter = ['Haus', 'Auto', 'Baum', 'Stern', 'Tisch'];
console.log(wörter);

const kurzeWörter = wörter.filter(function(wort) {
    return wort.length <= 4;
});
console.log(kurzeWörter);

// 3. Beispiel mit Produktdaten aus produkte.json:
const fs = require('fs');
const produkte = JSON.parse(fs.readFileSync('produkte.json', 'utf8'));
console.log(produkte);

// Nur Produkte unter 50€ finden (wie ein Preisfilter im Online-Shop)
const günstigeProdukte = produkte.filter(function(produkt) {
    return produkt.price < 50;
});
console.log(günstigeProdukte);

// 4. Aufgabe:
// Verwende filter um nur Produkte der Kategorie 'jewelery' zu finden
// 
// Lösungshinweise:
// - Nutze produkte.filter(function(produkt) { ... })
// - Prüfe die Kategorie mit: return produkt.category === "jewelery"
// - Speichere das Ergebnis: const schmuck = ...
// - Gib das gefilterte Array aus: console.log(schmuck)
// 
// Erwartetes Ergebnis Format: 4 Produkte mit category: "jewelery"

// 🧠 Mini-Quiz:
// - Was passiert wenn keine Elemente die Bedingung erfüllen?
// - Kannst du mehrere Bedingungen in einem filter kombinieren?
// - Häufiger Fehler: Vergessen 'return' vor der Bedingung zu schreiben!

// 💡 Performance-Tipp:
// filter ist ideal für Suchfunktionen und das Ausblenden ungewollter Inhalte