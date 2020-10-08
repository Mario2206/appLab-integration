import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../../style/items/slide-button.css"

interface IESlideButton {
    className : string,
    rightClick? : ()=>void,
    leftClick? : ()=>void,
    enable : [boolean, boolean] // enable[0] for leftButton and enable[1] for rightButton
}

export default function SlideButton ({className, leftClick, rightClick, enable} : IESlideButton) {

    const hideClass = "slide-button--btn_hide"

    return (
        <div className={`slide-button ${className}`}>
            <button 
            className={`slide-button--btn ${enable[1] ? "" : hideClass}`} 
            onClick={enable[1] ? rightClick : undefined}>

                <FontAwesomeIcon icon={["fas", "arrow-right"]}/>

            </button>
            <hr className="slide-button--delimiter"/>
            <button 
            className={`slide-button--btn ${enable[0] ? "" : hideClass}`} 
            onClick={enable[0] ? leftClick : undefined}>
                
                <FontAwesomeIcon icon={["fas", "arrow-left"]}/>
            </button>
        </div>
    )
}