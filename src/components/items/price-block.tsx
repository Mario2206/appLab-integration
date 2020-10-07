import React from 'react';
import ClickButton from './click-button';
import "../../style/items/price-block.css"

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
        <div className={containerClassName} >
            <div className="price-block--head">
                <div>
                   <div>
                        <strong className="price-block--price">${price}</strong>
                        <span className="price-block--negative-color">/{period}</span>        
                    </div> 
                </div>
                <div>
                    <div>
                        <h3 className="price-block--title">{title}</h3>
                        <p className="price-block--negative-color">{description}</p>
                    </div> 
                </div>
                
            </div>
            <div>
                {keyPoints.map((item : string, index : number)=>(
                    <div className="price-block--negative-color price-block--keypoints" key={index}>
                        {item}
                    </div>
                ))}
                <div className="price-block--container-btn">
                    <ClickButton value={buttonVal} />
                </div>
                <div className="price-block--container-annex-link">
                    {
                        annexLink && (
                            <a href="#" className="price-block--annex-link">{annexLink}</a>
                        )
                    }   
                </div>
                
            </div>
        </div>
    )
}