import React, { useEffect, useState } from 'react';
import '../../styles/pages/Profil.css';
import { setGetProfile } from '../../features/profile/profileSlice';
import { useSelector, useDispatch } from 'react-redux';

function ProfilePage() {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.profile);
  const token = useSelector((state) => state.user.token);
  const [toggleEditUsername, setToggleEditUsername] = useState(false);

  async function fetchData() {
    try {
      const data = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
        body: JSON.stringify({
          status: 0,
          message: 'string',
          body: {
            id: 'string',
            email: 'string',
          },
        }),
      });

      if (data.status === 200) {
        const responseData = await data.json();
        dispatch(setGetProfile({ data: responseData }));
      } else if (data.status === 401) {
        console.log(
          "Erreur d'authentification : Identifiant ou Mot de passe incorrect"
        );
      } else {
        console.log('Connexion Impossible : Erreur inconnue');
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  });

  const handleEditUsername = () => {
    setToggleEditUsername(!toggleEditUsername);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {dataUser.firstName + ' ' + dataUser.lastName + ' !'}
        </h1>
        <button onClick={handleEditUsername} className="edit-button">
          {!toggleEditUsername ? 'Edit Name' : 'Close'}
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;