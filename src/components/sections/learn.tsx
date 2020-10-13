import * as React from 'react';
import ClickButton from '../items/click-button';
import Description from '../items/description';
import SecondTitle from '../items/second-title';

import "../../style/section/learn.css"

const Learn = ()=>{
    return (
        <section className="learn">
            <div>
                <img src="/img/smart-object.png" alt="learn" className="learn--img"/>
            </div>
            <div className="learn--presentation">
                <SecondTitle value="Designed & built by the latest code integration" />
                <Description>
                    The rise of mobile devices transforms the way we consume information entirely and the world's most
                    elevant channels such as Facebook.
                </Description>
                <ClickButton value="Learn more" />
            </div>
        </section>
    )
}

export default Learn