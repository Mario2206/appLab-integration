import React from 'react';
import Description from '../items/description';
import Question from '../items/question';
import SecondTitle from '../items/second-title';

import "../../style/section/questions.css"

type QuestionType = {
    question : string, 
    response : string
}

export default function Questions () {

    const questions : Array<QuestionType> = [
        {
            question : "How to contact with riders emergency ?", 
            response : `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically 
            grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, 
            going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined 
            cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`
        },
        {
            question : "App installation failed, how to update system information ?", 
            response : `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically 
            grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, 
            going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined 
            cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`
        },
        {
            question : "Website response taking time, how to improve ?", 
            response : `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically 
            grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, 
            going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined 
            cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`
        },
        {
            question : "New update fixed all bug and issues", 
            response : `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically 
            grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, 
            going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined 
            cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`
        },
        {
            question : "How to contact with riders emergency ?", 
            response : `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically 
            grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, 
            going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined 
            cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`
        },
    ]


    return (
        <section className="questions">
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