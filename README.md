# Random Color Generator

> A React app to generate, save, and manage color patterns with localStorage persistence, history, and profiles.

---

## Student Information

* **Name:** Aayush Bhandari
* **Course / Program:** BCA / React Development
* **Instructor:**Mr.Dipak Shrestha
* **Semester / Year:** 3rd Semester / 2026

---

## Project Overview

Random Color Generator is a modern color tool that lets users generate random colors, enter custom hex values, copy to clipboard, maintain history, and save color profiles in the browser using localStorage.

---

## Objectives

* Build an interactive React UI for color generation
* Persist selected color and history using localStorage
* Implement profile save/load/delete with metadata
* Support refreshed UI state and cross-session persistence
* Ensure responsive and accessible design

---

## Technologies Used

* React.js (hooks, functional components)
* Vite (build tool)
* JavaScript (ES6+)
* CSS / inline styling
* localStorage API

---

## Key Features

* Random color generator (#RRGGBB)
* Custom hex input with validation
* Copy color code to clipboard
* Color history and quick select
* Profile management (Save, Load, Delete)
* View persistence across refresh (home/app state and last active color)
* Dark/light adaptive styling

---

## Screens

* Home screen with start button
* App screen with color panel, controls, history, and profiles

---

## Installation & Setup

```bash
# Clone repository
git clone https://github.com/Samriddhicollege/BCA-2081-3rdSem-ReactClass-RandomColorGenerator.git

# Go to project folder
cd ReactProject/Aayush-Project

# Install dependencies
npm install

# Run app
npm run dev

# Production build
npm run build
```

---

## Project Structure

```
Aayush-Project/
├── src/
│   ├── Project/
│   │   ├── Random_Color.jsx
│   │   ├── components/
│   │   │   ├── AppScreen.jsx
│   │   │   ├── HomeScreen.jsx
│   │   │   ├── ColorDisplay.jsx
│   │   │   ├── History.jsx
│   │   │   └── ColorStats.jsx
│   │   └── utils/useLocalStorage.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

---

## Usage

1. Click **Start Exploring** on home screen.
2. Click **Generate Random** to see new colors.
3. Enter a hex code (e.g., `#FF6347`) to set a custom color.
4. Click **Copy** to copy current color code.
5. Color history shows recent colors; click any color to set it.
6. Save current color as a profile with a name.
7. View saved profiles, load or delete them.

---

## Notes

* The app remembers the last active screen (home/app), selected color, history, and saved profiles using localStorage.
* Color profile history is limited to latest 20 profiles.
* Color history stores latest 10 colors.

---

## Future Enhancements

* Add multi-color palette save (e.g., top 5 colors per profile)
* Add export/import JSON options
* Add theme toggle (light/dark) + high contrast styles
* Add unit tests / end-to-end tests

---
## Acknowledgement

> I would like to thank my instructor **Mr. Dipak Shrestha** for guidance and support throughout this project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission.


