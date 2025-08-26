// 📋 JSON AUFGABE 3: Komplexe Firma-Struktur
// Meistere verschachtelte Arrays und Objekte wie in echten APIs!

// 1. Komplexe JSON-Strukturen:
// In der echten Welt sind JSON-Daten oft verschachtelt
// Praktische Anwendungen:
// - API-Antworten von Webservices
// - Benutzerdaten mit Profil, Einstellungen, Historie
// - E-Commerce: Produkte mit Kategorien, Bewertungen, Varianten
// - Soziale Netzwerke: Posts mit Kommentaren und Likes
// - Unternehmen: Mitarbeiter mit Abteilungen und Projekten

// 2. Verschachtelte Strukturen verstehen:
// - Arrays von Objekten: [{"name": "..."}, {"name": "..."}]
// - Objekte mit Arrays: {"mitarbeiter": [Personen-Array]}
// - Mehrfach verschachtelt: firma.abteilungen[0].mitarbeiter[1].projekte[0]

// 3. Beispiel - Eine kleine Firma:
console.log("=== BEISPIEL FIRMA ===");

const beispielFirma = {
    "firmenname": "TechStart GmbH",
    "gegründet": 2018,
    "standorte": ["Berlin", "München"],
    "abteilungen": [
        {
            "name": "Entwicklung",
            "leiter": "Sarah Weber",
            "mitarbeiter": [
                {
                    "name": "Tom Klein",
                    "position": "Frontend Developer", 
                    "projekte": ["Website", "Mobile App"]
                },
                {
                    "name": "Lisa Müller",
                    "position": "Backend Developer",
                    "projekte": ["API", "Datenbank"]
                }
            ]
        },
        {
            "name": "Marketing", 
            "leiter": "Peter Schmidt",
            "mitarbeiter": [
                {
                    "name": "Anna Bauer",
                    "position": "Social Media Manager",
                    "projekte": ["Instagram", "LinkedIn"]
                }
            ]
        }
    ]
};

console.log("Firmenname:", beispielFirma.firmenname);
console.log("Erste Abteilung:", beispielFirma.abteilungen[0].name);
console.log("Erster Mitarbeiter der ersten Abteilung:", beispielFirma.abteilungen[0].mitarbeiter[0].name);
console.log("Projekte von Tom:", beispielFirma.abteilungen[0].mitarbeiter[0].projekte);

// 4. Aufgabe:
// Erstelle eine JSON-Struktur für eine SCHULE mit:
// - schulname (String)
// - typ (String, z.B. "Gymnasium")  
// - schüleranzahl (Zahl)
// - klassen (Array von Klassen-Objekten)
//   
// Jede Klasse soll haben:
// - klassenname (z.B. "5a")
// - klassensprecher (String mit Namen)
// - schüler (Array von Schüler-Objekten)
//
// Jeder Schüler soll haben:  
// - name (String)
// - alter (Zahl)
// - lieblingsfächer (Array von Fächern)
// - note_durchschnitt (Zahl zwischen 1.0 und 6.0)

console.log("\n=== DEINE AUFGABE ===");

const meineSchule = {
    // Hier deine komplexe Schul-Struktur...
    // Tipp: Erstelle mindestens 2 Klassen mit je 2-3 Schülern
    
};

// Teste deine Struktur:
console.log("Schulname:", meineSchule.schulname);
console.log("Erste Klasse:", meineSchule.klassen[0].klassenname);
console.log("Erster Schüler der ersten Klasse:", meineSchule.klassen[0].schüler[0].name);

// 🎯 Zusatzaufgaben:
console.log("\n=== ZUSATZAUFGABEN ===");

// 1. Gib alle Klassennamen aus:
// meineSchule.klassen.forEach(klasse => console.log(klasse.klassenname));

// 2. Finde den Schüler mit dem besten Notendurchschnitt:
// let besterSchüler = meineSchule.klassen[0].schüler[0];
// for (let klasse of meineSchule.klassen) {
//     for (let schüler of klasse.schüler) {
//         if (schüler.note_durchschnitt < besterSchüler.note_durchschnitt) {
//             besterSchüler = schüler;
//         }
//     }
// }

// 3. Zähle alle Schüler in der Schule:
// let gesamtSchüler = 0;
// meineSchule.klassen.forEach(klasse => gesamtSchüler += klasse.schüler.length);

// 🚀 Master-Challenge: 
// Verwende die Array-Operatoren aus den anderen Aufgaben!
console.log("\n=== MASTER-CHALLENGE ===");
// - Verwende filter() um nur Schüler mit Notendurchschnitt unter 2.0 zu finden
// - Verwende map() um ein Array aller Schülernamen zu erstellen  
// - Verwende find() um einen bestimmten Schüler zu finden
// - Verwende reduce() um den Gesamt-Notendurchschnitt zu berechnen

// 🐛 Häufige Fehler bei JSON Level 3:
console.log("\n=== HÄUFIGE FEHLER ===");
console.log("❌ Falsch: firma.abteilungen.0.name          (Index ohne eckige Klammern)");
console.log("✅ Richtig: firma.abteilungen[0].name         (Index MIT eckigen Klammern)");
console.log("❌ Falsch: Verschachtelte Kommas vergessen    (zwischen Array-Objekten)");
console.log("✅ Richtig: Komma zwischen jedem Objekt im Array");
console.log("❌ Falsch: Klammern nicht richtig geschlossen [} oder {]");
console.log("✅ Richtig: Arrays [] und Objekte {} richtig schließen");

// 🧠 Profi-Quiz:
console.log("\n=== PROFI-QUIZ ===");
console.log("- Wie greifst du auf das 2. Projekt des 1. Mitarbeiters zu?");
console.log("- Wie fügst du einen neuen Mitarbeiter zu einer Abteilung hinzu?");
console.log("- Was ist der Unterschied zwischen [] und {}?");
console.log("- Wie iterierst du durch alle Mitarbeiter aller Abteilungen?");

// 💡 Lösungshinweise:
// - Bei tiefer Verschachtelung: Schritt für Schritt aufbauen
// - Arrays von Objekten: [{"eigenschaft": "wert"}, {"eigenschaft": "wert"}]
// - Klammern-Paare zählen: Jede { braucht eine }, jede [ braucht eine ]
// - JSON-Validator online verwenden wenn unsicher
// - Kommas zwischen allen Array-Elementen und Objekt-Eigenschaften
// - Einrückung hilft beim Verstehen der Struktur

// 🎓 Glückwunsch!
// Du kennst jetzt alle wichtigen JSON-Konzepte für echte Projekte!