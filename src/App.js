import { useState } from 'react'

import SearchBar from './components/searchbar/searchbar.component'
import MovieList from './components/movie-list/movie-list.components'
import NominationsList from './components/nominations-list/nominations-list.component'

import './App.scss'

const App = () => {
  const [searchQuery, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App container">
      <SearchBar onChange={handleChange} value={searchQuery} />

      <div className="columns">
        <div className="column col-6 col-md-12 my-2">
          <MovieList searchQuery={searchQuery} />
        </div>
        <div className="column col-6 col-md-12 my-2">
          <NominationsList />
        </div>
      </div>

    </div>
  );
}

export default App;
