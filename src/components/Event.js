import React from 'react'
import './Event.css'
import ScrollableSection from 'react-update-url-on-scroll'
import Post from './Post'
import { Link } from 'react-router-dom'


const Event = () => {
    return (
        <ScrollableSection name={'eventer'}>
        <section className="event-section" id="event">
            <div className="event-container">
                <h1>Eventer</h1>
                <Post />
                <Link exact to="/test">Utforsk flere eventer her >></Link>
            </div>
        </section>
        </ScrollableSection>
    )
}

export default Event
