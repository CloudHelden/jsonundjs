// 📋 JSON AUFGABE 1: Einfache Person
// Lerne die Grundlagen von JSON-Objekten!

// 1. Was ist JSON?
// JSON = JavaScript Object Notation
// Ein Format um Daten zu strukturieren - wie ein digitaler Steckbrief
// Praktische Anwendungen:
// - API-Daten von Servern empfangen
// - Konfigurationsdateien schreiben
// - Daten in Datenbanken speichern
// - Zwischen verschiedenen Programmen Daten austauschen

// 2. JSON Syntax-Regeln:
// - Eigenschaften MÜSSEN in "Anführungszeichen" stehen
// - Strings brauchen "Anführungszeichen"  
// - Zahlen KEINE Anführungszeichen
// - true/false KEINE Anführungszeichen
// - Komma zwischen Eigenschaften (aber NICHT nach der letzten!)

// 3. Beispiel - Eine einfache Person:
console.log("=== BEISPIEL PERSON ===");

const beispielPerson = {
    "name": "Anna Schmidt",
    "alter": 28,
    "stadt": "Berlin",
    "verheiratet": false
};

console.log("Komplettes Objekt:", beispielPerson);
console.log("Nur der Name:", beispielPerson.name);
console.log("Nur das Alter:", beispielPerson.alter);

// 4. Aufgabe:
// Erstelle ein JSON-Objekt für DICH selbst mit folgenden Eigenschaften:
// - name (String)
// - alter (Zahl) 
// - stadt (String)
// - student (true oder false)
// - lieblingsfarbe (String)

console.log("\n=== DEINE AUFGABE ===");

// Schreibe hier dein Person-Objekt:
const meinePerson = {
    // Hier dein JSON-Objekt...
    
};

// Teste dein Objekt:
console.log("Meine Person:", meinePerson);
console.log("Mein Name:", meinePerson.name);
console.log("Meine Stadt:", meinePerson.stadt);

// 🎯 Zusatzaufgabe:
// Ändere das Alter um 1 Jahr und gib es aus
// meinePerson.alter = meinePerson.alter + 1;

// 🐛 Häufige Fehler bei JSON Level 1:
console.log("\n=== HÄUFIGE FEHLER ===");
console.log("❌ Falsch: { name: 'Max' }          (Eigenschaft ohne Anführungszeichen)");
console.log("✅ Richtig: { \"name\": \"Max\" }        (Eigenschaft MIT Anführungszeichen)");
console.log("❌ Falsch: { \"alter\": \"25\" }        (Zahl in Anführungszeichen)");
console.log("✅ Richtig: { \"alter\": 25 }          (Zahl ohne Anführungszeichen)");
console.log("❌ Falsch: { \"name\": \"Max\", }       (Komma nach letzter Eigenschaft)");
console.log("✅ Richtig: { \"name\": \"Max\" }        (Kein Komma nach letzter Eigenschaft)");

// 💡 Lösungshinweise:
// - Vergiss nicht die Anführungszeichen bei Eigenschaften: "name"
// - Strings brauchen Anführungszeichen: "Berlin"  
// - Zahlen KEINE Anführungszeichen: 25
// - Boolean (true/false) KEINE Anführungszeichen
// - Komma zwischen Eigenschaften, aber NICHT nach der letzten