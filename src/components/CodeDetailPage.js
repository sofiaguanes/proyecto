import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/CodeDetailPage.css';

const exampleCodes = [
  { id: 1, title: 'Example Code 1', code: 'console.log("Hello, world!");' },
  { id: 2, title: 'Example Code 2', code: 'const add = (a, b) => a + b;' },
  { id: 3, title: 'Example Code 3', code: 'function greet(name) { return `Hello, ${name}`; }' },
  { id: 4, title: 'Example Code 4', code: 'const numbers = [1, 2, 3, 4]; numbers.map(num => num * 2);' },
  { id: 5, title: 'Example Code 5', code: 'const person = { name: "John", age: 30 }; console.log(person);' }
];

const CodeDetailPage = () => {
  const { codeId } = useParams();
  const navigate = useNavigate();
  const code = exampleCodes.find(c => c.id === parseInt(codeId));

  return (
    <div className="code-detail-page">
      <button onClick={() => navigate('/explore-codes')}>Back to Explore</button>
      <h1>{code.title}</h1>
      <pre>{code.code}</pre>
      <div className="comments-section">
        <h2>Comments</h2>
        <textarea placeholder="Add a comment..."></textarea>
        <button>Add Comment</button>
      </div>
    </div>
  );
};

export default CodeDetailPage;
