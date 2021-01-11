import { v4 as uuidv4 } from 'uuid';
import { ADD_MOVIE, REMOVE, SEARCH } from './actions/actionsType';

const initState = {
  movies: [
    {
      id: uuidv4(),
      title: 'بيك نعيش',
      rate: 5,
      description: 'drama , action',
      posterurl: 'https://img.akwam.co/thumb/260x380/uploads/AmJXq.jpg',
      trailer: 'https://www.youtube.com/watch?v=ufSCpaSsuiI',
    },
    {
      id: uuidv4(),
      title: 'The Matrix',
      rate: 5,
      description: 'fantasy, action',
      posterurl:
        'https://images-na.ssl-images-amazon.com/images/I/51oBxmV-dML._AC_.jpg',
      trailer: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    },
    {
      id: uuidv4(),
      title: 'Jhon Wick',
      rate: 3,
      description: 'action, thriller ',
      posterurl:
        'https://images-na.ssl-images-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg',
      trailer: 'https://www.youtube.com/embed/C0BMx-qxsP4',
    },
  ],
  filter: '',
};

function reducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, payload] };
    case SEARCH:
      return { ...state, filter: payload };
    case REMOVE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };
    default:
      return state;
  }
}

export default reducer;
