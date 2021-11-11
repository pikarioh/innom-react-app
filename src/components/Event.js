import React from 'react'
import './Event.css'
import Post from './Post'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import event2 from './assets/event_02.jpg'

const Event = () => {
    return (
        <section className="event-section" id="event">
            <div className="event-container">
                <h1>Eventer</h1>

                <Post
                image={event2}
                title="Juleverksted!"
                text="
                Desember nærmer seg, så vi inviterer til juleverksted på Innom - som et hyggelig avbrekk i mørketiden og eksamenslesingen🎅 🎄 Det blir muligheter for å lage julekort, julehjerter og nøkkelringer. Vi serverer klementiner, pepperkaker og gløgg🧡 Lokalet er også åpent for de som ønsker å studere
                "
                date="Tirsdag 16.11 kl. 11:00"
                link="https://fb.me/e/3Uz1oyACS"
                />


                <Link to="/eventer" onClick={() => scroll.scrollToTop()} style={{ fontSize: '40px', textDecoration: 'none', color: 'inherit', color: 'white'}}>Flere eventer >></Link>
            </div>
        </section>
    )
}

export default Event
