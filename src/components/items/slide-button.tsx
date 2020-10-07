import React from 'react';

import "../../style/items/slide-button.css"

export default function SlideButton ({className} : {className? : string}) {

    return (
        <div className={`slide-button ${className}`}>
            <button className="slide-button--btn slide-button--btn_visible">
                <img src="/img/right-arrow.svg" alt="slide" className="slide-button--svg"/>
            </button>
            <hr className="slide-button--delimiter"/>
            <button className="slide-button--btn slide-button--btn_hide">
                <img src="/img/right-arrow.svg" alt="slide" className="slide-button--svg slide-button--svg_mirror"/>
            </button>
        </div>
    )
}