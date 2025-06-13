import React, { useState, useEffect } from 'react';
import './Review.css';
import AboutImg from '../../assets/AboutImg.jpg';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const fetchReviews = () => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    // Sort reviews by createdAt descending
    storedReviews.sort((a, b) => b.createdAt - a.createdAt);
    setReviews(storedReviews);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = () => {
    if (!name || !comment) return alert('Please fill both fields.');
    const newReview = {
      id: Date.now(),
      name,
      comment,
      createdAt: Date.now(),
    };
    const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    storedReviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(storedReviews));
    setName('');
    setComment('');
    setCurrentIndex(0); 
    fetchReviews();
  };

  const handleNext = () => {
    if (currentIndex + cardsPerPage < reviews.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div
      className="review-page-wrapper" id='reviews'
      style={{
        backgroundImage: `url(${AboutImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="review-container" >
        <h2 className="review-title">Client Reviews</h2>
        <div className="review-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit Review</button>
        </div>
      </div>

      <div className="review-list">
        {visibleReviews.length === 0 && <p className="no-review">No reviews yet.</p>}
        {visibleReviews.map((rev) => (
          <div key={rev.id} className="review-box">
            <h4 className="review-head">{rev.name}</h4>
            <p className="review-body">{rev.comment}</p>
          </div>
        ))}

      </div>

      {reviews.length > cardsPerPage && (
        <div className="review-navigation">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            {"< Prev"}
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= reviews.length}
          >
            {"Next >"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
