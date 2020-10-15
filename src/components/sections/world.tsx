import React, {useState} from 'react';
import Description from '../items/description';
import SecondTitle from '../items/second-title';
import commentsData from "../../data/comments.json"

import "../../style/section/world.css"
import SlideButton from '../items/slide-button';
import CommentBlock from '../items/comment-block';

import anime from "animejs"

import { worldBlockAnim,worldBlockAnimBack } from '../../animation/world-block-anim';



export default function World ({id} : {id : string}) {

    const [currentComment, setCurrentComment] = useState<number>(0)
    const [changeCommentEnable, setChangeCommentEnable] = useState<boolean>(true)

    const comment = commentsData[currentComment] ?? commentsData[0]
    const singleAnimDuration = 1500

    function incrementComment() {      
        setCurrentComment((prevstate : number) => commentsData.length - 1 > prevstate ? prevstate + 1 : prevstate)
    }

    function decrementComment () {
        setCurrentComment((prevstate : number) => prevstate > 0 ? prevstate - 1 : prevstate)   
    }

    function changeComment(dir : number) {

        if(!changeCommentEnable) return

        setChangeCommentEnable(false)

        const timeLine = anime.timeline({
            duration : singleAnimDuration * 2,
        })

        timeLine.add(worldBlockAnim(singleAnimDuration,dir, dir > 0 ? incrementComment : decrementComment ))
        
        timeLine.add(worldBlockAnimBack(
            singleAnimDuration,
            -dir, 
            ()=>setChangeCommentEnable(true)), 
            singleAnimDuration
            )
    }

    return (
        <section className="world">
            <div className="world--map">
                <div className="world--container-img">
                    <img src="/img/map.png" alt="" className="world--map-background"/>
                    <img src="/img/adult2.png" alt="user" className="world--map-portrait-img"/>
                    <img src="/img/adult3.png" alt="user" className="world--map-portrait-img"/>
                    <img src="/img/3974.png" alt="user" className="world--map-portrait-img"/>
                    <img src="/img/adult-beach-casual-736716.png" alt="user" className="world--map-portrait-img"/>
                    <img src="/img/black-and-white-fun-good-looking-91227.png" alt="user" className="world--map-portrait-img"/>
                    <img src="/img/adult1.png" alt="user" className="world--map-portrait-img"/>
                </div>
            </div>
            <div className="world--container-comment" id={id || ""}>
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