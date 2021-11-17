import React from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import './EventPage.css';
import { Link } from 'react-router-dom'

import calendar from './components/assets/calendar.png'
import event1 from './components/assets/event_01.jpg'
import event2 from './components/assets/event_02.jpg'
import event3 from './components/assets/event_03.jpg'

const Events = () => {

    
    return (
        <>
        <Navbar />
        <div className="EventPage">  
            <div className="EventField">

            <img src={calendar} className="innom-calendar" />
            

            <Post
                image={event1}
                title="Eksamens-boost!"
                text="
                Har du ikke kommet i gang med eksamenslesingen du heller? Eller er du allerede veldig lei av lesesalen på Gløshaugen?📚
Kom innom for en koseligere atmosfære og hyggelig stemning🥰 
Vi serverer kaffe og te med noe godt attåt. Alle er velkomne - enten du vil nilese eller prokrastinere😉
Kom som du er, alene eller med en venn💜
                "
                date="Onsdag 17.11 kl. 10-16"
                link="https://fb.me/e/1ooiBQdwP"
            />

            
            <Post
                image={event2}
                title="Håndarbeidskveld"
                text="
                Velkommen til håndarbeidskveld hos Innom!🧶
Ta med deg ditt påbegynte hekle/strikke-prosjekt og jobb med det i våre hyggelige omgivelser, eller kom tomhendt hvis du har lyst til å lære noe nytt! Vi har noe utstyr om du har lyst til å prøve deg med et lite prosjekt. 
Vi serverer te, kaffe og noe å bite i ☕
"
                date="Onsdag 17.11 kl. 17:30-21"
                link="https://fb.me/e/1Wnfr12dZ"
            />

            <Post
                image={event3}
                title="Blomkålsuppe-onsdag!"
                text="
                Hva med å gjøre noe ekstra koselig ut av lunsjen i dag, sammen med andre studenter? Vi serverer gratis hjemmelaget blomkål/purreløk-suppe og rundstykker, samt kaffe og te. Alle er velkomne - om du så vil tilbringe lesedagen her eller bare ha en matpause i en ellers travel hverdag📚✨
                "
                date="Onsdag 24.11 kl. 10-16"
                link="https://fb.me/e/2OmkzrafM"
            />

            

            </div>
        </div>
        </>
    )
}

export default Events
