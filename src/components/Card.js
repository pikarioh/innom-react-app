import React from 'react'
import './Card.css'

function Card (props) {
    return (
        <div className="card">
                <img src={props.image} style={{ width: '100%', height: undefined, aspectRatio: 1 }} />
                <h2>{props.title}</h2>
        </div>
    )
}

export default Card
