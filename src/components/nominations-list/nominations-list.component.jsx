import { useContext } from 'react'
import { Context } from '../../store/state'

import MovieCard from '../movie-card/movie-card.component'
import Empty from '../empty/empty.component'

const NominationsList = () => {
    const { state: { nominations }, dispatch } = useContext(Context);

    const handleRemove = (movie) => {
        dispatch({ type: 'REMOVE_NOMINATION', payload: movie })
    }

    if (nominations.length !== 0) {
        return (
            nominations.map(movie => {
                return <MovieCard
                    mode="Remove"
                    key={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    onAdd={() => handleRemove(movie)}
                />
            })
        )
    } else {
        return <Empty content="You have no nominations" />
    }
}

export default NominationsList