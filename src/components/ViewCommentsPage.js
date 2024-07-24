import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ViewCommentsPage.css';

function ViewCommentsPage() {
  const { codeId } = useParams();
  const code = {
    
    id: codeId,
    title: 'Example Code 1',
    code: 'console.log("Hello, world!");',
    comments: [
      'Try using let instead of var.',
      'This is a good start, consider adding more comments.'
    ]
  };

  return (
    <div className="container">
      <div className="code-container">
        <h2>Title: {code.title}</h2>
        <pre>{code.code}</pre>
      </div>
      <div className="comments-container">
        <h2>Comments</h2>
        {code.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
}

export default ViewCommentsPage;
