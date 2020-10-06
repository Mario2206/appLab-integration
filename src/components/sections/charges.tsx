import React from 'react';
import Description from '../items/description';
import SecondTitle from '../items/second-title';
import SwitchButton from '../items/switch-button';

export default function Charges () {
    return (
        <section className="charges">
            <SecondTitle value = "Get awesome features, without extra charges" />
            <Description>
                The rise of mobile devices transforms the way we consume information entirely and the world's most
                elevant channels such as Facebook.
            </Description>
            <SwitchButton
            firstValue="Monthly"
            secondValue="Annually"
            />
        </section>
    )
}