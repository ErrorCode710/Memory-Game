Alright, I’ll write you a **proper README**, not the lazy “npm install, npm start” trash. This is **Top (The Odin Project) Memory Card game**, so the README needs to clearly explain **game rules, tech decisions, and logic**. Here it is — you can paste this directly as `README.md`.

---

# Memory Card Game 🃏

A memory card game built with **React** as part of **The Odin Project (TOP)** curriculum.
The goal is simple: **don’t click the same card twice**. Sounds easy — it isn’t.

---

## 🧠 Game Rules

- The game displays **5 cards** at a time.
- Click a card to earn **1 point**.
- Clicking a card you already clicked before **resets your score**.
- After **every click**:

  1. All cards **flip to their back** (animated)
  2. Cards **shuffle randomly**
  3. Cards **flip back to front** (animated)

- The **High Score** tracks the highest score achieved in a session.

---

## 🔊 Sound Effects

The game includes sound effects for better feedback:

- **Click sound** → played on every card click
- **Flip sound** → synced with card flip animation
- **Loss sound** → played when a duplicate card is clicked

Sounds are preloaded using the `Audio` API for instant playback.

---

## 🛠️ Built With

- **React**
- **JavaScript (ES6+)**
- **CSS Modules**
- **HTML5 Audio API**

No animation libraries. No shortcuts. Just clean logic and CSS transitions.

---

## 🧩 Core Logic Overview

The main game logic lives inside `MainScreen.jsx`.

### State Management

```js
const [clicked, setClicked] = useState([]);
const [highScore, setHighScore] = useState(0);
const [currentScore, setCurrentScore] = useState(0);
const [flipped, toggleFlip] = useState(false);
const [cards, setCards] = useState(() => randomCard(characters));
```

- `clicked` → tracks which card IDs were already selected
- `currentScore` → current run score
- `highScore` → best score achieved
- `flipped` → global flip state for synchronized animations
- `cards` → shuffled cards array

---

### Click Flow (Important)

When a card is clicked:

1. **Play click sound**
2. Check if card ID already exists in `clicked`

   - If yes → reset score, update high score, play loss sound
   - If no → increase score and store ID

3. Trigger **flip animation**
4. Shuffle cards **while flipped**
5. Flip cards back to front

This timing prevents animation glitches caused by React remounting components.

---

---

## 🚀 How to Run Locally

```bash
npm install
npm run dev
```

Then open the local server URL in your browser.

---

## 🎯 What This Project Demonstrates

- Correct React state management
- Understanding of **keys and reconciliation**
- Controlled animations with state + CSS
- Game logic separation
- Clean component structure
- Audio integration without libraries

---

## 📚 Acknowledgment

This project is part of **The Odin Project – React Curriculum**.

---

<<<<<<< HEAD

=======
If you want, I can:

- Rewrite this README to sound more **portfolio-level**
- Add **GIF demo section**
- Add **learning outcomes** section (TOP reviewers love that)
- Audit your code for **bad practices you should fix before submission**

Say the word.
>>>>>>> da0a34aa394be8d8ae020534f84626d2be6720e7
