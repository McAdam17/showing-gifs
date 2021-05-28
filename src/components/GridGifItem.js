import React from 'react'

function GridGifItem({url,title}) {
    return (
        <div className="grid-item">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GridGifItem
