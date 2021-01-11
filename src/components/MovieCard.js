import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({ title, genre, posterurl, rate }) => {
  return (
    <div className='movieCard'>
      <img src={posterurl} alt={title} width='250px' />
      <StarRatingComponent starCount={5} value={rate} />
      <p> {genre}</p>
    </div>
  );
};

export default MovieCard;
