import React, {useState} from 'react'
import "./Navbar.css"
import { ReactComponent as InnomLogo } from './assets/innom_logo.svg'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <Link to="/" className='innom-logo' onClick={() => scroll.scrollToTop()}>
                        <InnomLogo />
                    </Link>
                    
                    <div className='nav-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu" }>
                        <li className='nav-item'>
                            <Link to="/eventer" className='nav-links' onClick={handleClick && scroll.scrollToTop()} >
                                Eventer
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/tilbud" className='nav-links' onClick={handleClick && scroll.scrollToTop()}>
                                Tilbud
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={handleClick}>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                    
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
