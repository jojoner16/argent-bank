import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGetProfile,
  updateFirstName,
  updateLastName,
} from '../../features/profile/profileSlice';
import '../../styles/components/EditUserName.css';

const EditUsername = ({ onCancel }) => {
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const token = useSelector((state) => state.user.token);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mise à jour les valeurs du prénom et du nom dans le store Redux.
    dispatch(updateFirstName({ newFirstName }));
    dispatch(updateLastName({ newLastName }));

    try {
      const response = await fetch(
        'http://localhost:3001/api/v1/user/profile',
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: newFirstName,
            lastName: newLastName,
          }),
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();
        dispatch(setGetProfile({ data: responseData }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancel = () => {
    // Réinitialise le champ "First Name" et "Last Name" et efface les messages d'erreur.
    setNewFirstName(firstName);
    setNewLastName(lastName);
    onCancel(); // Appeler la fonction d'annulation pour fermer le formulaire
  };

  return (
    <div className="editName-content">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input-grey">
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />{' '}
          </div>
          <div className="input-grey">
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />{' '}
          </div>
        </div>

        <button className="buttons" type="submit">
          Save
        </button>
        <button className="buttons" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUsername;
