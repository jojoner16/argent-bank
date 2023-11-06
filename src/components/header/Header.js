import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import '../../styles/components/Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Redirige l'utilisateur vers la page d'accueil
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {location.pathname === '/profil' && (
          <Link to="/profil" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
        )}
        {location.pathname === '/profil' && (
          <Link to="/" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
        {location.pathname !== '/profil' && (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
