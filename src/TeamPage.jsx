import React from 'react'
import './TeamPage.css'
import team01 from './components/assets/team_01.jpg'
import team02 from './components/assets/team_02.jpg'
import team03 from './components/assets/team_03.jpg'
import team04 from './components/assets/team_04.jpg'
import team05 from './components/assets/team_05.jpg'
import team06 from './components/assets/team_06.jpg'
import team07 from './components/assets/team_07.jpg'
import team08 from './components/assets/team_08.jpg'
import team09 from './components/assets/team_09.jpg'
import team10 from './components/assets/team_10.jpg'


const TeamPage = () => {
    return (

        <div className="AboutPage">

            <h1 style={{ color:'#0a6daf', position:'sticky' }}>Innom-gjengen</h1>

            <div className="AboutField">
                

                <div className="TeamBox" style={{ backgroundColor: '#73c7a7' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#f8ec0b" }}>Guro Holte Igesund</h1>
                        <h3 style={{ color:"white" }}>Prosjektleder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#0a6daf' }}>
                    <img className="TeamImg" src={team02} />
                        <div className="TeamInfo">
                            <h1 style={{ color:"#f6b762" }}>Julie Solheim Bjervik</h1>
                            <h3 style={{ color:"white" }}>Prosjektleder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#f6b762' }}>
                    <img className="TeamImg" src={team03} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#0a6daf"}}>Anne Margrethe Berggrav</h1>
                        <h3 style={{ color:"white" }}>Fagutvikler</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#73c7a7' }}>
                    <img className="TeamImg" src={team04} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#0a6daf"}}>Ingvild Warholm</h1>
                        <h3 style={{ color:"white" }}>Fagutvikler</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#0a6daf' }}>
                    <img className="TeamImg" src={team05} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#f8ec0b" }}>Erlend Hellebust</h1>
                        <h3 style={{ color:"white" }}>Forskningsansvarlig</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#f6b762' }}>
                    <img className="TeamImg" src={team06} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#0a6daf" }}>Maria Stjernen</h1>
                        <h3 style={{ color:"white" }}>Koordinator</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#73c7a7' }}>
                    <img className="TeamImg" src={team07} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#0a6daf" }}>Magnus Lytskjold Engen</h1>
                        <h3 style={{ color:"white" }}>Tjenestedesigner</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#0a6daf' }}>
                    <img className="TeamImg" src={team08} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#73c7a7" }}>Peik Elias</h1>
                        <h3 style={{ color:"white" }}>Grafiske designer</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#f6b762' }}>
                    <img className="TeamImg" src={team09} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#f8ec0b" }}>Thanathon Holm</h1>
                        <h3 style={{ color:"white" }}>Web-designer</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#73c7a7' }}>
                    <img className="TeamImg" src={team10} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#f8ec0b" }}>Maja Hassel</h1>
                        <h3 style={{ color:"white" }}>Kommunikasjonsansvarlig</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TeamPage
