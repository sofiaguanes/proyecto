
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/CodeDetailsPage.css';
import { CodesContext } from '../CodesContext';




function CodeDetailsPage() {
  const { codes } = useContext(CodesContext);
  const navigate = useNavigate();
  const { codeId } = useParams();
 
  const codeDetails = codes[codeId];
  

  
  
  const code = {
    id: codeId,
    
    title: codeDetails.title,
    code: codeDetails.code,
    comments: [
      'Try using let instead of var.',
      'This is a good start, consider adding more comments.'
    ]
  };
  const adjustedCodeId = parseInt(codeId) + 1;
  return (
    <div className="container">
      <div className="code-container">
        <h2>{adjustedCodeId}</h2>
        <h2>Title: {code.title}</h2>
        <pre className="code-text">{code.code}</pre>
       
      </div>
      <div className="actions-container">
        <button onClick={() => alert('Update functionality not implemented yet')}>Edit</button>
        <button onClick={() => alert('Update functionality not implemented yet')}>Update</button>
        <button onClick={() => alert('Delete functionality not implemented yet')}>Delete</button>
        <button onClick={() => navigate(`/view-comments/${code.id}`)}>View Comments</button>
      </div>
    </div>
  );
}

export default CodeDetailsPage;