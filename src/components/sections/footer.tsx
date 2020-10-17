import React from 'react';
import CompanyTitle from '../items/company-title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../style/section/footer.css"
import { scrollViews } from "../../bin/scroll-params";
import { Link } from 'react-scroll';
import { ScrollLinkComponent } from '../items/scroll-link';

export default function Footer () {

    const SCROLL_DURATION = 1000;

    return (
        <footer className="footer-background">
            <div className="footer-container">
                <CompanyTitle className="footer-container--title"/>
                <ul className="footer-container--links-group">
                    <li>
                        <ScrollLinkComponent to={scrollViews.HOME}>Home</ScrollLinkComponent>
                    </li>
                    <li>
                        <ScrollLinkComponent to={scrollViews.KEY_FEATURES}>Key Features</ScrollLinkComponent>
                    </li>
                    <li>
                        <ScrollLinkComponent to={scrollViews.PRICING}>Pricing</ScrollLinkComponent>
                    </li>
                    <li>
                        <ScrollLinkComponent to={scrollViews.TESTIMINICAL}>Testiminial</ScrollLinkComponent>
                    </li>
                    <li>
                        <ScrollLinkComponent to={scrollViews.FAQ}>FAQ</ScrollLinkComponent>
                    </li>
                </ul>
                <ul className="footer-container--logo">
                    <li>
                        <a href="#" className="footer--icon-fb">
                            <FontAwesomeIcon icon={["fab", "facebook-f"]} color="green" size="2x"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer--icon-fb">
                            <FontAwesomeIcon icon={["fab", "twitter"]} color="green" size="2x"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer--icon-fb">
                            <FontAwesomeIcon icon={["fab", "github"]} color="green" size="2x"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="footer--icon-fb">
                            <FontAwesomeIcon icon={["fab", "slack-hash"]} color="green" size="2x"/>
                        </a>
                    </li>
                </ul>
                <em className="footer--copyright">Copyright© Arifur Rahman Tushar 2019. All rights reserved</em>
            </div>
            
        </footer>
    )
}