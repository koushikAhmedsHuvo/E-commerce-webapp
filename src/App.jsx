import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import DashBoard from './components/Dashboard/DashBoard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Produccts from './components/Products/Produccts';
import Store from './components/Page/Store';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/dashboard" element={<Store />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
