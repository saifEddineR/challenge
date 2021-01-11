import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { IoRemoveCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/actions/actions';

const MovieCard = ({ id, title, description, posterurl, rate }) => {
  const dispatch = useDispatch();
  return (
    <div className='movieCard'>
      <span className='title'>
        <p className='movieTitle'>{title} </p>
        <p> {description} </p>
        <br />
        <span className='rating'>
          <StarRatingComponent starCount={5} value={rate} />
        </span>
      </span>
      <img src={posterurl} alt={title} width='200px' height='300px' />

      <div
        class='remove'
        onClick={() => dispatch(remove(id))}
        style={{ textAlign: 'center', marginTop: '8px' }}
      >
        <button class='icon-btn add-btn'>
          <div class='btn-txt'>Remove</div>
        </button>
      </div>
      {/* <span className='remove' >
        <button onClick={() => dispatch(remove(id))}>remove</button>
      </span> */}
    </div>
  );
};

export default MovieCard;
