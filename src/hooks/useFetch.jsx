import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (searchQuery) => {
    const [movieData, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

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

    return { movieData, loading, error }
}

export default useFetch