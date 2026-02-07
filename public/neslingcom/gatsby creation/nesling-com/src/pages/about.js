import React, { useContext } from "react"

import Layout from "../components/layout"
import ContentCard from "../components/ContentCard"
import Seo from "../components/seo"

import enTranslations from '../strings/en.json';
import deTranslations from '../strings/de.json';

import TranslationContext from '../context/TranslationContext';

const AboutPage = () => { 
    const { isGerman, _ } = useContext(TranslationContext);
    const translations = isGerman ? deTranslations : enTranslations;

    return (
        <Layout navbarTitle={translations.aboutPage.title}>
            <div class="masonry-layout">
                {translations.aboutPage.aboutCards.map((item, index) => (
                    <ContentCard key={index} title={item.title} content={item.content}/>
                ))}
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Home" />

export default AboutPage
