import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs'

import GridGifItem from './GridGifItem';

function GifGrid({category}) {
    const {data:images,loading} = useFetchGifs(category);

    return (
        <div className="grid-container">
            <hr/>
            <h3>{category}</h3>
            <hr/>
            { loading ? (
                <div>Loading...</div>
            ) : (
                <div className="grid-content">
                    {
                        images.map((image) => (
                            <GridGifItem 
                                key={image.id} 
                                url={image.url} 
                                title={image.title}
                            />
                        ))
                    }
                </div>
            )}            
        </div>
    )
}

export default GifGrid
