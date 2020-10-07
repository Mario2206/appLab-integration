import React, { useState } from 'react';
import Description from '../items/description';
import PriceBlock from '../items/price-block';
import SecondTitle from '../items/second-title';
import SwitchButton from '../items/switch-button';

import "../../style/charges.css"

export default function Charges () {

    const [currentBlock, setCurrentBlock] = useState<1|2>(1)
    const [block1Visible, setBlock1Visible] = useState(true) 
    const [block2Visible, setBlock2Visible] = useState(false) 
    
    const animDuration = 1
    const fadeOutAnim = `blockFadeOut ${animDuration}s`
    const fadeInAnim = `blockFadeIn ${animDuration}s forwards`

    const keyPoints1 = [
        "Drag & Drop Builder",
        "1,000s of Templates",
        "Blog Support Tools",
        "eCommerce Store"
    ]

    function changeBlock () {
        setCurrentBlock(prevstate=>{

            setTimeout(()=> {
                if(prevstate === 2) {
                    setBlock1Visible(true)
                    setBlock2Visible(false)
                }
                else 
                {
                    setBlock1Visible(false)
                    setBlock2Visible(true)
                }
            }, animDuration * 1000)

            return prevstate === 1 ? 2 : 1
        
        })
    }

    return (
        <section className="charges">
            <SecondTitle value = "Get awesome features, without extra charges" />
            <Description>
                The rise of mobile devices transforms the way we consume information entirely and the world's most
                elevant channels such as Facebook.
            </Description>
            <div className="charges--container-btn">
                <SwitchButton
                firstValue="Monthly"
                secondValue="Annually"
                onChange={changeBlock}
                />
            </div>
            <div className={`charges--container-block ${block1Visible ? "" : "charges--container-block_hide"}`} style={{animation : currentBlock === 2 ? fadeOutAnim : fadeInAnim}}>
                <PriceBlock
                    keyPoints={keyPoints1}
                    price={0}
                    period="month"
                    title="Business Class"
                    description="For small teams or office"
                    buttonVal="Start free trail"
                />
                <PriceBlock
                    keyPoints={keyPoints1}
                    price={99}
                    period="month"
                    title="Pro Master"
                    description="For Best opportunities"
                    buttonVal="Subscribe Now"
                    selected={true}
                    annexLink="Or Start 14 days trail"
                />
            </div>
            <div className={`charges--container-block ${block2Visible ? "" : "charges--container-block_hide"}`} style={{animation : currentBlock === 2 ? fadeInAnim : fadeOutAnim}}>
                <PriceBlock
                    keyPoints={keyPoints1}
                    price={0}
                    period="year"
                    title="Business Class"
                    description="For small teams or office"
                    buttonVal="Start free trail"
                />
                <PriceBlock
                    keyPoints={keyPoints1}
                    price={990}
                    period="year"
                    title="Pro Master"
                    description="For Best opportunities"
                    buttonVal="Subscribe Now"
                    selected={true}
                    annexLink="Or Start 14 days trail"
                />
            </div>
        </section>
    )
}