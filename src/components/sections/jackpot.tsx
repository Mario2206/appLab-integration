import * as React from 'react';
import Description from '../items/description';
import SecondTitle from '../items/second-title';
import '../../style/jackpot.css'
import InfoPoints from '../items/info-points';

const Jackpot = ()=> {

    const paddingInfoPoints = "25px 50px"
    
    return (
        <section className="jackpot">
            <div className="jackpot--first-part">
                <SecondTitle value="Smart jackpots that you may love this anytime & anywhere"/>
                <hr className="jackpot--side-bar"/>
                <Description className="jackpot--description">
                    The rise of mobile devices transforms the way we consume information entirely and the world's most
                    elevant channels such as Facebook.
                </Description>
            </div>
            <div className="jackpot--container-infos">
                    <InfoPoints 
                    imagePath="/img/automatic.png" 
                    color="#f55767" 
                    backgroundColor="#ffecef" 
                    title="Automatic Payouts"
                    row={false}
                    padding={paddingInfoPoints}
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    >
                        Get your blood tests delivered at home collect a sample from the news your blood test
                    </InfoPoints>
                    <InfoPoints 
                    imagePath="/img/network.png" 
                    color="#2563ff" 
                    backgroundColor="#f4f4ff" 
                    title="Network Effect"
                    row={false}
                    padding={paddingInfoPoints}
                    alignItems="flex-start"
                    >
                        Get your blood tests delivered at home collect a sample from the news your blood test
                    </InfoPoints>
                    <InfoPoints 
                    imagePath="/img/reward.png" 
                    color="#40975f" 
                    backgroundColor="#e4ffee" 
                    title="Bigger Rewards Method"
                    row={false}
                    padding={paddingInfoPoints}
                    alignItems="flex-start"
                    >
                        Get your blood tests delivered at home collect a sample from the news your blood test
                    </InfoPoints>
            </div>
        </section>
    )
}

export default Jackpot