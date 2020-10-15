import React from 'react';
import Description from '../items/description';
import Question from '../items/question';
import SecondTitle from '../items/second-title';

import questionsData from "../../data/questions.json"
import "../../style/section/questions.css"

type QuestionType = {
    question : string, 
    response : string
}

export default function Questions ({id} : {id : string}) {

    const questions : Array<QuestionType> = questionsData


    return (
        <section className="questions" id={id || ""}>
            <div className="questions--head">
                <SecondTitle value="Frequently asked questions" />
                <Description className="questions--head--description">
                    The rise of mobile devices transforms the way we consume information entirely and the world's most
                    elevant channels such as Facebook.
                </Description>
            </div>          
            <div className="questions--container-items">
                {questions.map((item, index)=>(
                    <Question question={item.question} key={index}>
                       {item.response}
                    </Question>
                ))}
                
            </div>
        </section>
    )
}