import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, History, Wallet, Menu, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Layout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/add', icon: PlusCircle, label: 'Add Expense' },
        { path: '/history', icon: History, label: 'History' },
    ];

    const Sidebar = () => (
        <div className="flex flex-col h-full">
            <div className="p-8">
                <div className="flex items-center gap-3 text-white mb-2">
                    <div className="p-2 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg shadow-lg shadow-indigo-500/20">
                        <Wallet className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Spend<span className="text-indigo-400">Manager</span></h1>
                </div>
                <p className="text-xs text-gray-500 ml-12">v2.0 Premium</p>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                        {item.path === location.pathname && (
                            <motion.div
                                layoutId="activeNav"
                                className="absolute left-0 w-1 h-8 bg-indigo-500 rounded-r-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-white/5">
                <button className="nav-item w-full">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-900 flex text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 glass-panel border-r border-white/5 fixed inset-y-0 z-20">
                <Sidebar />
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 w-full glass-panel z-30 px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg">
                        <Wallet className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg">SpendManager</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg bg-white/5 text-white">
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="md:hidden fixed inset-0 z-20 bg-slate-900 pt-20"
                    >
                        <Sidebar />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-4 md:p-8 pt-20 md:pt-8 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
