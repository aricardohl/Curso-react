import React, { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/`


export function App () {
    const [fact, setFact] = useState()
    const [imgUrl, setImgUrl] = useState(null) 

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)
    })}
    , [])

     useEffect(() => {
        if(!fact) return 
        const threeFirstWords = fact.split(' ', 3).join(' ')

            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then( res => res.json() )
            .then(response => {
                const { url } = response
                setImgUrl(`${url}`)
            })
        }, [fact])

    return(
        <main>
            <h1>Aplicacion de gatos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imgUrl && <img src={`${CAT_ENDPOINT_IMAGE_URL}${imgUrl}`} alt={`Image extracted using the three words from ${fact}`}></img>}
            </section>
        </main>
    )
}