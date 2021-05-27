import React from 'react'

function GridGifItem({url,title}) {
    return (
        <div>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GridGifItem
