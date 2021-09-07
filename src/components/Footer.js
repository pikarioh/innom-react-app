import React from 'react'
import "./Footer.css"
import GoogleMaps from 'simple-react-google-maps'

const Footer = () => {
    // eslint-disable-next-line
    return (
        <div className='footer'>
            <div className='social-media'>
                <a href="https://www.facebook.com/kom.innom.oss" target="_blank">
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/kom.innom/?fbclid=IwAR3i881fbKZYz9USerp0SFf_9e4lgf8SJ-kmpYHfkH-nOgdu23y3vYmQ2uo" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            
            <div className='footer-kontakt'>

                <div className='footer-map'>
                    <GoogleMaps
                        apiKey={'AIzaSyAy5EQpgdnGA90EqluE9Mq3yAg_BX8U9vg'}
                        style={{height: "100%", width: "100%"}}
                        zoom={12.5}
                        center={{lat: 63.4180, lng: 10.4016}}
                        markers={{lat: 63.4180, lng: 10.4016}} //optional
                    />
                    </div>

                <div className='footer-box'>
                    <h3>Kontakt oss</h3>
                    <p>
                        Sit Labs: Innom<br></br>
                        Olav Tryggvasons gate 48,<br></br>
                        7011 Trondheim<br></br>
                        Norge<br></br>
                        <br></br>
                        +47 900 00 000
                    </p>
                </div>

                <div className='footer-links'>
                    <a className='bottom-links' href=""><p>Karierre</p></a>
                    <a className='bottom-links' href=""><p>Om Innom</p></a>
                    <a className='bottom-links' href=""><p>Sit Labs</p></a>
                    <a className='bottom-links' href=""><p>Intern</p></a>
                </div>
            </div>

            <div className='footer-note'>
                <p>©2021 Sit Labs: Prosjekt Innom</p>
            </div>
        </div>
    )
}

export default Footer
