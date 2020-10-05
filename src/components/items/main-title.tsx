import React from 'react';
import "../../style/main-title.css"

const MainTitle = ({value, className} : {value : string, className? : string}) => (
    <h1 className={`main-title ${className}`}>
        {value}
    </h1>   
)

export default MainTitle