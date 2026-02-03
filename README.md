📘 Experiment 1 — Bootstrap UI Components  
![Bootstrap UI](EXP2%20SCreeenshots/Screenshot%202026-01-26%20215831.png)

📝 Overview  
In this experiment, I explored Bootstrap UI components by building a simple React interface. The main goal was to understand how Bootstrap helps in designing clean and responsive layouts quickly.

🎯 What I Learned  
- How Bootstrap classes work in real projects  
- Using spacing utilities for better alignment  
- Creating UI sections using cards and forms  

🧩 UI Elements Implemented  
- Bootstrap Buttons (Primary & Secondary styles)  
- Cards for content display  
- Contact form (Name + Email input fields)  
- Responsive container layout  

🛠 Tools & Technologies  
- React + Vite  
- Bootstrap 5  
- HTML / CSS  

🚀 How to Run the Project  
```bash
cd ui-app
npm install
npm run dev
```
📸 Output Preview
-Buttons with multiple variants
-Card-based structure
-A basic contact form layout

✅ Result
This experiment helped me understand how Bootstrap simplifies UI building and makes the design responsive with minimal effort.


---


📗 Experiment 2 — Card UI (Bootstrap)  
![Experiment 2 Preview](<./EXP2 SCreeenshots/card.png>)

📝 Overview  
This experiment focuses on designing a clean **card-based interface** using Bootstrap. It highlights how cards can be used to present content in a structured and visually appealing way.

🎯 Objectives  
- Build UI using Bootstrap Card components  
- Practice spacing, alignment and layout structure  
- Improve UI presentation with Bootstrap utilities  

🧩 Features Implemented  
- Card layout with title, description, and buttons  
- Responsive container styling  
- Clean UI spacing using Bootstrap classes  

🛠 Tech Used  
- React (Vite)  
- Bootstrap 5  
- CSS  

▶️ Run Project  
```bash
cd ui-app
npm install
npm run dev
```

---


📘 Experiment 3 — Responsive Navbar & Landing Page (Bootstrap)  
![Experiment 3 Preview](EXP2%20SCreeenshots/Screenshot%202026-01-26%20215742.png)

📝 Overview  
In this experiment, I created a **responsive navigation bar** along with a **landing page layout** using Bootstrap. The main focus was on responsiveness and clean section structure.

🎯 Objectives  
- Create a responsive Bootstrap Navbar  
- Design a landing page layout using Bootstrap utilities  
- Understand layout responsiveness for different screen sizes  

🧩 Features Implemented  
- Responsive Navbar with menu links  
- Hero/Landing section layout  
- Bootstrap spacing and alignment utilities  
- Mobile-friendly design  

🛠 Tech Used  
- React (Vite)  
- Bootstrap 5  
- CSS  

▶️ Run Project  
```bash
cd ui-app
npm install
npm run dev
```


📕 Experiment 4 — Material UI Page  
![Experiment 4 UI](<./EXP2 SCreeenshots/Screenshot 2026-01-26 215602.png>)

📝 Overview  
This experiment combines multiple Bootstrap components into a single page. It helped me practice designing a full UI with consistent styling and responsiveness.

🎯 Key Learning  
- Combining multiple UI components together  
- Maintaining consistent spacing and layout  
- Creating a complete responsive page  

🧩 Components/Features  
- Buttons + Cards + Form elements  
- Responsive container & spacing utilities  
- Clean UI alignment  

🛠 Tech Stack  
- React (Vite)  
- Bootstrap 5  
- CSS  

🚀 Run Instructions
```bash
cd ui-app
npm install
npm run dev
```

---

# Additional Projects: multipageNAV · myapp · Portfolio

This repository also contains three smaller React projects demonstrating routing, multi-page navigation, and a portfolio/profile page. Each project can be run independently.

## Quick start (for any project)
1. cd into the project folder (e.g., `cd multipageNAV`)
2. npm install
3. npm run dev
4. Open the URL shown by Vite (usually http://localhost:5173 or http://localhost:5174)

---

## 🔹 multipageNAV

**Aim:** Multi-page navigation using `react-router-dom` (Home, About, Contact) with a responsive navbar.

**Requirements:** Node.js, npm, react, react-dom, react-router-dom, vite

<img src="C:\Users\Arya\OneDrive\Desktop\exp1\multipageNAV\image.png" alt="Image not showing"/>
**Folder structure:**
```
multipageNAV/
 ├─ src/
 │  ├─ components/
 │  │  └─ Navbar.jsx
 │  ├─ pages/
 │  │  ├─ Home.jsx
 │  │  ├─ About.jsx
 │  │  └─ Contact.jsx
 │  ├─ App.jsx
 │  ├─ App.css
 │  └─ main.jsx
 └─ package.json
```

**Notes:** Uses `NavLink` for active link styling. If the page shows blank, install `react-router-dom` in that project and restart dev server: `npm install react-router-dom@latest`.

---

## 🔹 myapp

**Aim:** Small SPA with white navbar and gradient hero card. Shows basic UI design with client-side routing.

**Folder structure:**
```
myapp/
 ├─ src/
 │  ├─ components/
 │  │  └─ Navbar.jsx
 │  ├─ pages/
 │  │  ├─ Home.jsx
 │  │  ├─ About.jsx
 │  │  └─ Contact.jsx
 │  ├─ pages/Pages.css
 │  ├─ App.jsx
 │  └─ main.jsx
 └─ package.json
```

**Notes:** Make sure `react-router-dom` is installed for navigation (`npm install react-router-dom`). The Home page contains a gradient hero and a centered white card.

---

## 🔹 Portfolio

**Aim:** Personal portfolio/profile page for Arya Bhat with a centered profile card, avatar, bio, and skills list.

**Folder structure:**
```
Portfolio/
 ├─ src/
 │  ├─ assets/ (profile SVG / images)
 │  ├─ App.jsx
 │  ├─ App.css
 │  └─ main.jsx
 └─ package.json
```

**Notes:** Swap `src/assets/arya.svg` for a real photo (e.g., `arya.jpg`) and update `App.jsx` if you want a photo instead of the SVG.

---

## Final Notes
- For a production build run `npm run build` in any project, then `npm run preview` to test the build locally.
- If you want, I can add screenshots and per-project README files and link to them here.

---

✍️ Developed / Maintained by Arya Bhat
