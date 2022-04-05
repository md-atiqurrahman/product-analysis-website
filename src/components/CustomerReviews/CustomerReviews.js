import React, { useEffect, useState } from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
       
    useEffect(() =>{
        fetch('ReviewData.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div>
            <h1 className='text-4xl text-black font-mono font-bold mt-16'>Customer Reviews( {reviews.length} )</h1>
            <button className='All-review-btn text-xl'>See All Reviews</button>
        </div>
    );
};

export default CustomerReviews;