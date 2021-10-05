import React from 'react'
import "./Footer.css"

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
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784.4070550608021!2d10.390028116241501!3d63.43324598327785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319b511db0d7%3A0x13dd29ed3ceff2eb!2sOlav%20Tryggvasons%20gt.%2048%2C%207011%20Trondheim!5e0!3m2!1sno!2sno!4v1633083423293!5m2!1sno!2sno" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        allowfullscreen="" 
                        loading="lazy"></iframe>
               </div>

                <div className='footer-box'>
                    <h3>Kontakt oss</h3>
                    <p>
                        Sit Labs: Innom<br></br>
                        Olav Tryggvasons gate 48,<br></br>
                        7011 Trondheim<br></br>
                        Norge<br></br>
                        <br></br>
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
