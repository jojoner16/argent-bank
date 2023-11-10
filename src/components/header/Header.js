import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import '../../styles/components/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSignOut } from '../../features/login/loginSlice';

function Header() {
  const token = useSelector((state) => state.user.token);
  const location = useLocation();
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // Ajout d'une confirmation avant de déconnecter
    const confirmSignOut = window.confirm('Are you sure you want to sign out?');
    if (confirmSignOut) {
      localStorage.clear();
      dispatch(setSignOut({ token }));
      // Redirige l'utilisateur vers la page d'accueil
      navigate('/');
    }
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
        {location.pathname === '/profile' && (
          <Link to="/profile" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {dataUser.firstName}
          </Link>
        )}
        {location.pathname === '/profile' && (
          <Link to="/" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
        {location.pathname !== '/profile' && (
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
