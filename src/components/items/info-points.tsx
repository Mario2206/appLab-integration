import * as React from 'react';
import "../../style/info-points.css"
import Description from './description';

interface IEInfoPoints {
    imagePath : string, 
    color : string, 
    backgroundColor : string, 
    title : string,
    children : React.ReactChild,
    row? : boolean,
    padding? : string,
    alignItems? : string,
    justifyContent? : string,
}

const InfoPoints = ({imagePath, color, backgroundColor, title, children, row, padding, alignItems, justifyContent} : IEInfoPoints) => {
    
    const styles : React.CSSProperties = {
        flexDirection : row ? "row" : "column", 
        padding,
        alignItems : alignItems ?? "flex-end",
        justifyContent : justifyContent ?? "center"
    }

    return (
        <div style={styles} className="info-points">
            <div style={{backgroundColor}} className="info-points--container-img">
                <img src={imagePath} alt="item" className="info-points--img"/>
            </div>
            <div className={`${row ? "info-points--text-row-container" : "info-points--text-column-container"}`}>
                <h3 style={{color}} className="info-points--title">
                    {title}
                </h3>
                <Description className="info-points--description">
                    {children}
                </Description>        
            </div>
        </div>
    )
}

export default InfoPoints