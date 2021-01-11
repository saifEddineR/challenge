import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../redux/actions/actions';
const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  return (
    <div>
      <input
        type='text'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button type='submit' onClick={() => dispatch(search(filter))}>
        click
      </button>
    </div>
  );
};

export default Filter;
