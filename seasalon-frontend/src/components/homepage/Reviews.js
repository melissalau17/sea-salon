import React, { useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState(initialReviews);
    const [newReview, setNewReview] = useState({ customerName: '', starRating: 1, comment: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const addReview = () => {
        const reviewToAdd = { ...newReview, id: reviews.length + 1 };
        setReviews([...reviews, reviewToAdd]);
        setNewReview({ customerName: '', starRating: 1, comment: '' });
    };

    return (
        <div>
            <h2>Customer Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <strong>{review.customerName}</strong> - {review.starRating} stars<br />
                        {review.comment}
                    </li>
                ))}
            </ul>
            <h3>Add Your Review</h3>
            <form>
                <input type="text" name="customerName" placeholder="Your Name" value={newReview.customerName} onChange={handleInputChange} required /><br />
                <select name="starRating" value={newReview.starRating} onChange={handleInputChange}>
                    <option value={1}>1 Star</option>
                    <option value={2}>2 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={5}>5 Stars</option>
                </select><br />
                <textarea name="comment" placeholder="Your Comment" value={newReview.comment} onChange={handleInputChange} required></textarea><br />
                <button type="button" onClick={addReview}>Submit Review</button>
            </form>
        </div>
    );
};

export default Reviews;
