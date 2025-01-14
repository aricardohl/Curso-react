import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

    return (
        <div className='App'>
            <TwitterFollowCard
                userName = "ricaherlo"
                name="Alberto Ricardo Herrera L"
            />
            <TwitterFollowCard 
                userName = "Claudiashein"
                name="Claudia Sheimbaun"
            />
            <TwitterFollowCard 
                userName = "porktendencia"
                name="¿Por qué es tendencia?"
            />
            <TwitterFollowCard 
                userName = "OutOfContextMex"
                name="Out Of Context México"
            />
        </div>
    )
}