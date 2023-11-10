import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/Error.css';

function NotFound() {
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
