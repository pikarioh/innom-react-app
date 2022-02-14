import React from 'react'
import './Event.css'
import Post from './Post'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

import event1 from './assets/event_01.png'

import calendar from './assets/calendar.png'

const Event = () => {
    return (
        <section className="event-section" id="event">
            <div className="event-container">
                <h1>Eventer</h1>

                <Post
                image={event1}
                title="Tegnekurs"
                text="
                Kom innom og tegne med oss! Kom som du er, eller ta med en venn! 🧡
                "
                date="Søndag 20. februar kl.18:00"
                link="https://www.facebook.com/kom.innom.oss/?ref=page_internal"
                />


                <img src={calendar} style={{ width: '60%'}} className="innom-calendar" />

                <Link to="/eventer" onClick={() => scroll.scrollToTop()} style={{ fontSize: '60px', textDecoration: 'none', color: 'inherit', color: 'white'}}>Flere eventer >></Link>
            </div>
        </section>
    )
}

export default Event
