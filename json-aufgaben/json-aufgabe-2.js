// 📋 JSON AUFGABE 2: Person mit Arrays
// Erweitere dein JSON-Wissen um Arrays und verschachtelte Objekte!

// 1. Arrays in JSON:
// Arrays speichern mehrere Werte in einer Liste
// Praktische Anwendungen:
// - Liste von Hobbies einer Person
// - Telefonnummern (privat, geschäftlich, mobil)
// - Soziale Netzwerke Profile
// - Einkaufsliste mit mehreren Produkten
// - Freundesliste in einer App

// 2. Array-Syntax in JSON:
// - Arrays stehen in [eckigen Klammern]
// - Elemente werden durch Kommas getrennt
// - Zugriff mit Index: person.hobbies[0] (erstes Element)

// 3. Beispiel - Person mit Hobbies und Kontakt:
console.log("=== BEISPIEL ERWEITERTE PERSON ===");

const beispielPerson = {
    "name": "Max Mustermann",
    "alter": 32,
    "stadt": "Hamburg", 
    "hobbies": ["Fußball", "Kochen", "Lesen"],
    "kontakt": {
        "email": "max@example.com",
        "telefon": "0123456789"
    },
    "sprachen": ["Deutsch", "Englisch", "Spanisch"]
};

console.log("Komplettes Objekt:", beispielPerson);
console.log("Alle Hobbies:", beispielPerson.hobbies);
console.log("Erstes Hobby:", beispielPerson.hobbies[0]);
console.log("Email:", beispielPerson.kontakt.email);
console.log("Anzahl Sprachen:", beispielPerson.sprachen.length);

// 4. Aufgabe:
// Erstelle ein JSON-Objekt für eine Person deiner Wahl mit:
// - name (String)
// - alter (Zahl)
// - wohnort (String) 
// - hobbies (Array mit mindestens 3 Hobbies)
// - kontakt (Objekt mit email und telefon)
// - lieblingsessen (Array mit mindestens 2 Gerichten)
// - hatHaustier (true oder false)

console.log("\n=== DEINE AUFGABE ===");

const meinePerson = {
    // Hier dein erweitertes JSON-Objekt...
    
};

// Teste dein Objekt:
console.log("Meine Person:", meinePerson);
console.log("Meine Hobbies:", meinePerson.hobbies);
console.log("Mein erstes Hobby:", meinePerson.hobbies[0]);
console.log("Meine Email:", meinePerson.kontakt.email);

// 🎯 Zusatzaufgaben:
console.log("\n=== ZUSATZAUFGABEN ===");

// 1. Füge ein neues Hobby hinzu:
// meinePerson.hobbies.push("Neues Hobby");

// 2. Gib das letzte Lieblingsessen aus:
// console.log("Letztes Lieblingsessen:", meinePerson.lieblingsessen[meinePerson.lieblingsessen.length - 1]);

// 3. Ändere die Telefonnummer:
// meinePerson.kontakt.telefon = "0987654321";

// 🐛 Häufige Fehler bei JSON Level 2:
console.log("\n=== HÄUFIGE FEHLER ===");
console.log("❌ Falsch: \"hobbies\": [Fußball, Lesen]     (Array-Elemente ohne Anführungszeichen)");
console.log("✅ Richtig: \"hobbies\": [\"Fußball\", \"Lesen\"] (Array-Elemente MIT Anführungszeichen)");
console.log("❌ Falsch: person.kontakt,email              (Komma statt Punkt)");
console.log("✅ Richtig: person.kontakt.email             (Punkt für verschachtelte Objekte)");
console.log("❌ Falsch: person.hobbies.0                  (Index ohne eckige Klammern)");
console.log("✅ Richtig: person.hobbies[0]                (Index MIT eckigen Klammern)");

// 🧠 Mini-Quiz:
console.log("\n=== MINI-QUIZ ===");
console.log("- Wie greifst du auf das 2. Element eines Arrays zu?");
console.log("- Was gibt array.length zurück?");
console.log("- Wie fügst du ein Element zu einem Array hinzu?");
console.log("- Wie greifst du auf verschachtelte Objekt-Eigenschaften zu?");

// 💡 Lösungshinweise:
// - Array-Elemente sind Strings → brauchen "Anführungszeichen"
// - Verschachtelte Objekte: person.kontakt.email (mit Punkten)
// - Array-Zugriff: person.hobbies[0] (mit eckigen Klammern und Index)
// - Arrays können Strings, Zahlen, Objekte enthalten
// - Komma zwischen Array-Elementen, aber nicht nach dem letzten