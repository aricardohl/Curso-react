import { useEffect, useState } from "react"

const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/`


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
    return { imgUrl: `${CAT_ENDPOINT_IMAGE_URL}${imgUrl}` }
    
} // Return imgUrl: 'https://catass...'