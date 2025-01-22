import { useEffect, useState } from "react"

export function useCatImage({ fact }) {
    const [imgUrl, setImgUrl] = useState(undefined)

    useEffect(() => {
        if(!fact) return

        const threeFirstWords = fact.split(' ', 3).join(' ')

        console.log(threeFirstWords)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { url } = response
            setImgUrl(`${url}`)
        })
    }, [fact])
    console.log(imgUrl+'')
    return { imgUrl }
    
} // Return imgUrl: 'https://catass...'