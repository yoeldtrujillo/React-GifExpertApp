import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrill } from './components/GifGrill';


export const GifExpertApp = () => {
    
    //const categories =['Dragon','perro','gato'];
    const [categories, setCategories] = useState(['']) //siempre el primer argumento en este caso categories es el valor por defecto del useState

    //const handleAdd=()=>{

        //setCategories([...categories, 'hunter']); una manera de agregar elementos con setCategories
        //setCategories(cate => [...categories, 'Hunter']); //otra manera: primer argumento es el primer estado anterior cate y el segundo lo que quiero agregar
        

    //}
    

    return (
        <>
        <h2>GifExpertApp</h2>
        <h4>Ingresa tu busqueda de gifs:</h4>
        <AddCategory setCategories={setCategories}/>
        <hr/>

       <ol>
            {categories.map(category => (
                <GifGrill 
                key={category}
                category={category}
                />) )
            }
           
       </ol>
        </>
    )
}

