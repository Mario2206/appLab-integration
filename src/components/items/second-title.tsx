import * as React from 'react';
import "../../style/second-title.css"

const SecondTitle = ({value} : {value : string}) => (
    <h2 className="second-title">
        {value}
    </h2>
)

export default SecondTitle