import React from 'react';
import "../../style/items/reward-banner.css"

const RewardBanner = () => (
    <div className="reward-banner">
        <div className="reward-banner--badge">
            <img src={require("../../assets/img/ok.png")} alt="reward"/>
        </div>
        <strong className="reward-banner--text">
            #1 Editors Choice App of 2020
        </strong>
    </div>
)

export default RewardBanner