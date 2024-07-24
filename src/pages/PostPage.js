import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Post Page: {id}</h2>
    </div>
  );
};

export default PostPage;
