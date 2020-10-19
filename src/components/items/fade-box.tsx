
import React, { ReactChild, ReactChildren, useEffect, useRef, useCallback } from "react"
import anime from "animejs"

export default function FadeBox ({children, className, id} : {children : any, className? : string, id? : string}) {

    const boxRef = useRef(null);

    const onScroll = useCallback(()=> {
        if(boxRef.current) {
            const current : any  = boxRef.current
            const clientRect : ClientRect = current.getBoundingClientRect();
            
            const breakpoint = (clientRect.bottom - (clientRect.height ))
            
            if(breakpoint <= window.innerHeight / 2 ) {
                console.log("anim");
                
                anime({
                    targets : "." + className,
                    opacity : 1,
                    duration : 1500

                })
                
            }
        }
        
        
    }, [])

    useEffect(()=>{

        window.addEventListener("scroll",onScroll);

        return ()=>window.removeEventListener("scroll", onScroll)

    }, [])


    return (
        <section className={`${className ?? ""} fade-box`} ref={boxRef} style={{ opacity : 0}} id={id ?? ""}>
            {children}
        </section>
    )
}