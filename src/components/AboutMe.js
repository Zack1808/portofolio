import React, { useRef, useEffect }from 'react'

// Importing the costume made components
import Hero from './Hero'
import Segment from './Segment';

// Importing the style file 
import '../css/AboutMe.css'

// Importing the image 
import person from '../img/placeholder.png'
import code from '../img/code2.png'
import ruder from '../img/rudjer.png'
import tvz from '../img/tvz.png'

// Text for the components 
const hero_text = "I am a self thaught React.js web developer. Find out more down below"
const WHO_AM_I = "Hi!  My name is Jean-Pierre and I am a 22 year-old self-taught web developer. My web development journey started in 2018, when I was first introduced to HTML and CSS. Ever since I've started upgrading my knowledge-base with JS and PHP until I've met React.js. I've been working with React for 2 years now altogether, building fun little project when I had the time. Unfortunately, not all of them are listed in GitHub, since I used those little projects to improve my skills (Visually, they are a mess)."

// Creating the AboutMe component
const AboutMe = () => {

    const segmentRef = useRef();
    const top = useRef()

    // Putting the user to the top of the page
    useEffect(() => {
        top.current?.scrollIntoView({ top: 0});
    }, [])

    // Function that will scroll to the segment list
    const scrollToSegments = () => {
        segmentRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='about-me-container' ref={top}>
            <Hero buttonText="Read more" imageHalf={person} title="Hi, I'm Jean-Pierre" text={hero_text} buttonClick={scrollToSegments}/>
            <div className="segment-list-container" ref={segmentRef}>
                <Segment image={code} flipped title='Who am I?' text={WHO_AM_I} />
                <Segment image={ruder} />
                <Segment image={tvz} flipped/>
            </div>
        </div>
    )
}

export default AboutMe