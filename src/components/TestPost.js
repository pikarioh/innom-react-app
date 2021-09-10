import React from 'react'


const TestPost = (props) => {

    let styles = {
        margin: '20px',
        padding: '14px',
        width: '600px',
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: '16px'
    };


    return (
        <div className="test-post" style={styles}>
            <div className="header-box" style={{ position: 'relative', textAlign: 'left', color: 'white' }}>
                <img src={props.image} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px', marginBottom: '10px'}}/>
                <h1 className="test-title" style={{ position: 'absolute', bottom: '10px', left: '12px', color: 'white'}}>{props.title}</h1>
            </div>
            
            <h4 className="test-post-date">{props.date} , {props.author}</h4>
            <p className="test-post-context">{props.text}</p>
            <a className="test-button" href={props.link} 
                style={{ 
                    textDecoration: 'none', 
                    color: 'inherit', 
                    color: 'black', 
                    fontSize: '24px'
                }}
                >
                    {props.button}
            </a>
        </div>
    )
}

export default TestPost
