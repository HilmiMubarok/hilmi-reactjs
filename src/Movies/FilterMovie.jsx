import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FilterMovie({ popular, setFiltered, activeGenre, setActiveGenre }) {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchGenres = async () => {
            const data = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=ed4d5d9ed28ba43922ff616a7797738a&language=en-US')
            const genres = await data.data.genres
            setGenres(genres)
        }
        fetchGenres()
    }, [])

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular)
            return
        }
        const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre))
        setFiltered(filtered)
    }, [activeGenre])


    return (
        <div className='text-center my-5'>
            {
                genres.map(genre => (
                    <button
                        key={genre.id}
                        className={`rounded-full p-3 m-3 ${activeGenre === genre.id ? 'bg-cyan-300 dark:bg-slate-600' : 'bg-gray-200 dark:bg-gray-800'}`}
                        onClick={() => setActiveGenre(genre.id)}
                    >
                        {genre.name}
                    </button>
                ))
            }
        </div>
    )
}

export default FilterMovie