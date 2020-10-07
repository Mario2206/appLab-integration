import * as React from 'react';
import "../../style/items/second-title.css"

const SecondTitle = ({value, className} : {value : string, className? : string}) => (
    <h2 className={`second-title ${className ?? ""}`}>
        {value}
    </h2>
)

export default SecondTitle