import React, {useState} from 'react';
import Description from '../items/description';
import SecondTitle from '../items/second-title';
import commentsData from "../../data/comments.json"

import "../../style/section/world.css"
import SlideButton from '../items/slide-button';
import CommentBlock from '../items/comment-block';

import anime from "animejs"
import { worldBlockAnim,worldBlockAnimBack } from '../../animation/world-block-anim';

type Direction = 1|-1|0 //1 for right, -1 for left, 0 for no direction

export default function World () {

    const [currentComment, setCurrentComment] = useState<number>(0)
    const comment = commentsData[currentComment] ?? commentsData[0]

    function incrementComment() {      
        setCurrentComment((prevstate : number) => commentsData.length - 1 > prevstate ? prevstate + 1 : prevstate)
    }

    function decrementComment () {
        setCurrentComment((prevstate : number) => prevstate > 0 ? prevstate - 1 : prevstate)   
    }

    function changeComment(dir : Direction) {
        const timeLine = anime.timeline({
            duration : 4000,
        })
        timeLine.add(worldBlockAnim(1500,dir, dir === 1 ? incrementComment : decrementComment ))
        timeLine.add(worldBlockAnimBack(1500,dir === 1 ? -1 : 1,), 2000)
    }

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
                <CommentBlock
                className="world--comment"
                title={comment.title}
                starsNumber={comment.starsNumber}
                commentary={comment.comment}
                userName={comment.userName}
                work={comment.work}
                portrait={comment.portrait}
                />
                <SlideButton 
                className="world--slide-btn" 
                rightClick={()=>changeComment(1)}
                leftClick={()=>changeComment(-1)}
                enable={[currentComment === commentsData.length - 1 || currentComment > 0, currentComment < commentsData.length - 1]}
                />            
            </div>
        </section>
    )
}