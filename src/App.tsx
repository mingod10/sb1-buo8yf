import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import EmployeesPage from './components/EmployeesPage';
import AdministratorsPage from './components/AdministratorsPage';
import RequestCardsPage from './components/RequestCardsPage';
import ReloadCardsPage from './components/ReloadCardsPage';
import BenefitsPage from './components/BenefitsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onNavigate={setCurrentPage} />
      <main className="flex-1 overflow-y-auto p-6">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'employees' && <EmployeesPage />}
        {currentPage === 'administrators' && <AdministratorsPage />}
        {currentPage === 'requestcards' && <RequestCardsPage />}
        {currentPage === 'reloadcards' && <ReloadCardsPage />}
        {currentPage === 'benefits' && <BenefitsPage />}
        {!['dashboard', 'employees', 'administrators', 'requestcards', 'reloadcards', 'benefits'].includes(currentPage) && (
          <div>Unknown page: {currentPage}</div>
        )}
      </main>
    </div>
  );
}

export default App;