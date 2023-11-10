import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Footer from '../components/footer/Footer';
import Login from '../pages/login/Login';
import Profile from '../pages/profile/Profile';
import NotFound from '../pages/error/Error';
import { useSelector } from 'react-redux';

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.token !== null);
  // permet de modifier le titre de la page
  useEffect(() => {
    document.title = 'Argent Bank - Home Page';
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Utilise une fonction pour conditionner l'accès à la page de profil */}
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/404" />}
          />
          {/* Route pour toutes les autres pages non définies */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
