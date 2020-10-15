import React from 'react';
import CompanyTitle from '../items/company-title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../style/section/footer.css"
import { scrollViews } from '../../App';
import { Link } from 'react-scroll';

export default function Footer () {

    const SCROLL_DURATION = 1000;

    return (
        <footer className="footer-background">
            <div className="footer-container">
                <CompanyTitle className="footer-container--title"/>
                <ul className="footer-container--links-group">
                    <li>
                        <Link to={scrollViews.HOME} duration={SCROLL_DURATION} smooth={true}>Home</Link>
                    </li>
                    <li>
                        <Link to={scrollViews.KEY_FEATURES} duration={SCROLL_DURATION} smooth={true}>Key Features</Link>
                    </li>
                    <li>
                        <Link to={scrollViews.PRICING} duration={SCROLL_DURATION} smooth={true}>Pricing</Link>
                    </li>
                    <li>
                        <Link to={scrollViews.TESTIMINICAL} duration={SCROLL_DURATION} smooth={true}>Testiminial</Link>
                    </li>
                    <li>
                        <Link to={scrollViews.FAQ} duration={SCROLL_DURATION} smooth={true}>FAQ</Link>
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