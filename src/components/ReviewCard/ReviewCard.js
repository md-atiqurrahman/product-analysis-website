import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    return (
        <div className='reviewer-container'>
            <p className='reviewer'>Reviewer: {review.name}</p>
            <p>Rating: <span className='rating'>{review.rating}</span></p>
            <p>Comment: <span className='desrciption'>{review.description}</span></p>
        </div>
    )
};

export default ReviewCard;