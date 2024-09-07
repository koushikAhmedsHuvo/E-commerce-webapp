import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // If user is not logged in, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // If user is logged in, render the protected component
  return element;
};

export default ProtectedRoute;
