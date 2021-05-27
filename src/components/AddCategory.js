import React,{useState,useRef} from 'react';

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

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={updateInput}
                ref={input}
            /> 
        </form>
    )
}

export default AddCategory
