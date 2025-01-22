import './App.css'
import React from 'react'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro'

export function App () {
    const {fact, refreshRandomFact} = useCatFact()
    const { imgUrl } = useCatImage({ fact: fact })

    const handleClick = async () => {
            refreshRandomFact()
    }
    


    return(
        <main>
            <h1>Aplicacion de gatos</h1>
            <button onClick={handleClick}>Get New Fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imgUrl && 
                <img src={imgUrl} alt={`Image extracted using the three words from ${fact}`}></img>}
            </section>
            <Otro />
            <Otro />
            <Otro />
        </main>
    )
}