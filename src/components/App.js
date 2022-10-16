import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the style file 
import '../css/App.css'

// Importing the costume made components
import Navbar from './Navbar';
import HomePage from './HomePage';
import Footer from './Footer'

// Link rotues
const URLS = [
    {
        link: '/',
        title: "Home"
    },
    {
        link: '/about',
        title: "About Me"
    },
    {
        link: '/projects',
        title: 'Project List'
    }
]

// Social media routes 
const SOCIAL = [
    {
        link: "https://www.instagram.com/jeanpierrenovak/",
        title: "Instagram"
    },
    {
        link: "https://github.com/Zack1808",
        title: "GitHub"
    },
    {
        link: "https://web.facebook.com/jeanpierre.novak.391",
        title: "Facebook"
    }
]

// Creating the App component
const App = () => {

    const [darkMode, setDarkMode] = useState(true);
    const ref = useRef()

    // function that will scroll to the contact from
    const scrollToContact = () => {
        ref.current?.scrollIntoView({ behavior: "smooth"})
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`container ${darkMode && "dark"}`}>
                <Navbar urls={URLS} switchToggle={darkMode} setSwitchToggle={setDarkMode} logo="PortoPage" scrollTo={scrollToContact}/>
                <Routes>
                    <Route exact path="/" element={<HomePage dark={darkMode} ref={ref} />}/>
                </Routes>
                <Footer urls={URLS} social={SOCIAL} scrollTo={scrollToContact} />
            </div>
        </BrowserRouter>
    )
}

export default App