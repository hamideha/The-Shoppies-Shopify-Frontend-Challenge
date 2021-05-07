import { useState, useEffect } from 'react'
import axios from 'axios'

import MovieCard from '../movie-card/movie-card.component'
import Notification from '../notification/notification.component'

const MovieList = ({ searchQuery }) => {
    const [movieData, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const nominated = []
    const handleAdd = (movie) => {
        const { Year, Title, Poster, imdbID } = movie
        nominated.push({ Year, Title, Poster, imdbID })
        localStorage.setItem("nominated", JSON.stringify(nominated));
    }

    useEffect(() => {
        setLoading(true)
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

    if (movieData.Response === "True") {
        return (
            movieData.Search.map(movie => {
                return <MovieCard
                    key={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    onAdd={() => handleAdd(movie)}
                />
            })
        )
    } else {
        return <Notification content={'Your search did not return any results'} />
    }
}

export default MovieList