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
                title="God Jul!"
                text="
                Innom har tatt juleferien. Vi ses igjen i januar!
                Ønsker alle en riktig god jul! 🎅🎄
                "
                date="Ses i januar!"
                link="https://www.facebook.com/kom.innom.oss/?ref=page_internal"
            />


                <Link to="/eventer" onClick={() => scroll.scrollToTop()} style={{ fontSize: '40px', textDecoration: 'none', color: 'inherit', color: 'white'}}>Flere eventer >></Link>
            </div>
        </section>
    )
}

export default Event
