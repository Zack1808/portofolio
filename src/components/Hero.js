import React from 'react'
import Typewriter from 'typewriter-effect'
import { UilArrowCircleDown } from '@iconscout/react-unicons'

// Importing the style file
import '../css/Hero.css';

// Options for the typwriter effect
const options = {
    strings: ["Hi!", "I'm Jean-Pierre", "I'm a self taught web developer"],
    autoStart: true,
    loop: true
}

const Hero = ({ buttonClick, buttonText, imageFull, imageHalf, title, text}) => {

    if(imageFull) return (
        <div className='hero-container image-full' style={{ backgroundImage: `url(${imageFull})`}}>
            <h1><Typewriter options={options} /></h1>
            <button className='hero-btn btn' onClick={buttonClick}>{buttonText} &nbsp; <UilArrowCircleDown /></button>
        </div>
    )

    if(imageHalf) return (
        <div className='hero-container image-half'>
            <div className="image" style={{ backgroundImage: `url(${imageHalf})`}}></div>
            <div className="image-half-content">
                <h1>{title}</h1>
                <p>{text}</p>
                <button className='hero-btn btn btn-submit' onClick={buttonClick}>{buttonText} &nbsp; <UilArrowCircleDown /></button>
            </div>
        </div>
    )

    return (
        <div className='hero-container'>
            <h1><Typewriter options={options} /></h1>
            <button className='hero-btn btn' onClick={buttonClick}>{buttonText} &nbsp; <UilArrowCircleDown /></button>
        </div>
    )
}

export default Hero