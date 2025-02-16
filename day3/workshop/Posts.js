import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts');
      }
    };
    fetchPosts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!posts.length) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '10px' }}>
          <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.body.substring(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
