import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <Router>
      <nav style={{ margin: '10px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to the React Workshop!</h1>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
