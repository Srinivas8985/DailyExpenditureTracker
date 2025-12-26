import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Wallet, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ title, amount, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="glass-card p-6 relative overflow-hidden"
    >
        <div className={`absolute top-0 right-0 p-4 opacity-10 ${color}`}>
            <Icon className="w-24 h-24" />
        </div>
        <div className="relative z-10">
            <div className={`p-3 rounded-xl w-fit mb-4 ${color} bg-opacity-20`}>
                <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
            </div>
            <p className="text-gray-400 text-sm font-medium">{title}</p>
            <h3 className="text-3xl font-bold mt-1 text-white">${amount.toFixed(2)}</h3>
        </div>
    </motion.div>
);

const Dashboard = () => {
    const { expenses, totalExpenses } = useOutletContext();

    const recentExpenses = expenses.slice(0, 5);
    const highestExpense = expenses.length > 0 ? Math.max(...expenses.map(e => e.amount)) : 0;
    // Mock monthly budget for visual
    const budget = 2000;
    const health = Math.min((totalExpenses / budget) * 100, 100);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                <p className="text-gray-400">Welcome back! Here's your financial overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Total Spent"
                    amount={totalExpenses}
                    icon={Wallet}
                    color="bg-indigo-500"
                    delay={0.1}
                />
                <StatCard
                    title="Monthly Budget"
                    amount={budget}
                    icon={TrendingUp}
                    color="bg-emerald-500"
                    delay={0.2}
                />
                <StatCard
                    title="Average Transaction"
                    amount={expenses.length ? totalExpenses / expenses.length : 0}
                    icon={TrendingDown}
                    color="bg-pink-500"
                    delay={0.3}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Budget Health */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-8 rounded-2xl"
                >
                    <h3 className="text-xl font-bold mb-6">Budget Health</h3>
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-400 bg-indigo-500/10">
                                    Used
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-indigo-400">
                                    {health.toFixed(0)}%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-slate-800 border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${health}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-pink-500"
                            />
                        </div>
                        <p className="text-sm text-gray-400 mt-4">
                            You have spent <b>${totalExpenses.toFixed(2)}</b> out of your <b>${budget}</b> monthly goal.
                        </p>
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-panel p-8 rounded-2xl"
                >
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">Recent Activity</h3>
                        <Link to="/history" className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {recentExpenses.length === 0 ? (
                            <p className="text-gray-500 italic">No recent transactions.</p>
                        ) : (
                            recentExpenses.map((expense) => (
                                <div key={expense.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                            {expense.category[0]}
                                        </div>
                                        <div>
                                            <p className="font-semibold">{expense.title}</p>
                                            <p className="text-xs text-gray-400">{expense.category}</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-white">-${expense.amount.toFixed(2)}</span>
                                </div>
                            ))
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
