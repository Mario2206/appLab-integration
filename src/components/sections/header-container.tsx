import React from 'react';
import CompanyTitle from '../items/company-title';
import NavBar from '../items/nav-bar';
import "../../style/header.css"

const Header = () => (
    <header>
        <CompanyTitle/>
        <NavBar />
      </header>
)

export default Header