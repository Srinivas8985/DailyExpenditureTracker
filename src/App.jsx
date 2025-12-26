import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  // Load initial data from LocalStorage
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  // Save to LocalStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [{ ...expense, id: Math.random().toString() }, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => prevExpenses.filter(exp => exp.id !== expenseId));
  };

  // Calculate total
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="app-container">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-brand mb-2">
            My Daily Expenses
          </h1>
          <p className="text-gray-500">Track your daily expenses effortlessly</p>
        </header>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left Column: Form and Total */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-gradient-brand text-white p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform">
              <h3 className="text-indigo-100 text-sm font-medium uppercase tracking-wider mb-1">Total Spent</h3>
              <p className="text-4xl font-bold">${totalExpenses.toFixed(2)}</p>
            </div>

            <ExpenseForm onAddExpense={addExpenseHandler} />
          </div>

          {/* Right Column: List */}
          <div className="md:col-span-3">
            <ExpenseList expenses={expenses} onDelete={deleteExpenseHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
