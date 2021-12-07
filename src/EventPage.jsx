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

            {/* <img src={calendar} className="innom-calendar" /> */}
            

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
        
            </div>
        </div>
        </>
    )
}

export default Events
