import * as React from 'react';
import SecondTitle from '../items/second-title';
import "../../style/section/features.css"
import Description from '../items/description';
import InfoPoints from '../items/info-points';

const Features = ({id} : {id : string}) => (
    <section className="features" id={id || ""}>
        <div className="features--img-container">
            <div className="features--ellipse-1"></div>
            <div className="features--ellipse-2"></div>
            <img src="/img/ellipse-cover.png" className="features--ellipse-cover" alt="back"/>
            <img src="/img/phone2.png" alt="phone" className="features--phone-img"/>
        </div>
        <div className="features--description">
            <div className="features--head">
                <SecondTitle value="Awesome apps features"/>
                <Description>
                    Increase productivity with a simple to-do app, app for managing your personal budgets
                </Description>
            </div>
            <div className="features--container-features">
                <InfoPoints 
                imagePath="/img/performance.png" 
                color="#f55767" 
                backgroundColor="#ffecef" 
                title="Fast Performance"
                row={true}
                padding="25px 0"
                >
                    Get your blood tests delivered at home collect a sample from the news your blood test
                </InfoPoints>
                <InfoPoints 
                imagePath="/img/proto.png" 
                color="#2563ff" 
                backgroundColor="#f4f4ff" 
                title="Fast Performance"
                row={true}
                padding="25px 0"
                >
                    Get your blood tests delivered at home collect a sample from the news your blood test
                </InfoPoints>
                <InfoPoints 
                imagePath="/img/vector.png" 
                color="#40975f" 
                backgroundColor="#e4ffee" 
                title="Fast Performance"
                row={true}
                padding="25px 0"
                >
                    Get your blood tests delivered at home collect a sample from the news your blood test
                </InfoPoints>
            </div>
        </div>
    </section>
)

export default Features 