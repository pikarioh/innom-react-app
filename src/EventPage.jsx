import React from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import './EventPage.css';
import { Link } from 'react-router-dom'

import calendar from './components/assets/calendar.png'
import event1 from './components/assets/event_01.jpg'
import event2 from './components/assets/event_02.jpg'

const Events = () => {

    
    return (
        <>
        <Navbar />
        <div className="EventPage">  
            <div className="EventField">

            <img src={calendar} className="innom-calendar" />
            

            <Post
                image={event2}
                title="Juleverksted!"
                text="
                Desember nærmer seg, så vi inviterer til juleverksted på Innom - som et hyggelig avbrekk i mørketiden og eksamenslesingen🎅 🎄 Det blir muligheter for å lage julekort, julehjerter og nøkkelringer. Vi serverer klementiner, pepperkaker og gløgg🧡 Lokalet er også åpent for de som ønsker å studere
                "
                date="Tirsdag 16.11 kl. 11:00"
                link="https://fb.me/e/3Uz1oyACS"
            />

            
            <Post
                image={event1}
                title="Vinyl-Onsdag! +Pizza"
                text="
                Kom innom og ta med dine beste LP-plater! 🎵 Vi skal nyte god musikk sammen over et stykke pizza, en kopp te og en god samtale 🧡
                Kom alene eller ta med en venn!
                "
                date="Tirsdag 16.11 kl. 17-21"
                link="https://fb.me/e/2KWdzveW9"
            />

            

            </div>
        </div>
        </>
    )
}

export default Events
