import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import Store from './components/Page/Store';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; // Import the ProtectedRoute component
import OrderPage from './components/Page/OrderPage';

import Store1 from './components/Page/Store1';
import Store2 from './components/Page/Store2';

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
            <Route
              path="/category/1"
              element={<ProtectedRoute element={<Store />} />}
            />
            <Route
              path="/category/2"
              element={<ProtectedRoute element={<Store1 />} />}
            />
            <Route
              path="/category/3"
              element={<ProtectedRoute element={<Store2 />} />}
            />
            <Route
              path="/order"
              element={<ProtectedRoute element={<OrderPage />} />}
            />
            {/* <Route path="/order" element={<OrderPage />} /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
