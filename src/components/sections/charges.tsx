import React, { useState } from 'react';
import Description from '../items/description';
import PriceBlock from '../items/price-block';
import SecondTitle from '../items/second-title';
import SwitchButton from '../items/switch-button';

import "../../style/section/charges.css"

type BlockState = {
    currentBlock : number,
    isVisible : boolean
}

export default function Charges () {

    const [blockState, setBlockState] = useState<BlockState>({currentBlock : 1, isVisible : true})
    const [enable, setEnable] = useState(true)

    const animDuration = 1
    const fadeOutAnim = `blockFadeOut ${animDuration}s`
    const fadeInAnim = `blockFadeIn ${animDuration}s forwards`
    const animationBlockStyle = {animation : blockState.isVisible ? fadeInAnim : fadeOutAnim}

    const keyPoints1 = [
        "Drag & Drop Builder",
        "1,000s of Templates",
        "Blog Support Tools",
        "eCommerce Store"
    ]

    function changeBlock () {
        setBlockState((prevstate : BlockState)=>{
            const nextBlock = prevstate.currentBlock === 1 ? 2 : 1
            setEnable(false)
            setTimeout(()=> {
                setBlockState({...prevstate, currentBlock : nextBlock})
                setEnable(true)
            }, animDuration * 1000)

            return {...prevstate, isVisible : !prevstate.isVisible} 
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
                onChange={enable ? changeBlock : null}
                />
            </div>
            {(blockState.currentBlock === 1) && 
            (
                    <div className={`charges--container-block`} style={animationBlockStyle}>
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
            )}
            {
                (blockState.currentBlock === 2) && 
                (
                    <div className={`charges--container-block`} style={animationBlockStyle}>
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
                )
            }
            
        </section>
    )
}