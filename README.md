# Hunde Bingo

Ein einfaches, mobiles Bingo-Spiel mit Hunderassen. Perfekt für unterwegs oder zum Zeitvertreib mit Freunden.

## Demo

Du kannst die App direkt in deinem Browser ausprobieren:
[Live Demo](https://andi.github.io/02_Hundebingo/) *(Pfad anpassen)*

## Funktionen

- 🎲 **Zufälliges Bingo-Board** – 9 zufällige Hunderassen pro Spiel
- 👆 **Einfache Bedienung** – Klicke auf die Rassen, die du gesehen hast
- 🎉 **Gewinn-Erkennung** – Automatische Erkennung von vollen Reihen (horizontal, vertikal, diagonal)
- 🌓 **Darkmode** – Umschaltbarer Darkmode mit Persistenz
- 📱 **Responsive Design** – Optimiert für Mobile und Desktop
- 🔄 **Neues Spiel** – Button zum Zurücksetzen des Boards

## Screenshots

| Hellmodus | Darkmode |
|-----------|----------|
| ![Light Mode](screenshots/light.png) | ![Dark Mode](screenshots/dark.png) |

*(Screenshots hochladen oder Pfade anpassen)*

## Installation

### Option 1: Direkt verwenden
Einfach die `index.html` in einem Browser öffnen.

### Option 2: Lokale Entwicklung
1. Repository klonen:
   ```bash
   git clone https://github.com/andi/02_Hundebingo.git
   cd 02_Hundebingo
   ```
2. `index.html` im Browser öffnen oder einen lokalen Server starten:
   ```bash
   # Mit Python 3
   python -m http.server 8000
   # Dann http://localhost:8000 öffnen
   ```

### Option 3: Als PWA installieren
Die App unterstützt PWA (Progressive Web App). Du kannst sie:
- Auf dem Handy zum Home-Bildschirm hinzufügen
- Auf dem Desktop als App installieren (Browser-Funktion)

## Technologien

- **HTML5** – Struktur
- **CSS3** – Styling mit CSS-Variablen für Theme-Unterstützung
- **JavaScript (Vanilla)** – Spiel-Logik ohne Frameworks
- **PWA** – Offline-fähig mit Manifest und Icons

## Projekt-Struktur

```
02_Hundebingo/
├── index.html          # Hauptdatei
├── style.css           # Stile und Darkmode
├── script.js           # Spiel-Logik
├── manifest.json       # PWA Manifest
├── README.md           # Diese Datei
└── icons/              # App-Icons für PWA
```

## Anpassungen

### Hunderassen ändern
Bearbeite die `dogBreeds`-Liste in `script.js`:
```javascript
const dogBreeds = [
    { name: "Labrador", emoji: "🐕" },
    { name: "Schäferhund", emoji: "🐕‍🦺" },
    // Weitere Rassen hinzufügen...
];
```

### Farben anpassen
Die Farben sind als CSS-Variablen in `style.css` definiert:
```css
:root {
    --bg-color: #f8f4e7;
    --text-color: #5a3e2a;
    --accent-color: #c78766;
    /* ... */
}

body.dark-mode {
    --bg-color: #2a1e18;
    --text-color: #f8f4e7;
    /* ... */
}
```

## Roadmap / ToDo

### 🚧 Offene Aufgaben
- Emojis durch Fotos austauschen

### ✅ Erledigte Aufgaben
- ✅ Zentrisch auf Handy
- ✅ Logo auch im Browser am PC
- ✅ Timer bei Glückwunsch entfernen
- ✅ Wenn „Neues Spiel“ soll die Meldung soft weg
- ✅ Darkmode toggle

## Browser-Unterstützung

Getestet mit:
- Chrome (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (iOS)
- Edge

## Lizenz

Dieses Projekt ist Open Source und kann frei verwendet werden. Siehe [MIT License](LICENSE) für Details.

---

**Autor:** Mistral Vibe  
**Erstellt:** 2026  
**Version:** 1.0.0
