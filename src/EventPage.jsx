import React from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import './EventPage.css';
import { Link } from 'react-router-dom'

import calendar from './components/assets/calendar.png'
import event1 from './components/assets/event_01.png'
import event2 from './components/assets/event_02.jpg'
import event3 from './components/assets/event_03.jpg'

const Events = () => {

    
    return (
        <>
        <Navbar />
        <div className="EventPage">  
            <div className="EventField">

            <img src={calendar} style={{ width: '60%', margin: '0 auto 0'}} className="innom-calendar" />
            

            <Post
                image={event1}
                title="Tegnekurs"
                text="
                Kom innom og tegne med oss! Kom som du er, eller ta med en venn! 🧡
                "
                date="Søndag 20. februar kl.18:00"
                link="https://www.facebook.com/kom.innom.oss/?ref=page_internal"
            />

            <Post
                image={event2}
                title="Burgersøndag!"
                text="
                Kom innom og lag burger med oss! Kom som du er, eller ta med en venn! 🧡
                "
                date="Søndag 27. februar kl.18:00"
                link="https://www.facebook.com/kom.innom.oss/?ref=page_internal"
            />
        
            </div>
        </div>
        </>
    )
}

export default Events
