import './App.css';
import React, { useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import AddFavourites from './Components/AddFavourites/AddFavourites';
function App() {
  const [value, setsearchValue] = useState('')
  const [search, setSearch] = useState('')
  const [add, setAdd] = useState([])
  const setValue = (e) => {
    setsearchValue(search)
  }
  return (
    <div className="App">
      <div className='header'>
        <p>Movies</p>
        <div>
          <input type="text" placeholder='search' onChange={(e) => { setSearch(e.target.value) }} />
          <button onClick={(e) => setValue(e)}>Search</button>
        </div>
      </div>
      <MovieList value={value} setAdd={setAdd} add={add} />
      <div className='favour'>
        <p>Favourites</p>
      </div>
      <AddFavourites add={add} setAdd={setAdd} />
    </div>
  );
}

export default App;
