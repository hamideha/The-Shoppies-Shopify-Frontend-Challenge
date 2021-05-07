import { useContext } from 'react'
import useFetch from '../../hooks/useFetch'
import { Context } from '../../store/state'

import MovieCard from '../movie-card/movie-card.component'
import Empty from '../empty/empty.component'

const MovieList = ({ searchQuery }) => {
    const { state: { nominations, nominationsComplete }, dispatch } = useContext(Context);

    const { movieData, error } = useFetch(searchQuery)

    const handleAdd = (movie) => {
        movie.disabled = true
        dispatch({ type: 'ADD_NOMINATION', payload: movie })
    }

    if (error) {
        return <Empty content={error.message + " :("} />
    }

    if (movieData.Response === "True") {
        return (
            movieData.Search.map(movieRes => {
                return <MovieCard
                    mode="Add"
                    key={movieRes.imdbID}
                    title={movieRes.Title}
                    year={movieRes.Year}
                    poster={movieRes.Poster}
                    disabled={nominations.find(movie => {  // We're disabling the add button if the imdbID is already found in one of the   movie object in the nominations array
                        return movie.imdbID === movieRes.imdbID
                    }) || nominationsComplete}
                    onAdd={() => handleAdd(movieRes)}
                />
            })
        )
    } else {
        return <Empty content='Your search did not return any results' />
    }
}

export default MovieList