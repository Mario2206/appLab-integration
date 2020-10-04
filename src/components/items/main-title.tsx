import React from 'react';
import "../../style/main-title.css"

const MainTitle = ({value} : {value : string}) => (
    <h1 className="main-title">
        {value}
    </h1>   
)

export default MainTitle