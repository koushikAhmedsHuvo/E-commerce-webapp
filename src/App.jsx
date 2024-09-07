import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import Store from './components/Page/Store';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; // Import the ProtectedRoute component
import OrderPage from './components/Page/OrderPage';
import TestComponent from './components/Auth/TestComponent';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Store />} />}
            />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
