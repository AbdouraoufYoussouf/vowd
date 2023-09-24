import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Loader } from '../functions/loader/Loader';

const ProtectedRoute = ({ redirectPath = '/', children }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    // Afficher un indicateur de chargement si le contexte est en cours de chargement
    return <Loader/>;
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
