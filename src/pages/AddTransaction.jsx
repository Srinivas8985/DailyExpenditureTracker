import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Save, XCircle } from 'lucide-react';

const AddTransaction = () => {
    const { addExpense } = useOutletContext();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) return;

        addExpense({
            title,
            amount: parseFloat(amount),
            category,
        });

        navigate('/'); // Redirect to dashboard
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
        >
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-pink-500" />

                <h2 className="text-3xl font-bold mb-6">Add New Transaction</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="e.g. Netflix Subscription"
                            className="input-neon"
                            autoFocus
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Amount</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="input-neon pl-8"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="input-neon appearance-none cursor-pointer"
                            >
                                <option value="Food">🍔 Food & Dining</option>
                                <option value="Transport">🚗 Transport</option>
                                <option value="Utilities">💡 Utilities</option>
                                <option value="Entertainment">🎬 Entertainment</option>
                                <option value="Shopping">🛍️ Shopping</option>
                                <option value="Health">🏥 Health</option>
                                <option value="Other">📦 Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="flex-1 btn-ghost-neon flex justify-center items-center gap-2"
                        >
                            <XCircle className="w-5 h-5" /> Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 btn-neon flex justify-center items-center gap-2"
                        >
                            <Save className="w-5 h-5" /> Save Transaction
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default AddTransaction;
