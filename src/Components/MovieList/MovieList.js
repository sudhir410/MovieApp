import React, { useEffect, useState } from 'react'
import './MovieStyle.css'
function MovieList({ value, setAdd, add }) {
    const [data, setData] = useState([])
    const [isShown, setIsShown] = useState(false)
    useEffect(() => {
        console.log(value)
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=73d85609&s=${value ? value : 'batman'}`).then(res => res.json()).then(data => {
            console.log(data)
            setData(data.Search)
        })
    }, [value])

    return (
        <div className='main_container'>

            {

                data.map((element, i) =>
                    <div key={i}>
                        <div className='movie_container'>
                            <img onClick={() => { setAdd([...add, element]) }} onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)} src={element.Poster} alt={element.Title} id={element.Title} />
                            {isShown && <div className='addtofavour' onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)} onClick={() => { setAdd([...add, element]) }}><p>Add to Favourites</p></div>}
                        </div>
                    </div>

                )


            }
        </div>
    )
}

export default MovieList