import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { useState, useEffect } from 'react';


const Surah = () => {
    const { id } = useParams();

    const [surah, setSurah] = useState([]);
    useEffect(() => {
        fetchSurah()
    }, [])

    const fetchSurah = async () => {
        const data = await axios.get(`https://api.quran.sutanlab.id/surah/${id}`)
        const surah = await data.data.data
        setSurah(surah)
    }

    return (
        // map data
        <div className='w-full'>
            {
                // if surah length is 0
                surah.length === 0 ? "Loading..." : (
                    <>
                        <h1 className='text-4xl text-center'> {surah.name.long} </h1>
                        <h1 className='text-xl mt-5 text-center'> {surah.preBismillah.text.arab} </h1>
                        {
                            surah.verses.map(item => (
                                <div key={item.number.inQuran}>{item.text.arab}</div>
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}

export default Surah