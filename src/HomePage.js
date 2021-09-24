import React from 'react'
import Header from "./components/Header"
import Event from "./components/Event";
import Service from "./components/Service";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Event />
            <Service />
            <About />
            <Footer />
        </div>
    )
}

export default HomePage
