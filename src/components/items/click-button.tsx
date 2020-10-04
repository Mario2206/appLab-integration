import React from 'react';
import "../../style/click-button.css"

const ClickButton = ({value} : {value : string}) => (
    <a href="#" className="click-button">
        {value}
    </a>
)

export default ClickButton