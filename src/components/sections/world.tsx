import React from 'react';
import Description from '../items/description';
import SecondTitle from '../items/second-title';
import ThirdTitle from '../items/third-title';

import "../../style/section/world.css"
import SlideButton from '../items/slide-button';

export default function World () {

    return (
        <section className="world">
            <div className="world--map">
                <div className="world--container-img"></div>
            </div>
            <div className="world--container-comment">
                <SecondTitle value="Meet Client Satisfaction by using product" className="world--main-title"/>
                <Description>
                    The rise of mobile devices transforms the way we consume information entirely and the world's most
                    elevant channels such as Facebook.
                </Description>
                <div className="world--comment">
                    <div className="world--container-stars">
                        <img className="world--star-items" src="/img/star.svg"/>
                        <img className="world--star-items" src="/img/star.svg"/>
                        <img className="world--star-items" src="/img/star.svg"/>
                        <img className="world--star-items" src="/img/star.svg"/>
                        <img className="world--star-items" src="/img/star.svg"/>
                    </div>
                    <ThirdTitle value="User friendly & Customizalble" />
                    <Description>
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end 
                        of the day, going forward, a new normal that has evolved from generation X is on the runway 
                        heading towards a streamlined cloud solution. User generated content in real-time will have multiple 
                        touchpoints for offshoring.
                    </Description>
                    <div className="world--portrait">
                        <img src="/img/adult1.png" alt="adult"/>
                        <div className="world--portrait--perso-info">
                            <span className="world--portrait-name">Zoltan Nemeth</span>
                            <span className="world--portrait-work">CEO of Pixer Lab</span>
                        </div>
                    </div>
                </div> 
                <SlideButton className="world--slide-btn"/>            
            </div>
        </section>
    )
}