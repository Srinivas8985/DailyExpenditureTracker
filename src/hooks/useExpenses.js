import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';

export const useExpenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    // Custom budget state (could be moved to backend later)
    const [budget, setBudget] = useState(() => {
        return parseInt(localStorage.getItem('monthlyBudget')) || 2000;
    });

    const updateBudget = (amount) => {
        setBudget(amount);
        localStorage.setItem('monthlyBudget', amount);
    };

    const fetchExpenses = useCallback(async () => {
        if (!user) return;
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };
            const { data } = await axios.get('http://localhost:5000/api/expenses', config);
            setExpenses(data);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        } finally {
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        fetchExpenses();
    }, [fetchExpenses]);

    const addExpense = async (expenseData) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };
            const { data } = await axios.post('http://localhost:5000/api/expenses', expenseData, config);
            setExpenses((prev) => [data, ...prev]);
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    const deleteExpense = async (id) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` },
            };
            await axios.delete(`http://localhost:5000/api/expenses/${id}`, config);
            setExpenses((prev) => prev.filter((exp) => exp._id !== id));
        } catch (error) {
            console.error("Error deleting expense:", error);
        }
    };

    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    return {
        expenses,
        addExpense,
        deleteExpense,
        totalExpenses,
        loading,
        budget,
        updateBudget
    };
};
