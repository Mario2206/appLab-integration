import React from 'react';
import CompanyTitle from '../items/company-title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../style/section/footer.css"

export default function Footer () {
    return (
        <footer className="footer-background">
            <div className="footer-container">
                <CompanyTitle className="footer-container--title"/>
                <ul className="footer-container--links-group">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Key Features</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Testiminial</a>
                    </li>
                    <li>
                        <a href="#">FAQ</a>
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