import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifEXpertApp() {
    const [categories, setCategories] = useState(['One punch']);
    return (
        <div className='container-app'>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <ul>
                {
                    categories.map( (category) => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default GifEXpertApp
