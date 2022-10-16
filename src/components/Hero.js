import React from 'react'
import Typewriter from 'typewriter-effect'

// Importing the style file
import '../css/Hero.css';

// Options for the typwriter effect
const options = {
    strings: ["Hi!", "I'm Jean-Pierre", "I'm a self taught web developer"],
    autoStart: true,
    loop: true
}

const Hero = ({ buttonClick}) => {
    return (
        <div className='hero-container'>
            <h1><Typewriter options={options} /></h1>
            <button className='hero-btn btn' onClick={buttonClick}>See More!</button>
        </div>
    )
}

export default Hero