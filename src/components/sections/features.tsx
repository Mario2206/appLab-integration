import * as React from 'react';
import SecondTitle from '../items/second-title';
import "../../style/features.css"
import Description from '../items/description';
import InfoPoints from '../items/info-points';

const Features = () => (
    <section className="features">
        <div className="features--img-container">
            <img src="/img/phone2.png" alt=""/>
        </div>
        <div className="features-description">
            <SecondTitle value="Awesome apps features"/>
            <Description>
                Increase productivity with a simple to-do app, app for managing your personal budgets
            </Description>
            <div className="features--container-features">
                <InfoPoints />
                <InfoPoints />
                <InfoPoints />
            </div>
        </div>
    </section>
)

export default Features 