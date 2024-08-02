import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'; // Certifique-se de que o nome está correto
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import CreateUser from './pages/createUser/CreateUser';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/createUser" element={
        <ProtectedRoute>
          <CreateUser />
        </ProtectedRoute>
      } />
    </Routes>
  </Router>
);

export default App;
