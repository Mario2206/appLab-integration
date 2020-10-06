import React from 'react';
import Description from '../items/description';
import InfoPoints from '../items/info-points';
import SecondTitle from '../items/second-title';

import "../../style/ultimate-features.css"
import ClickButton from '../items/click-button';

export default function UltimateFeatures () {

    return (
        <section className="ultimate-features">
            <div className="utlimate-features--left-part">
                <div className="ultimate-features--container-title">
                    <SecondTitle value="Ultimate features that we built"/>
                    <Description>
                        The rise of mobile devices transforms the way we consume information entirely.
                    </Description>
                </div>
                <div className="ultimate-features--container-info-points">
                    <InfoPoints 
                        imagePath="/img/web-design.png" 
                        color="#313b5b" 
                        backgroundColor="#ffecef" 
                        title="App Development"
                        row={false}
                        alignItems="flex-start"
                        justifyContent="flex-start"
                    >
                                Get your blood tests delivered at home collect a sample from the news your blood test
                    </InfoPoints>
                    <InfoPoints 
                        imagePath="/img/award.png" 
                        color="#313b5b" 
                        backgroundColor="#eaf9ff" 
                        title="App Development"
                        row={false}
                        alignItems="flex-start"
                        justifyContent="flex-start"
                    >
                                Get your blood tests delivered at home collect a sample from the news your blood test
                    </InfoPoints> 
                    <InfoPoints 
                        imagePath="/img/cloud.png" 
                        color="#313b5b" 
                        backgroundColor="#fff6d3" 
                        title="App Development"
                        row={false}
                        alignItems="flex-start"
                        justifyContent="flex-start"
                    >
                                Get your blood tests delivered at home collect a sample from the news your blood test
                    </InfoPoints>               
                    <InfoPoints 
                        imagePath="/img/custom.png" 
                        color="#313b5b" 
                        backgroundColor="#e4ffee" 
                        title="App Development"
                        row={false}
                        alignItems="flex-start"
                        justifyContent="flex-start"
                    >
                                Get your blood tests delivered at home collect a sample from the news your blood test
                    </InfoPoints>
                </div>
            </div>
            
            <div className="ultimate-features--img-part">
                <img src="/img/phone4.png" alt="phone" className="ultimate-features--img ultimate-features--img_front"/>
                <img src="/img/phone5.png" alt="phone" className="ultimate-features--img ultimate-features--img_back"/>
            </div>
           
            <div>
                <ClickButton value="See all" />
            </div>
        </section>
    )
} 