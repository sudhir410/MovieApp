import React, { useState } from 'react'
import "./AddFavourites.css"
function AddFavourites({ add, setAdd }) {
    const [isShown, setIsShown] = useState(false)

    const removedata = (e) => {

        let data = add.filter(data => data.Title !== e.currentTarget.id)
        setAdd(data)

    }
    return (

        <div className='main_container'>
            {
                add.map((element, i) =>
                    <div key={i}>
                        <div className='movie_container'>
                            <img onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)} src={element.Poster} alt={element.Title} id={element.Title} />
                            {isShown && <div className='addtofavour' id={element.Title} onClick={(e) => { removedata(e) }} onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}><p>Remove Favourites</p></div>}
                        </div>
                    </div>

                )

            }
        </div>
    )
}

export default AddFavourites