import React from 'react';
import "../../style/section/trusted.css"
import FadeBox from '../items/fade-box';

const Trusted = () => (
    <FadeBox className="trusted">
        <h4 className="trusted--title">Trusted by companies like</h4>
        <div className="trusted--container-items">
            <img src={require("../../assets/img/southwest.png")} alt="" className="trusted--items"/>
            <img src={require("../../assets/img/anubis.png")} alt="" className="trusted--items"/>
            <img src={require("../../assets/img/alonzo.png")} alt="" className="trusted--items"/>
            <img src={require("../../assets/img/express.png")} alt="" className="trusted--items"/>
            <img src={require("../../assets/img/maniac.png")} alt="" className="trusted--items"/>
        </div>        
    </FadeBox>

)

export default Trusted