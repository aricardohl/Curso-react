import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <div className='App'>
            <TwitterFollowCard 
                userName = "ricaherlo"
                name="Alberto Ricardo Herrera L"
                isFollowing={true}
            />
            <TwitterFollowCard 
                userName = "Claudiashein"
                name="Claudia Sheimbaun"
                isFollowing={false}
            />
            <TwitterFollowCard 
                userName = "porktendencia"
                name="¿Por qué es tendencia?"
                isFollowing
            />
            <TwitterFollowCard 
                userName = "OutOfContextMex"
                name="Out Of Context México"
                isFollowing
            />
        </div>
    )
}