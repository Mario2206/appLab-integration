import React, {useState, useEffect} from 'react';

export type Dimensions = {
    width : number, 
    height : number
}

export default function useWindowDimensions () {

    const [dimensions, setDimensions] = useState<Dimensions>({width : window.innerWidth, height : window.innerHeight})

    function handleWindowResize (e : UIEvent) {
        setDimensions({width : window.innerWidth, height : window.innerHeight})
        
    }

    useEffect(()=>{
        const resizeListener = window.addEventListener("resize", handleWindowResize)

        return window.removeEventListener("resize",handleWindowResize)
    }, [])

    return dimensions

}