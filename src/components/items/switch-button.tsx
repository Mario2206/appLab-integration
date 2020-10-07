import React, {useState} from 'react';
import "../../style/items/switch-button.css"

interface IESwitchProps {
    firstValue : string,
    secondValue : string,
    onChange? : (()=>void) | null
}

export default function SwitchButton ({firstValue, secondValue, onChange} : IESwitchProps) {

    const buttonSelectedClass = "switch-button--btn_selected"
    const buttonUnselectedClass = "switch-button--btn_unselected"
    const backgroundSelectedClass = "switch-button--background_selected"

    const [btnState1, setBtnState1] = useState(true)
    const [btnState2, setBtnState2] = useState(false)

    function changeState () {
        if(!onChange) return
        setBtnState1(prevstate=>!prevstate)
        setBtnState2(prevstate=>!prevstate)
        
        onChange()
    }

    return (
        <div className="switch-button">
            <button 
            className={`switch-button--btn ${btnState1 ? buttonSelectedClass : buttonUnselectedClass}`}
            onClick={changeState}
            >
                <div 
                className={
                    `switch-button--background 
                    ${btnState1 ? backgroundSelectedClass + " switch-button--background_selected_left" : ""}`
                }
                ></div>
                {firstValue}
            </button>
            <button 
            className={`switch-button--btn ${btnState2? buttonSelectedClass : buttonUnselectedClass}`}
            onClick={changeState}
            >
                <div 
                className={
                    `switch-button--background 
                    ${btnState2 ? backgroundSelectedClass + " switch-button--background_selected_right" : ""}`
                }
                ></div>
                {secondValue}
            </button>
        </div>
    )
}