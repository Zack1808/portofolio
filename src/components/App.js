import React from 'react';
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
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navbar urls={URLS} />
        </BrowserRouter>
    )
}

export default App