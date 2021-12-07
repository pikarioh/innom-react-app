import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'
import "./Header.css"
import header1 from './assets/header_01.jpg'
import header2 from './assets/header_02.jpg'
import header3 from './assets/header_03.JPG'

const Header = () => {
    return (
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
                <div data-src={header2} />
                <div data-src={header1} />
                <div data-src={header3} />
        </AwesomeSlider>
    )
}
export default Header
