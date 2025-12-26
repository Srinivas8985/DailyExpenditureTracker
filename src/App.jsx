import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import Expenses from './pages/Expenses';
import { useExpenses } from './hooks/useExpenses';
import './App.css';

// Context Wrapper to pass data to Outlet
const AppLayout = () => {
  const expenseData = useExpenses();
  return (
    <Layout>
      <Outlet context={expenseData} />
    </Layout>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddTransaction />} />
          <Route path="history" element={<Expenses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
