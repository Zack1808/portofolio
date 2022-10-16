import React, {useRef} from 'react'

// Importing the style file
import '../css/HomePage.css'

// Importing the costume made components
import Hero from './Hero'
import Segment from './Segment'

// Importing the Images
import person from '../img/placeholder.png'

// Segment text
const ABOUT = "Hi! My name is Jean-Pierre and I am a 22 year-old self-taught web developer. I've started my development journey in 2018, where I fist encountered HTML and CSS. At first it was boring, but then JavaScript came in and things changed."
const PROJECTS = "In a short period of time, I've managed to create a collection of multiple projects for display. Those projects go from beginner level to intermediate. All the projects are mobile compatible. The source code is also available on my GitHub account."

// Creating the HomePage component
const HomePage = () => {

    const ref = useRef();

    // Function that will scroll to the segment list
    const scroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='homepage-container'>
            <Hero buttonClick={scroll} />
            <div className='segment-list-container' ref={ref}>
                <Segment image={person} title="About Me" text={ABOUT} buttonText="Read More!" link="/about" />
                <Segment image={person} flipped title="My Projects" text={PROJECTS} buttonText="Check out the list!" link="/projects"/>
            </div>
        </div>
    )
}

export default HomePage