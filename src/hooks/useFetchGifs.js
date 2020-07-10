import {useState, useEffect} from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category)=>{
    const [state, setState] = useState({

        data:[],
        loading:true

        

    });

     useEffect(()=>{ //el useEffect solo se ejecuta cuando sea renderizado la primera vez
         getGifs(category)
            .then(imgs =>{
                setTimeout(() => {
                    console.log(imgs)
                    setState({
                        data:imgs,
                        loading:false
                    })
                },300)
                    
            });
                
     },[category])


    return state
}