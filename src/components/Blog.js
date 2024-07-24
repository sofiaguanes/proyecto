import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts', error);
    }
  };

  const addPost = async () => {
    try {
      const response = await axios.post('http://localhost:5001/posts', { title, content });
      setPosts([...posts, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding post', error);
    }
  };

  const updatePost = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5001/posts/${id}`, { title, content });
      setPosts(posts.map(post => (post._id === id ? response.data : post)));
      setTitle('');
      setContent('');
      setEditId(null);
    } catch (error) {
      console.error('Error updating post', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  const editPost = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditId(post._id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updatePost(editId);
    } else {
      addPost();
    }
  };

  return (
    <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">{editId ? 'Update' : 'Add'} Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => editPost(post)}>Edit</button>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;