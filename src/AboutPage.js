import React from 'react'
import Navbar from './components/Navbar'
import './AboutPage.css'
import { Link } from 'react-router-dom'

import service1 from './components/assets/service_01.jpg'
import service2 from './components/assets/service_02.jpg'
import service3 from './components/assets/service_03.jpg'

function AboutPage() {
    return (
        <>
        <Navbar />
        <div className="about-page-section">
            
            <div className="about-page-container">
                <div className="about-page-box-title">
                    <h1>Tilbud</h1>
                    <p>Innom er et sosialt tilbud av og for studenter. Å komme innom oss gir deg mulighet til å komme ut av din egen boble, få aha-opplevelser sammen med andre og å ha et sted å høre til. For å skape dette har innom tre tilbud som beskrives under.</p>

                </div>
                <img src={service1}/>
                <div className="about-page-box right">
                    <h2>Innom Oss</h2>
                    <p>Innom Oss er en trivelig møteplass for studenter. Kom som du er og bli kjent med andre studenter over en hyggelig aktivitet. Dette kan være å spise kvelds, pizza eller vafler sammen, se en (kort-) film, vennespleising, samtalekaféer og liknende. Har du innspill til noe hyggelig vi kan finne på sammen? Bare å ta kontakt!</p>

                </div>
                
                <div className="about-page-box">
                    <h2>Innom Psykologi</h2>
                    <p>I Innom psykologi ønsker vi å arrangere aktiviteter om spennende tema innen psykologi. Disse aktivitetene vil bestå av interaktive workshops ledet av psykologstudenter og uformelle stueprater med en ekspert på et tema. Temaene vil for eksempel være idrettspsykologi, søvn, tilstedeværelse, relasjoner og personlighet.</p>

                </div>

                <img src={service2}/>
                <div className="about-page-box right">
                    <h2>Innom workshop</h2>
                    <p>På workshopene våre kan du få direkte erfaring med tematikk som interesserer mange studenter. Gjennom øvelser, diskusjoner og refleksjon tar vi fatt på temaer som krangling i kollektivet, meningsskaping i hverdagen og verdien av vennskap. Etter workshopen serveres et måltid til alle deltakere, og det legges til rette for at samtalen kan fortsette utover kvelden, enten du møtte opp alene eller sammen med noen.</p>

                </div>
                
                <div className="about-page-box">
                    <h2>Innom Stueprat</h2>
                    <p>Er du student og nysgjerrig på temaer som søvn, idrett, livskvalitet og/eller prestasjonspress? Innom Stueprat er et arrangement for deg som ønsker å komme innom for å høre på en “ekspert” snakke om et tema knyttet til psykologi og det å være student. Det foregår som våre andre arrangementer i vårt koselige lokale og er derfor tilrettelagt for at alle som kommer lett skal kunne delta og stille spørsmål. Det serveres mat og er åpent utover kvelden for å diskutere tema som er blitt formidlet så vel som annet du skulle ha på hjertet. Vi ønsker gjerne at du kommer alene, men kan også ta med deg en venn. </p>

                </div>

                <img src={service3}/>
                <div className="about-page-box right">
                <h2>Innom 1:1</h2>
                    <p>Noen ganger trenger en bare å prate med noen én-til-én. I samarbeid med Sit Råd tilbyr Innom et samtaletilbud hvor studenter kan snakke fortrolig med en psykologstudent om hva de måtte ha på hjertet. Tilbudet utfyller Sit Råd sitt eksisterende tilbud. 
                        <br></br>Innom 1:1 er et samtaletilbud hvor du møter en lyttende student som har grundig opplæring i overholdelse av taushetsplikt og empatisk lytting. Av studentene kan du få hjelp til å orientere deg i eksisterende tilbud og generelle råd om å mestre hverdagen. Tilbudet er et samtaletilbud, og ikke helsehjelp.
                    </p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default AboutPage
