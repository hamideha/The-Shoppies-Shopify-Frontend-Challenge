import { useState, useEffect } from 'react'
import axios from 'axios'
import useDebounce from "./useDebounce"

const useFetch = (searchQuery) => {
    const [movieData, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [isSearching, setIsSearching] = useState(false);

    const debouncedSearchTerm = useDebounce(searchQuery.trim(), 500);

    useEffect(() => {
        setLoading(true)
        if (debouncedSearchTerm) {
            setIsSearching(true);
            var url = "https://www.omdbapi.com/?s=" + debouncedSearchTerm + "&apikey=48fb6645";
            axios.get(url)
                .then(rawdata => {
                    setData(rawdata.data)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                })
        } else {
            setData([]);
            setIsSearching(false);
        }
    }, [debouncedSearchTerm])

    return { movieData, loading, error }
}

export default useFetch