import React from 'react'
import ScrollableSection from 'react-update-url-on-scroll'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import './About.css'
import { Link } from 'react-router-dom'
import about1 from './assets/about_01.jpg'
import ansatt1 from './assets/ansatt_01.jpg'
import AboutPage from "../AboutPage"

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="om-innom">
                    <div className="om-innom-text">
                        <h1>Om Innom</h1>
                        <p>Innom er et nyoppstartet studentdrevet prosjekt åpent for alle studenter. Tilbudet er av sosial art hvor studenter kan komme innom for å bli kjent og knytte bånd med andre studenter - og for å lære om psykologiske fenomener og delta på aktiviteter. Innom skal være et gratis tilbud som er morsomt, sosialt og inspirerende.</p>
                    </div>
                    <img src={about1} style={{ width: '50%', height: undefined, aspectRatio: 1 }}/>
                </div>

                <div className="ansatte-innom">
                    <img src={ansatt1} style={{ width: '45%', height: undefined, aspectRatio: 1 }}/>
                    <div className="ansatt-innom-text">
                        <h1>Ansatte i Innom</h1>
                        <p>Innom er utarbeidet av en tverrfaglig studentgruppe med 10 ansatte, som studerer industriell design, grafisk design, kunst, elektronisk systemdesign og innovasjon, og psykologi. Sammen har vi laget Innom, hvor kjerneverdiene våre tilstedeværelse, åpenhet og skapende har vært sentrale både på arbeidsplassen og i utformingen av tilbudet. Det faglige innholdet er utviklet av psykologstudentene.</p>
                    </div> 
                </div>

                <div className="about-team" >
                    <AboutPage />
                </div>

                <div className="innom-insta">
                    <h1>#kominnom (@kom.innom)</h1>
                    <InstagramFeed token="IGQVJWWUM2TEpOaVZAsRWZATelFPd2JKNlY4eUZAkSWN1dmN1OC1ldEVweU5PMVB5ajdtYS1KMmpQU3FMSDQ0WF9oWHlkM01WcmxOZAElCYWJueWJVM1EyMkpqeVNPaHlQZA2IyYUZAGdFo0WFRsMkhZAT0ZAGbQZDZD"  counter="6"/>
                </div>

                
            </div>
        </section>
    )
}

export default About
