import React from 'react'
import './Post.css'
import event1 from './assets/event_01.png'

const Post = () => {
    return (
        <div className="post">
            <img className="post-img" src={event1} style={{ width: undefined, height: undefined, aspectRatio: 1 }}/>
            
            <div className="post-context">
                <h1>Innom psykologi<br/> Stueprat om stress <br/> - Kari Yylongas</h1>
                <p>Du snur ein stein som ligger på den fuktige bakken fordi du liker å se maurene, de gulbleke maerkene og saksedyrene som det ventelig vrimler av under den; alle disse småkrypene du er den første til å oppdage, til å gripe på fersk gjerning. Men på understiden av steinen er det denne gangen et ansikt, og dette ansiktet begynner å snakke med grøtet stemme, mens små jordklumper løsner omkring munnen.</p>
                <h1 className="post-date">Fredag 30.08 kl. 18:00</h1>
            </div>
        </div>
    )
}

export default Post
