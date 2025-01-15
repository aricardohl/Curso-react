import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {


    const users = [
        {
            userName : "ricaherlo",
            name:"Alberto Ricardo Herrera L",
            initialFollowing : true 
        },
        {
            userName : "Claudiashein",
            name:"Claudia Sheimbaun",
            initialFollowing : false 
        },
        {
            userName : "porktendencia",
            name:"¿Por qué es tendencia?",
            initialFollowing : false 
        },
        {
            userName : "OutOfContextMex",
            name:"Out Of Context México",
            initialFollowing : false 
        },
    ]

    return (
        <div className='App'>
            {
                users.map(user => {
                    const {userName, name, initialFollowing} = user
                    return(
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName} 
                            initialFollowing = {initialFollowing}
                            name = {name}
                        />
                    )
                })
            }
        </div>
    )
}