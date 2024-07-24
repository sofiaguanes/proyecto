import React, { useContext } from 'react';
import { CodesContext } from '../CodesContext';
import { Link } from 'react-router-dom';
import '../styles/SubmittedCodesPage.css';

const SubmittedCodesPage = () => {
  const { codes } = useContext(CodesContext);

  return (
    <div className="submitted-codes-page">
      <h1>Submitted Codes</h1>
      <div className="codes-container">
        {codes.map((code, index) => (
          <div key={code.id || index} className="code-item">
            <Link to={`/CodeDetailsPage/${index}`}>
              <h2>{index + 1}. {code.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedCodesPage;
