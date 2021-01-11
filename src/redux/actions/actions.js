import { ADD_MOVIE, REMOVE, SEARCH } from './actionsType';

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};

export const search = (filter) => {
  return {
    type: SEARCH,
    payload: filter,
  };
};
