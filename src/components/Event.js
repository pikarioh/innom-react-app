import React from 'react'
import './Event.css'
import ScrollableSection from 'react-update-url-on-scroll'
import Post from './Post'


const Event = () => {
    return (
        <ScrollableSection name={'eventer'}>
        <section className="event-section" id="event">
            <div className="event-container">
                <h1>Eventer</h1>
                <Post />
                <a><p>Utforske flere eventer her >></p></a>
            </div>
        </section>
        </ScrollableSection>
    )
}

export default Event
