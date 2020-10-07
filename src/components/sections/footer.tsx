import React from 'react';
import CompanyTitle from '../items/company-title';

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
            </div>
            
        </footer>
    )
}