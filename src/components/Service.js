import React from 'react'
import './Service.css'
import Card from './Card'
import card1 from './assets/card_01.jpg'
import card2 from './assets/card_02.jpg'
import card3 from './assets/card_03.jpg'
import { Link } from 'react-router-dom'

const Service = () => {
    return (
        <section className="service-section" id="service">
            <div className="service-container">
                <div className="service-info">
                    <h1>Tilbud</h1>
                    <p>Innom er et sosialt tilbud av og for studenter. Å komme innom betyr å komme ut av sin egen boble, få noen aha-opplevelser sammen med andre og å ha et sted å høre til. For å få til dette har innom tre hovedtilbud som beskrives under.</p>
                </div>

                <Link to="/tilbud">
                <div className="service-card-box">
                    <Card
                        image={card1}
                        title='Innom oss'
                     />

                    <Card
                        image={card2}
                        title='Innom psykologi'
                    />

                    <Card
                        image={card3}
                        title='Innom 1:1'
                    />
                </div>
                </Link>
                
                
            </div>
        </section>
    )
}

export default Service
