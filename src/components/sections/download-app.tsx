import React from 'react';
import SecondTitle from '../items/second-title';

import "../../style/section/download-app.css"
import Description from '../items/description';
import FadeBox from '../items/fade-box';

export default function DownloadApp () {
    return (
        <FadeBox className="download-app">
            <div className="download-app--container-text">
                <SecondTitle value="Download our App now !" className="download-app--title"/>
                <Description className="download-app--description">
                    The rise of mobile devices transforms the way we consume information entirely
                    and the world's most elevant channels such as Facebook.
                </Description>
                <div className="download-app--container-dl">
                    <a href="#" className="download-app--store">
                        <img src={require("../../assets/img/google-store.png")} alt="google store"/>
                    </a>
                    <a href="#" className="download-app--store">
                        <img src={require("../../assets/img/app-store.png")} alt="app store"/>
                    </a>
                </div>
            </div>
            <div className="download-app--container-img">
                <img src={require("../../assets/img/city.png")} alt="city" className="download-app--img"/>
            </div>          
        </FadeBox>
    )
}