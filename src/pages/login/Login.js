import React, { useState } from 'react';
import '../../styles/pages/Login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignIn } from '../../features/login/loginSlice';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [rememberMe, setRememberMe] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.status === 200) {
        const dataUser = await response.json();
        dispatch(setSignIn({ dataUser }));
        localStorage.setItem('token', dataUser.body?.token);

        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('email', email);
        } else {
          localStorage.removeItem('email');
        }

        navigate('/profile');
      } else {
        localStorage.removeItem('token');
        setErrorMsg('Erreur d’identifiant ou de mot de passe');
        console.log(
          'Connexion Impossible : Erreur Identifiant ou Mot de passe'
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <form>
          <div className="input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button onClick={handleLogin} className="sign-in-button">
            Sign In
          </button>
          <div className="error-msg">{errorMsg}</div>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
