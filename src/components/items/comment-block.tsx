import React, { CSSProperties, ReactChild } from 'react';
import Description from './description';
import ThirdTitle from './third-title';

import "../../style/items/comment-block.css"

interface IECommentBlock {
    starsNumber : number,
    title : string,
    commentary : string,
    portrait : string,
    userName : string, 
    work : string,
    className?:string,
    style? : CSSProperties
}

export default function CommentBlock ({
    starsNumber, 
    title,
    commentary,
    portrait,
    userName,
    work,
    className, 
    style
} : IECommentBlock) {

    const stars : Array<ReactChild> = createStars()

    function createStars () {
        const stars : Array<ReactChild> = []

        for(let i = 0; i < starsNumber; i++) {
            stars.push(<img className="comment--star-items" src="/img/star.svg" key={i} alt="star"/>)
        }

        return stars
    }

    return (
        <div className={`${className ?? ""}`} style={style}>
            <div className="comment--container-stars">
                {
                    stars
                }
            </div>
            <ThirdTitle value={title}/>
            <Description>
                {
                commentary
                }
            </Description>
            <div className="comment--portrait">
                <img src={portrait} alt="adult" className="comment--portrait-img"/>
                <div className="comment--portrait--perso-info">
                    <span className="comment--portrait-name">{userName}</span>
                    <span className="comment--portrait-work">{work}</span>
                </div>
            </div>
        </div> 
    )
}