import React from 'react';
import Description from '../items/description';
import SecondTitle from '../items/second-title';
import ThirdTitle from '../items/third-title';

export default function World () {

    return (
        <section className="world">
            <div>
                <div className="word--container-img"></div>
            </div>
            <div>
                <SecondTitle value="Meet Client Satisfaction by using product" />
                <Description>
                    The rise of mobile devices transforms the way we consume information entirely and the world's most
                    elevant channels such as Facebook.
                </Description>
                <div className="world--comment">
                    <div className="world--container-stars">
                        <span className="world--star-items"></span>
                        <span className="world--star-items"></span>
                        <span className="world--star-items"></span>
                        <span className="world--star-items"></span>
                        <span className="world--star-items"></span>
                    </div>
                    <ThirdTitle value="User friendly & Customizalble" />
                    <Description>
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end 
                        of the day, going forward, a new normal that has evolved from generation X is on the runway 
                        heading towards a streamlined cloud solution. User generated content in real-time will have multiple 
                        touchpoints for offshoring.
                    </Description>
                    <div className="world--portrait">
                        <img src="" alt=""/>
                        <div>
                            <span className="world--portrait-name">Zoltan Nemeth</span>
                            <span className="world--portrait-work">CEO of Pixer Lab</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}