import React, { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/`



export function App () {
    const [fact, setFact] = useState()
    const { imgUrl } = useCatImage({ fact: fact })

    useEffect(() => {
        const fetchFact = async () => {
            const newFact = await getRandomFact()
            setFact(newFact)
        }
        fetchFact()
    }, [])

    const handleClick = async () => {
            const newFact = await getRandomFact()
            setFact(newFact)
    }
    


    return(
        <main>
            <h1>Aplicacion de gatos</h1>
            <button onClick={handleClick}>Get New Fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imgUrl && 
                <img src={`${CAT_ENDPOINT_IMAGE_URL}${imgUrl}`} alt={`Image extracted using the three words from ${fact}`}></img>}
            </section>
        </main>
    )
}