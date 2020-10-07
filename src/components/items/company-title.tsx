import React from 'react';
import "../../style/items/company-title.css"

const CompanyTitle = ({className} : {className? : string}) => (
    <span className={`company-title ${className ?? ""}`}>
        <span className="company-title--part1">App</span>
        <span className="company-title--part2">Lab</span>
    </span>
)
export default CompanyTitle