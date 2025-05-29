import React, { useContext } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import enTranslations from '../strings/en.json';
import deTranslations from '../strings/de.json';

import TranslationContext from '../context/TranslationContext';

import SkillCard from "../components/SkillCard";


const PortfolioPage = () => { 
    const { isGerman, _ } = useContext(TranslationContext);
    const translations = isGerman ? deTranslations : enTranslations;


    return (
        <Layout navbarTitle={translations.portfolioPage.title}>
            <div className="skill-card-table">
                {translations.portfolioPage.skillCards.map((skillCard, index) => (
                    <SkillCard key={index} areaTitle={skillCard.areaTitle} skills={skillCard.skills} />
                ))}
            </div>
        </Layout>
    )}

export const Head = () => <Seo title="Home" />

export default PortfolioPage
