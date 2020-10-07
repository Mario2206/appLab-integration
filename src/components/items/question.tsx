import React, { ReactChild, useState } from 'react';
import Description from './description';
import ThirdTitle from './third-title';

import "../../style/items/question.css"

export default function Question ({question, children} : {question : string, children : ReactChild}) {

    const [questionVisibility, setQuestionVisibility] = useState(false)

    function onClick () {
        setQuestionVisibility(prevstate=>!prevstate)
    }
    
    return (
        <div className={`question ${questionVisibility ? "" : "question_hide"}`}>
            <div className="question--container-head">
                <ThirdTitle value={question}/>
                <button className="question--button" onClick={onClick}>
                    {questionVisibility ? "-" : "+"}
                </button>
            </div>
            <div 
            className={`question--container-response ${questionVisibility ? "" : "question--container-response_hide"}`}
            >
                {
                    questionVisibility && 
                    (
                    <Description className="question--response question--response_hide">
                        {children}
                    </Description>
                    )
                }
                
            </div>        
        </div>
    )
    
}