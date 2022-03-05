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

        <>
            <div className='w-full'>
                <h1 className='text-4xl text-center mt-10'> Surah </h1>
                {/* grid col 4 tailwind */}
                {
                    // if data is empty
                    data.length === 0 ? "Loading..." : (
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
                            {
                                data.map(item => (
                                    <div key={item.number} className="p-3">
                                        <Link to={`/surah/${item.number}`} > {item.name.transliteration.id}</Link>
                                    </div >
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>


    )
}

export default Quran