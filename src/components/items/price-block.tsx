import React from 'react';
import ClickButton from './click-button';
import "../../style/price-block.css"

interface IEPriceBlock {
    keyPoints : Array<string>,
    price : number,
    period : "month" | "year",
    title : string,
    description : string,
    buttonVal : string, 
    annexLink? : string, 
    selected? : boolean
}

export default function PriceBlock ({keyPoints, price, period, title, description, buttonVal, annexLink, selected } : IEPriceBlock) {

    const containerClassName = `price-block`

    return (
        <table className={containerClassName} >
            <thead className="price-block--head">
                <tr>
                   <th>
                        <strong className="price-block--price">${price}</strong>
                        <span className="price-block--negative-color">/{period}</span>        
                    </th> 
                </tr>
                <tr>
                    <th>
                        <h3 className="price-block--title">{title}</h3>
                        <p className="price-block--negative-color">{description}</p>
                    </th> 
                </tr>
                
            </thead>
            <tbody>
                {keyPoints.map((item : string)=>(
                    <tr className="price-block--negative-color price-block--keypoints">
                        {item}
                    </tr>
                ))}
                <tr className="price-block--container-btn">
                    <ClickButton value={buttonVal} />
                </tr>
                <div className="price-block--container-annex-link">
                    {
                        annexLink && (
                            <a href="#" className="price-block--annex-link">{annexLink}</a>
                        )
                    }   
                </div>
                
            </tbody>
        </table>
    )
}