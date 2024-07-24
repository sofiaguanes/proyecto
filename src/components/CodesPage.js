import React from 'react';
import './CodesPage.css';

const CodesPage = () => {
  return (
    <div className="codes-container">
      <h1>Your Submitted Codes</h1>
      {/* agregar la lógica para listar los códigos */}
      <div className="code-item">
        <h2>Code Title</h2>
        <p>Code content...</p>
        <button>Edit</button>
        <button>Delete</button>
        <button>View Comments</button>
      </div>
      <button className="back-button">Back to Submit Page</button>
    </div>
  );
};

export default CodesPage;