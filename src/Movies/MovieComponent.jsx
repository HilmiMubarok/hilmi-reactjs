import React from 'react'
import { motion } from 'framer-motion'

function MovieComponent({ movie }) {
    return (
        <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-xl w-full h-96 object-cover" />
            <div className="movie__data">
                <h3 className="movie__title font-bold text-xl mt-5">{movie.title}</h3>
                <h5 className="movie__subtitle">{movie.release_date}</h5>
            </div>
        </motion.div>
    )
}

export default MovieComponent