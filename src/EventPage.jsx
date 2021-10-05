import React from 'react'
import Post from './components/Post'
import './EventPage.css';
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'

import event1 from './components/assets/event_01.png'

const Events = () => {

    
    return (
        <div className="EventPage">
            <div className="EventField">

            <Link to="/"><h3 className="back-button">Tilbake</h3></Link>

            <div style={{ width: "400px" }}>
                <Calendar />
            </div>

            <Post
                image={event1}
                title="Stueprat"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros purus, consequat non metus at, fermentum consequat felis. Proin laoreet, sapien ac sodales dictum, odio tellus eleifend enim, quis suscipit elit dolor vel felis. Praesent quis lectus sed nisi luctus molestie. Aliquam erat volutpat. Fusce consequat placerat scelerisque. Fusce ut urna vehicula, dapibus sapien vitae, eleifend ante. Etiam quam felis, laoreet sed accumsan in, interdum vitae metus. Praesent iaculis urna arcu, ut placerat justo consequat ac. Mauris mauris erat, iaculis non leo vehicula, tincidunt lacinia odio."
                date="Fredag 30.08 kl. 18:00"
                link="https://facebook.com"
            />

            <Post
                image={event1}
                title="Stueprat"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros purus, consequat non metus at, fermentum consequat felis. Proin laoreet, sapien ac sodales dictum, odio tellus eleifend enim, quis suscipit elit dolor vel felis. Praesent quis lectus sed nisi luctus molestie. Aliquam erat volutpat. Fusce consequat placerat scelerisque. Fusce ut urna vehicula, dapibus sapien vitae, eleifend ante. Etiam quam felis, laoreet sed accumsan in, interdum vitae metus. Praesent iaculis urna arcu, ut placerat justo consequat ac. Mauris mauris erat, iaculis non leo vehicula, tincidunt lacinia odio."
                date="Fredag 30.08 kl. 18:00"
                link="https://facebook.com"
            />

            </div>
        </div>
    )
}

export default Events
