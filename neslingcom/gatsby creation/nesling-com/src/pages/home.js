import React, { useContext } from "react"

import TranslationContext from "../context/TranslationContext"

import Layout from "../components/layout"
import Seo from "../components/seo"

import train from "../images/train-animated2.gif"
import "../components/home.css"

import PortfolioPage from "./portfolio"
import AboutPage from "./about"
import ContactPage from "./contact"

import enTranslations from '../strings/en.json';
import deTranslations from '../strings/de.json';

const HomePage = () => { 
    // TODO: outsource home and basic layout
    // TODO: unnicode -> allow ü, ö etc
    // TODO: better and more global translation handling?

    const { isGerman, _ } = useContext(TranslationContext);
    const translations = isGerman ? deTranslations : enTranslations;

    return (
        <div id="section-container">

            <section id="home">
                <Layout navbarTitle={translations.homePage.title}>
                    <div id="home-container">
                        <div id="upper-container">
                            <h1 id="introduction-text">{translations.homePage.introductionText}</h1>

                            <div id="areas-container">
                                <div class="area-container" id="last-topic-container">
                                    <h2 class="area-title" id="last-topic-title">{translations.homePage.latestTopic.title}:</h2>
                                    <h4 class="area-text" id="last-topic-text">{translations.homePage.latestTopic.content}</h4>
                                </div>

                                <div class="area-container" id="last-project-container">
                                    <h2 class="area-title" id="last-project-title">{translations.homePage.latestProject.title}:</h2>
                                    <h4 class="area-text" id="last-project-text">{translations.homePage.latestProject.content}</h4>
                                </div>
                            </div>

                        </div>


                        <h2 id="about-me-text">{translations.homePage.aboutMe}</h2>

                    </div>
                </Layout>
            </section>


            <section id="portfolio">
                <PortfolioPage />
            </section>

            <section id="about">
                <AboutPage />
            </section>

            <section id="contact">
                <ContactPage />
            </section>

            <div id="train-container">
                <img className="small-image" src={train} />
                <div id="train-text">{translations.global.trainText}</div>
            </div>

        </div>
        )}

export const Head = () => <Seo title="Home" />

export default HomePage