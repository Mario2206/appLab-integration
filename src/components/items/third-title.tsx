import React from 'react';
import "../../style/items/third-title.css"

const ThirdTitle = ({value, color} : {value : string, color? : string}) => (
    <h3 className="third-title" style={{color : color ? color : "var(--title-color2)"}}>
        {value}
    </h3>
)

export default ThirdTitle