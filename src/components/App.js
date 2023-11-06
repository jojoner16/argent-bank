import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Footer from '../components/footer/Footer';
import Login from '../pages/login/Login';
import Profil from '../pages/profil/Profil';

const App = () => {
  // useEffect permet de modifier le titre de la page
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
          <Route path="/profil" element={<Profil />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
