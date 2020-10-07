import React from 'react';
import MainTitle from '../items/main-title';
import RewardBanner from '../items/reward-banner';
import "../../style/section/home.css"
import ClickButton from '../items/click-button';
import Header from './header-container';
import Description from '../items/description';

const Home = () => (
    <div className="container-section container-home">
        <Header />
        <section className = "home">
            <img src="/img/buildings.png" alt="" className="home--background"/>
            <div className="home--title-part">
                <RewardBanner />
                <MainTitle value="Best app for your modern lifestyle"/>
                <Description className="home--title-part--items">
                    Increase productivity with a simple to-do app, app for managing your personal budgets 
                </Description>
                <div className="home--container-buttons">
                    <ClickButton value="Try for free"/>
                    <a href="#" className="home--container-buttons--anchor">Watch demo video</a>
                </div>
            </div>
            <div className="home--img-part">
                <img src="/img/phone.png" alt=""/>
            </div>
        </section>
    </div>

)

export default Home