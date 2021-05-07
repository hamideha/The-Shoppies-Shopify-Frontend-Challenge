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
            movieData.Search.map(movie => {
                return <MovieCard
                    mode="Add"
                    key={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    disabled={nominations.includes(movie) || nominationsComplete}
                    onAdd={() => handleAdd(movie)}
                />
            })
        )
    } else {
        return <Empty content='Your search did not return any results' />
    }
}

export default MovieList