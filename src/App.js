import { useState, useEffect } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const App = () => {
  const [searchQuery, setQuery] = useState('')
  const [movieData, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  console.log(movieData, loading, error)
  useEffect(() => {
    var url = "http://www.omdbapi.com/?s=" + searchQuery + "&apikey=48fb6645";
    axios.get(url)
      .then(rawdata => {
        setData(rawdata.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
      })
  }, [searchQuery])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <form>
        <input type="text" onChange={handleChange} value={searchQuery} />
      </form>
    </div>
  );
}

export default App;
