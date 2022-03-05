import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Quran = () => {

    // axios fetch
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.quran.sutanlab.id/surah')
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (



        data.map(item => (
            <div key={item.number}>
                <Link to={`/surah/${item.number}`} > {item.name.transliteration.id}</Link>
            </div >
        ))

    )
}

export default Quran