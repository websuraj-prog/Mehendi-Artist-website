import React, { useState, useEffect } from 'react';
import './Review.css';
import { useAdmin } from '../../context/AdminContext.jsx';

const AdminReviewManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const { isAdminLoggedIn, login, logout } = useAdmin();

  const fetchReviews = () => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    storedReviews.sort((a, b) => b.createdAt - a.createdAt);
    setReviews(storedReviews);
  };

  useEffect(() => {
    if (isAdminLoggedIn) {
      fetchReviews();
    }
    setLoading(false);
  }, [isAdminLoggedIn]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const updatedReviews = storedReviews.filter((rev) => rev.id !== id);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    fetchReviews();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (!success) {
      setLoginError('Invalid email or password');
    } else {
      setLoginError('');
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (loading) return <p>Loading...</p>;

  if (!isAdminLoggedIn) {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {loginError && <p className="error">{loginError}</p>}
      </div>
    );
  }

  return (
    <div className="admin-review-management">
      <h2>Admin Review Management</h2>
      <button onClick={handleLogout} >Logout</button>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <div className="review-list">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <h4>{rev.name}</h4>
              <p>{rev.comment}</p>
              <button className="delete-review" onClick={() => handleDelete(rev.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminReviewManagement;
