import { useState, useContext } from 'react'
import { Context } from './store/state'

import Navigation from './components/navigation/navigation.component'
import SearchBar from './components/searchbar/searchbar.component'
import MovieList from './components/movie-list/movie-list.components'
import NominationsList from './components/nominations-list/nominations-list.component'
import Notification from './components/notification/notification.component'

import './App.scss'

const App = () => {
  const { state: { nominations } } = useContext(Context);
  const [searchQuery, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App container">
      <Navigation />
      <SearchBar onChange={handleChange} value={searchQuery} />
      <Notification />
      <div className="columns">
        <div className="column col-6 col-md-12 my-2">
          <h4>Search Results for "{searchQuery}"</h4>
          <MovieList searchQuery={searchQuery} />
        </div>
        <div className="column col-6 col-md-12 my-2">
          <h4>My Nominations: {5 - nominations.length} nominations left</h4>
          <NominationsList />
        </div>
      </div>

    </div>
  );
}

export default App;
