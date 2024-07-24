import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CodesContext } from '../CodesContext';
import '../styles/BlogPage.css';

const BlogPage = () => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const { addCode } = useContext(CodesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCode({ title, code });
    navigate('/submitted-codes');
  };

  const handleViewCodes = () => {
    navigate('/submitted-codes');
  };

  const handleExploreOtherCodes = () => {
    navigate('/explore-codes');
  };

  return (
    <div className="container">
      <div className="title-container">
        <h1>Submit<br />Your<br /><span>Code</span></h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <button className="floating-button" id="view-codes" onClick={handleViewCodes}>
        Mis Códigos
      </button>
      <button className="floating-button" id="explore-codes" onClick={handleExploreOtherCodes}>
        Investigar otros códigos
      </button>
    </div>
  );
};

export default BlogPage;
