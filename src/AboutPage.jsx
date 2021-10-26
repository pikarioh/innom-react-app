import React from 'react'
import './AboutPage.css'
import team01 from './components/assets/team_01.jpg'
import { Link } from 'react-router-dom'

const EmployeePage = () => {
    return (

        <div className="AboutPage">

            <h1 style={{ color:'#0a6daf'}}>Ansatte</h1>

            <div className="AboutField">
                

                <div className="TeamBox" style={{ backgroundColor: '#73c7a7' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#f8ec0b" }}>Guro Holte Igesund</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#0a6daf' }}>
                    <img className="TeamImg" src={team01} />
                        <div className="TeamInfo">
                            <h1 style={{ color:"#f6b762" }}>Julie Solheim Bjervik</h1>
                            <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#f6b762' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#0a6daf", fontSize: "34px" }}>Anne Margrethe Berggrav</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#73c7a7' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#0a6daf"}}>Ingvild Warholm</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#0a6daf' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#f8ec0b" }}>Erlend Hellebust</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#f6b762' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#0a6daf" }}>Maria Stjernen</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#73c7a7' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#0a6daf", fontSize: "34px" }}>Magnus Lytskjold Engen</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#0a6daf' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#73c7a7" }}>Peik Elias</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#f6b762' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#f8ec0b" }}>Thanathon Holm</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

                <div className="TeamBox" style={{ backgroundColor: '#73c7a7' }}>
                    <img className="TeamImg" src={team01} />
                    <div className="TeamInfo">
                        <h1 style={{ color:"#f8ec0b" }}>Maja Hassel</h1>
                        <h3 style={{ color:"white" }}>Prosjekt Leder</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmployeePage
