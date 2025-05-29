import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContentCard from "../components/ContentCard"

import note from "../images/piratenote.png"
import enTranslations from '../strings/en.json';
import deTranslations from '../strings/de.json';

import TranslationContext from '../context/TranslationContext';


import "../components/contact.css"


const ContactPage = () => {
    const { isGerman, _ } = useContext(TranslationContext);
    const translations = isGerman ? deTranslations : enTranslations;

    return (
        <Layout navbarTitle={translations.contactPage.title}>
            <div id="contact-layout">
                <div id="address-container">
                    <div id="address">
                        <img className="medium-image" src={note} />

                        <div id="address-text-container">
                            <p>{translations.contactPage.address.name}</p>
                            <p>{translations.contactPage.address.street}</p>
                            <p>{translations.contactPage.address.city}</p>
                            <p>{translations.contactPage.address.country}</p>
                            <br></br>
                            <br></br>
                            <p id="email">{translations.contactPage.address.email}</p>
                        </div>
                    </div>
                </div>

                <ContentCard title={translations.contactPage.contactCard.title} content={translations.contactPage.contactCard.content} />
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
