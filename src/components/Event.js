import React from 'react'
import './Event.css'
import Post from './Post'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import event1 from './assets/event_01.jpg'

const Event = () => {
    return (
        <section className="event-section" id="event">
            <div className="event-container">
                <h1>Eventer</h1>

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


                <Link to="/eventer" onClick={() => scroll.scrollToTop()} style={{ fontSize: '40px', textDecoration: 'none', color: 'inherit', color: 'white'}}>Flere eventer >></Link>
            </div>
        </section>
    )
}

export default Event
