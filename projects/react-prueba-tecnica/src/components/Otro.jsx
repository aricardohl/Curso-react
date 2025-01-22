import React from 'react'
import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
    const {imgUrl} = useCatImage({fact: 'Gatito'})
    console.log(imgUrl)
    return(

        <>
            {imgUrl && <img src={`${imgUrl}`} alt='Imagen random de gatos' /> }
        </>

    )
}