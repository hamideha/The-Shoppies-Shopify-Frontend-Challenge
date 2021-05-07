import { useEffect, useState } from 'react'
import MovieCard from '../movie-card/movie-card.component'



const NominationsList = () => {
    const [nominations, setNominations] = useState([])
    useEffect(() => {
        var storedNominations = JSON.parse(localStorage.getItem("nominated"));
        setNominations(storedNominations)
    })

    return (
        nominations.map(movie => {
            return <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
            />
        })
    )
}

export default NominationsList