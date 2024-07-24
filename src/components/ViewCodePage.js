import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ViewCodePage.css';

const exampleCodes = [
  { id: 1, title: 'Code Example 1', code: 'console.log("Hello, world!");' },
  { id: 2, title: 'Code Example 2', code: 'const a = 10; const b = 20; console.log(a + b);' },
  { id: 3, title: 'Code Example 3', code: 'function greet(name) { return `Hello, ${name}!`; }' },
  { id: 4, title: 'Code Example 4', code: 'const multiply = (x, y) => x * y;' },
  { id: 5, title: 'Code Example 5', code: 'const nums = [1, 2, 3, 4]; console.log(nums.map(n => n * 2));' },
];

const ViewCodePage = () => {
  const { codeId } = useParams();
  const code = exampleCodes.find(c => c.id === parseInt(codeId));
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="view-code-page">
      <h1>{code.title}</h1>
      <pre>{code.code}</pre>
      <div className="comments-container">
        <h2>Comments</h2>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleAddComment}>Submit</button>
      </div>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default ViewCodePage;
