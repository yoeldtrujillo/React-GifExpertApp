//import React from 'react';

export const getGifs = async (category)=>{

    //Los helpers son funciones que hacen cierto trabajo especifico, pueden recibir argumentos
    //lo procesan y hacen algun return, no hacen falta que  redibujen el state

    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=kcZdLdmNFbP0QIzsmKBtN5FrqS7J8Qy5`;
    const resp= await fetch(url);
    const {data}= await resp.json();

    const gifs = data.map(img =>{
        return {
            id:img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}