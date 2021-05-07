import './searchbar.styles.scss'

const SearchBar = ({ onChange, value }) => {
    return (
        <fieldset className="inputGroup">
            <div className="FormRow">
                <label htmlFor="search-input" className="FormRowLabel">
                    Search for a Movie!
                </label>
                <input
                    className="FormRowInput"
                    id="search-input"
                    type="text"
                    placeholder="Enter your search here"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </fieldset>
    )
}

export default SearchBar