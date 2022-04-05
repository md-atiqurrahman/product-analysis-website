import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className='grid grid-cols-3 ml-28'>
          {
              reviews.map(review => <ReviewCard
                key={review.id}
                review={review}
              ></ReviewCard>)
          }
        </div>
    );
};

export default Reviews;