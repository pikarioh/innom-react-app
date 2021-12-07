import React from 'react'
import './Post.css'

const Post = (props) => {
    return (
        <div className="post">
            <img className="post-img" src={props.image} style={{ width: undefined, height: undefined, aspectRatio: 1 }}/>
            
            <div className="post-context">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <h1 className="post-date">{props.date}</h1>
                <div className="post-button">
                    <h3><a href={props.link} target='_blank' className="post-link">Følg oss på Facebook!</a></h3>
                </div>
            </div>
        </div>
    )
}

export default Post
