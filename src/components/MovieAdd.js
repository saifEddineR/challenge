import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addMovie } from '../redux/actions/actions';

const MovieAdd = () => {
  return (
    <div>
      <AddModal />
    </div>
  );
};

function AddModal() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [movieInput, setMovieInput] = useState({
    id: uuidv4(),
    title: '',
    genre: '',
    image: '',
    rating: 0,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInput = (event) => {
    let name = event.target.id;
    let value = event.target.value;
    setMovieInput({ ...movieInput, [name]: value });
  };

  const handleInputDispatch = (e) => {
    e.preventDefault();
    dispatch(addMovie(movieInput));
    setMovieInput({
      id: uuidv4(),
      title: '',
      genre: '',
      image: '',
      rating: 0,
    });
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add a Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your favorite Movie !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='gender'
              id='title'
              value={movieInput.title}
              onChange={handleInput}
            />
            <br />
            <label htmlFor='genre'>genre</label>
            <input
              type='text'
              name='gender'
              id='genre'
              value={movieInput.genre}
              onChange={handleInput}
            />
            <br />
            <label htmlFor='image'>Image</label>
            <input
              type='text'
              name='gender'
              id='image'
              value={movieInput.image}
              onChange={handleInput}
            />
            <br />
            <label htmlFor='rating'>Rating</label>
            <input
              type='text'
              name='gender'
              id='rating'
              value={movieInput.rating}
              onChange={handleInput}
            />
            <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleInputDispatch}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieAdd;
