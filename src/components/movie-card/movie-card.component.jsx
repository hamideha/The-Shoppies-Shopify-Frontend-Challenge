import './movie-card.styles.scss'

const MovieCard = ({ title, year, poster, onAdd }) => {
    return (
        <>
            <div className="tile tile-centered">
                <div className="tile-icon">
                    {poster === 'N/A' ? <i className="icon icon-emoji img-fit-cover"></i> :
                        <img className="img-fit-cover" src={poster} alt="Poster" style={{ maxWidth: '50px' }} />
                    }
                </div>
                <div className="tile-content">
                    <div className="tile-title">{title}</div>
                    <small className="tile-subtitle text-dark">{year}</small>
                </div>
                <div className="tile-action">
                    <button className="btn btn-link" onClick={onAdd}>
                        <i className="icon icon-plus" style={{ color: "#96bf48" }}></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MovieCard