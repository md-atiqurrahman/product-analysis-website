import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';
import './CustomerReviews.css';

const CustomerReviews = () => {
    const [reviews, setReviews] = useReviews();

    let navigate = useNavigate();

    const topRater = reviews.filter(review => review.rating === 5);
    return (
        <div>
            <h1 className='text-4xl text-black font-mono font-bold mt-16'>Customer Reviews({reviews.length})</h1>
            <div className='grid grid-cols-3 mt-12 ml-28'>
                {
                    topRater.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    >
                    </ReviewCard>)
                }
            </div>
            <button onClick={() => navigate('/reviews')} className='All-review-btn text-xl'>See All Reviews</button>
        </div>
    );
};

export default CustomerReviews;