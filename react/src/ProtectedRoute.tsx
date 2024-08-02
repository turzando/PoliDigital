import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import AuthService from './services/AuthService';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();

  return AuthService.isAuthenticated() ? children : <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedRoute;
