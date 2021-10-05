import React from 'react'
import './Event.css'
import Post from './Post'
import { Link } from 'react-router-dom'

import event1 from './assets/event_01.png'

const Event = () => {
    return (
        <section className="event-section" id="event">
            <div className="event-container">
                <h1>Eventer</h1>

                <Post
                image={event1}
                title="Stueprat"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros purus, consequat non metus at, fermentum consequat felis. Proin laoreet, sapien ac sodales dictum, odio tellus eleifend enim, quis suscipit elit dolor vel felis. Praesent quis lectus sed nisi luctus molestie. Aliquam erat volutpat. Fusce consequat placerat scelerisque. Fusce ut urna vehicula, dapibus sapien vitae, eleifend ante. Etiam quam felis, laoreet sed accumsan in, interdum vitae metus. Praesent iaculis urna arcu, ut placerat justo consequat ac. Mauris mauris erat, iaculis non leo vehicula, tincidunt lacinia odio."
                date="Fredag 30.08 kl. 18:00"
                link="https://facebook.com"
                />


                <Link to="/eventer"><h2>Utforsk flere eventer her >> </h2></Link>
            </div>
        </section>
    )
}

export default Event
