import { useContext } from 'react'
import { Context } from '../../store/state'
import { motion, AnimatePresence } from "framer-motion"

var styles = {
    banner: {
        height: "70px",
        width: "300px",
        position: "fixed",
        zIndex: 400,
        top: 10,
        right: 0,
        border: "2px solid #96bf48",
        borderRadius: "4px",
        backgroundColor: "#f7f7f7",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        overflow: "hidden",
        padding: "10px",
    },
}

const Notification = () => {
    const { state: { nominationsComplete } } = useContext(Context);
    return (
        <AnimatePresence>
            {nominationsComplete &&
                <motion.div
                    key={"sidebar"}
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100vw" }}
                    transition={{ type: 'spring', duration: 0.2, mass: 0.3 }}
                    style={styles.banner}
                >
                    You've nominated 5 movies!<br/>🎈🎆🎇✨🎉🎥🎬🍿🏆
                </motion.div>
            }
        </AnimatePresence >
    )
}

export default Notification