import React, {useState} from 'react'
import "./Navbar.css"
import { ReactComponent as InnomLogo } from './assets/innom_logo.svg'
import { Link } from 'react-scroll'
import { animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <div className='innom-logo' onClick={() => scroll.scrollToTop()}>
                        <InnomLogo />
                    </div>
                    
                    <div className='nav-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu" }>
                        <li className='nav-item'>
                            <Link to="event" className='nav-links' smooth={true} duration={600} onClick={handleClick} >
                                Event
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="service" className='nav-links' smooth={true} duration={600} onClick={handleClick}>
                                Tilbud
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="about" className='nav-links' smooth={true} duration={600} onClick={handleClick}>
                                Om Oss
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="footer" className='nav-links' smooth={true} duration={600} onClick={handleClick}>
                                Kontakt Oss
                            </Link>
                        </li>
                    </ul>
                    
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
