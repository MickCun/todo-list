# 📝 React Todo App

A simple, clean Todo List built with **React + Vite**.  
I made this project to practice working with React state, localStorage, and UI layout.

---

## 🚀 Features

- Add new todos  
- Delete tasks  
- Todos stay saved using **localStorage**  
- Lightweight and fast  
- Minimal UI with button hover animations  
- Responsive card layout  

---

## 🛠️ Tech Stack

- **React** (Hooks)
- **Vite**
- **localStorage API**
- **CSS**

---

## 📦 Installation

Clone the repo:

```bash
git clone https://github.com/MickCun/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

## 🧠 How It Works

- `todos` and `task` are stored with `useState`
- Two `useEffect` hooks keep everything synced with localStorage
- Deleting a todo uses array filtering based on index
- The UI is centered in a white card with rounded corners and subtle shadowing

---

## 📁 File Structure

```
src/
  App.jsx
  App.css
  main.jsx
public/
  index.html
```

---

## ✨ Future Improvements

- Add "completed" state for tasks  
- Option to edit todos  
- Drag & drop sorting  
- Dark mode toggle  

--

Created by Michael Cunningham 
Thanks for reading :)