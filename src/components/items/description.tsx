import * as React from 'react';
import "../../style/description.css"

const Description = ({children, className} : {children : React.ReactChild, className? : string}) => (
    <p className={`description ${className}`}>
        {children}
    </p>
)

export default Description