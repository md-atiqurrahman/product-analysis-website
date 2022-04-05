import React from 'react';
import './Home.css';
import img from '../../images/books.jpg';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className="books-details">
                    <h1 className='text-5xl text-black font-mono font-extrabold'>Your next book</h1>
                    <h1 className='title-name mt-5 text-5xl font-mono font-extrabold'>Will be your favourite book</h1>
                    <p className='text-xl font-mono font-bold text-gray-400'>Books for Learing gives brand-new books & digital content to students, educators and leaders. With new books, we infuse students with a love of reading essential for literacy. Put books in young hands. Donate to Books for Learning. Improve our societies literacy.</p>
                    <button className='details-btn text-xl'>View Details</button>
                </div>
                <div className="books-image mr-5">
                    <img src={img} alt="" />
                </div>
            </div>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default Home;