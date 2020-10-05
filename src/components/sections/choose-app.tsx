import * as React from 'react';
import Description from '../items/description';
import InfoPoints from '../items/info-points';
import SecondTitle from '../items/second-title';
import "../../style/choose-app.css"

const ChooseApp = ()=> {

    const paddingInfoPoints = ""

    return(
        <section className="choose-app">
            <div className="choose-app--header">
                <SecondTitle value="Why you should choose our app" />
                <Description className="choose-app--text-description">
                    The rise of mobile devices transforms the way we consume information entirely and the world's most
                    elevant channels such as Facebook.
                </Description>
            </div>
            <div className="choose-app--container-items">
                <InfoPoints 
                    imagePath="/img/web-design.png" 
                    color="#313b5b" 
                    backgroundColor="#ffecef" 
                    title="App Development"
                    row={false}
                    padding={paddingInfoPoints}
                    alignItems="center"
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
                    padding=""
                    alignItems="center"
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
                    padding=""
                    alignItems="center"
                    justifyContent="flex-start"
                >
                            Get your blood tests delivered at home collect a sample from the news your blood test
                </InfoPoints>               
            </div>
            <div className="choose-app--container-items">
                <InfoPoints 
                    imagePath="/img/custom.png" 
                    color="#313b5b" 
                    backgroundColor="#e4ffee" 
                    title="App Development"
                    row={false}
                    padding={paddingInfoPoints}
                    alignItems="center"
                    justifyContent="flex-start"
                >
                            Get your blood tests delivered at home collect a sample from the news your blood test
                </InfoPoints>
                <InfoPoints 
                    imagePath="/img/ux.png" 
                    color="#313b5b" 
                    backgroundColor="#f4f4ff" 
                    title="App Development"
                    row={false}
                    padding=""
                    alignItems="center"
                    justifyContent="flex-start"
                >
                            Get your blood tests delivered at home collect a sample from the news your blood test
                </InfoPoints> 
                <InfoPoints 
                    imagePath="/img/support.png" 
                    color="#313b5b" 
                    backgroundColor="#fdeee4" 
                    title="App Development"
                    row={false}
                    padding=""
                    alignItems="center"
                    justifyContent="flex-start"
                >
                            Get your blood tests delivered at home collect a sample from the news your blood test
                </InfoPoints>               
            </div>
            <div className="choose-app--container-items"></div>
        </section>
    )
}

export default ChooseApp