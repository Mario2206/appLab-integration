
import React, {  useState, useEffect, useRef, useCallback } from "react"
import "../../style/items/fade-box.css"

export default function FadeBox ({children, className, id} : {children : any, className? : string, id? : string}) {

    const boxRef = useRef(null);
    const [ wasAnim, setWasAnim ] = useState<boolean>(false)
    const [animClass, setAnimClass] = useState("")

    const onScroll = useCallback(()=> {
        if(boxRef.current) {
            const current : any  = boxRef.current
            const clientRect : ClientRect = current.getBoundingClientRect();
            
            const breakpoint = (clientRect.bottom - (clientRect.height ))
            
            if(breakpoint <= window.innerHeight / 2 ) {
                setAnimClass("fade-box_visible")
            }
        }      
    }, [])

    useEffect(()=>{

        window.addEventListener("scroll",onScroll);

        if(wasAnim) window.removeEventListener("scroll", onScroll)

        return ()=>window.removeEventListener("scroll", onScroll)

    }, [wasAnim])


    return (
        <section className={`${animClass} ${className ?? ""} fade-box`} ref={boxRef} id={id ?? ""}>
            {children}
        </section>
    )
}