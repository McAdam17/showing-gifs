import React,{useState,useRef,useEffect} from 'react';

function AddCategory({setCategories}) {
    const [inputValue, setinputValue] = useState('');
    const input = useRef();

    const updateInput = () => {
        setinputValue(input.current.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories( antCat => [inputValue,...antCat]);
            setinputValue( '' );
        }
    }

    useEffect(()=>{
        input.current.focus();
    });

    return (
        <form onSubmit={handleSubmit} className="search">
            <input 
                type="text" 
                value={inputValue} 
                onChange={updateInput}
                ref={input}
                placeholder='Search on me! after that type enter'
            /> 
        </form>
    )
}

export default AddCategory
