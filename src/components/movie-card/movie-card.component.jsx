import './movie-card.styles.scss'
import { motion, AnimatePresence } from "framer-motion"

const MovieCard = ({ title, year, poster, onAdd, disabled, mode }) => {
    return (
        <AnimatePresence>
            <motion.div
                key={"movie"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="tile tile-centered"
            >
                <div className="tile-icon">
                    {poster === 'N/A' ? <i className="icon icon-emoji img-fit-cover"></i> :
                        <img className="img-fit-cover" src={poster} alt="Poster" style={{ maxWidth: '50px' }} />
                    }
                </div>
                <div className="tile-content">
                    <div className="tile-title">{title}</div>
                    <small className="tile-subtitle text-dark mr-2">{year}</small>
                    {mode === "Remove" && <small className="label label-warning">🏆 Nominated</small>}
                </div>
                <div className="tile-action">
                    <button className={`btn btn-primary mr-2 ${disabled ? "disabled" : ""}`}
                        onClick={onAdd}
                        style={{ backgroundColor: "#96bf48", borderColor: "#96bf48" }}
                        disabled={disabled}
                    >
                        {/* {mode} Nomination */}
                        {mode === "Add" ?
                            <i className="icon icon-plus" /> :
                            <i className="icon icon-cross" />
                        }
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default MovieCard