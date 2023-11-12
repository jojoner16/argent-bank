import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/Error.css';

function NotFound() {
  // permet de modifier le titre de la page
  useEffect(() => {
    document.title = 'Argent Bank - Error Page';
  }, []);

  return (
    <div className="error-container">
      <h2 className="error-heading">404 - Not Found</h2>
      <p className="error-message">
        Sorry, the page you are looking for might not exist.
      </p>
      <Link to="/" className="error-link">
        Return to home page
      </Link>
    </div>
  );
}

export default NotFound;
