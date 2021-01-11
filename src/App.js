import './App.css';
import MovieList from './components/MovieList';
import MovieAdd from './components/MovieAdd';
import Filter from './components/Filter';

function App() {
  return (
    <div className='App'>
      <MovieAdd />
      <Filter />
      <MovieList />
    </div>
  );
}

export default App;
