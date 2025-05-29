import React, { useContext } from "react";
import { Link } from "gatsby";
import "./NavBar.css";

import TranslationContext from '../context/TranslationContext';

import germanFlag from "../images/german-flag-reversed.png"
import ukFlag from "../images/uk-flag.png"

import enTranslations from '../strings/en.json';
import deTranslations from '../strings/de.json';

const NavBar = ({ title }) => {
    const { isGerman, toggleTranslation } = useContext(TranslationContext);
    const translations = isGerman ? deTranslations : enTranslations;

    return (
        <div className="top-nav">
            <div id="left-container">
                <h1>{title}</h1>             
            </div>

            <nav className="navigation-container">
                <Link to="/home/#home">{translations.navBar.home}</Link>
                <Link to="/home/#portfolio">{translations.navBar.portfolio}</Link>
                <Link to="/home/#about">{translations.navBar.about}</Link>
                <Link to="/home#contact">{translations.navBar.contact}</Link>
            </nav>

            <img className={`flag-image ${!isGerman ? '' : 'hidden'}`} onClick={toggleTranslation} src={germanFlag} />
            <img className={`flag-image ${isGerman ? '' : 'hidden'}`} onClick={toggleTranslation} src={ukFlag} />
        </div>
    );
};

export default NavBar;