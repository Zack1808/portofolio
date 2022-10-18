import React, { useRef, useEffect }from 'react'

// Importing the costume made components
import Hero from './Hero'

// Importing the style file 
import '../css/AboutMe.css'

// Importing the image 
import person from '../img/placeholder.png'

// Text for the components 
const text = "I am a self thaught React.js web developer. Find out more down below"

// Creating the AboutMe component
const AboutMe = () => {

    const top = useRef()

    // Putting the user to the top of the page
    useEffect(() => {
        top.current?.scrollIntoView({ top: 0});
    }, [])

    return (
        <div className='about-me-container' ref={top}>
            <Hero buttonText="Read more" imageHalf={person} title="Hi, I'm Jean-Pierre" text={text}/>
        </div>
    )
}

export default AboutMe