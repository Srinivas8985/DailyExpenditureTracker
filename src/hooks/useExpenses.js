import { useState, useEffect } from 'react';

export const useExpenses = () => {
    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem('expenses');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

    const addExpense = (expense) => {
        const newExpense = { ...expense, id: Math.random().toString(), date: new Date().toISOString() };
        setExpenses((prev) => [newExpense, ...prev]);
    };

    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((exp) => exp.id !== id));
    };

    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    return { expenses, addExpense, deleteExpense, totalExpenses };
};
