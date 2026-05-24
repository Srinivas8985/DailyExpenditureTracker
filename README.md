# My Spend Manager 💰

**A React-based Expense Tracker for Version Control Systems Academic Project**

## 📖 Introduction
My Spend Manager is a clean, responsive, and beginner-friendly web application designed to track daily personal expenses. Built with **React (Vite)** and **Tailwind CSS**, it features a modern UI with real-time total calculation and data persistence using Browser LocalStorage.

This project was developed specifically to demonstrate proficiency in **Git & GitHub** operations, including branching, merging, conflict resolution, and version control best practices.

## 🛠 Technologies Used
- **Frontend Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS + Custom CSS (`App.css`)
- **Language:** JavaScript (ES6+)
- **Version Control:** Git & GitHub
- **Package Manager:** NPM

## ✨ Core Features
- **Add Expense:** Add new transactions with title, amount, and category.
- **View History:** List of recent transactions.
- **Delete Expense:** Remove incorrect entries.
- **Total Calculation:** Real-time update of total spending.
- **Persistence:** data is saved to LocalStorage, so it remains after refresh.
- **Responsive Design:** Works seamlessly on desktop and mobile.

---

## 🚀 Git Workflow & Branches
This project follows a structured Git workflow to demonstrate collaborative development practices.

### 🌿 Branches Created
| Branch Name | Purpose |
|-------------|---------|
| `main` / `master` | The stable, production-ready code. |
| `feature/add-expense` | Implementation of the `ExpenseForm` and logic. (Merged) |
| `experiment/ui-tweak` | Testing a new header title for A/B testing. (Merged) |
| `test` | A branch dedicated to testing configurations. |
| `bugfix` | A branch for simulating bug fixes. |

### 🔀 Merge Conflict Demonstration
An intentional merge conflict was created and resolved to demonstrate conflict handling skills.

1. **Scenario:**
   - On `experiment/ui-tweak`, the header was changed to: `Experimental Spend Tracker`
   - On `main`, the header was changed to: `My Daily Expenses`
   - Both changes happened on the **same line** in `App.jsx`.

2. **Conflict Trigger:**
   - Attempting to merge `experiment/ui-tweak` into `main` resulted in a **CONFLICT**.

3. **Resolution:**
   - Detailed conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) were analyzed.
   - The team decided to keep the **Main Branch** version (`My Daily Expenses`) as the final title.
   - The file was edited, saved, and committed.

---

## 📸 Screenshots
*(Placeholders for Viva/Report)*

| Add Expense | Expense List |
|:-----------:|:------------:|
| ![Add Expense](./screenshots/add-expense.png) | ![List](./screenshots/list.png) |

---

## 🏁 How to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Srinivas8985/DailyExpenditureTracker.git
   cd DailyExpenditureTracker
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🎓 Learning Outcomes
- **React Components:** Mastered functional components, props, and state (`useState`, `useEffect`).
- **Git Basics:** formatting commits, standardizing messages using conventional commits (e.g., `feat:`, `fix:`, `chore:`).
- **Branch Management:** Understanding the importance of feature branches vs. main branch.
- **Conflict Resolution:** Gained confidence in manually resolving file conflicts without data loss.

---
**Submitted by:** Srinivas
**Course:** DevOps & Version Control Systems
