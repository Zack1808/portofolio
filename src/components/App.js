import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the style file 
import '../css/App.css'
import Navbar from './Navbar';

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
    }, 
    {
        link: '/contact',
        title: "Contact Me"
    }
]

// Creating the App component
const App = () => {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`container ${darkMode && "dark"}`}>
                <Navbar urls={URLS} switchToggle={darkMode} setSwitchToggle={setDarkMode}/>
            </div>
        </BrowserRouter>
    )
}

export default App