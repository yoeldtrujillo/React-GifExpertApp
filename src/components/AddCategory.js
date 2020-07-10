import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
       
        setInputValue(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault(); //previene el comportamiento por defecto
        

        if (inputValue.trim().length>2) {
            setCategories(cate => [inputValue, ...cate ]);
            setInputValue('');
            
        }
        

    }

    //los <> o fragments se utiliza para agrupar elementos html o jsx, pero si tengo algun otro elemento 
    //que los pueda agrupar por ejemplo un form o un div, no es necesario utilizarlo
    
    return (
        <form onSubmit={handleSubmit}> 
        
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
            
        </form>
    )

}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
