import React, { useRef, useEffect }from 'react'
import { useInView } from 'react-intersection-observer';

// Importing the costume made components
import Hero from './Hero'
import Segment from './Segment';
import Progress from './Progress';

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
const TSRB = "My web development days actually started here. At first, I wanted to become a game developer, which was the main reason I applied to this school. At the time I was applying, it was considered to be one of the highest ranking technical schools in Croatia. We started learning about C and since I had no technical background, it was very hard. As I got to my third year, I was not sure that game development was for me. And that is when I was introduced to HTML and CSS. At first glance, it was plain boring working with it. However, after the introduction of JS, jQuery and PHP, it became more interesting. Later on, I would start watching tutorials on how to make some fun apps, where I stumbled across React.js."
const TVZ = "Afer two years I managed to get a sufficient amount of knowledge of React.js, using tutorials and online courses to get proficient with it. However, since without a diploma, at least in Croatia, it is extremly difficult to find a job in Software development, I applied to TVZ (University of applied science in Zagreb, or in Croatian, Tehničko Veleučilište Zagreb). The education is currently still ongoing."

// Creating the AboutMe component
const AboutMe = () => {

    const segmentRef = useRef();
    const top = useRef()

    // Putting the user to the top of the page
    useEffect(() => {
        top.current?.scrollIntoView({ top: 0});
    }, [])

    const [eduRef, eduInView] = useInView({
        threshold: 0.1
    })

    const [expRef, expInView] = useInView({
        threshold: 0.1
    })

    // Function that will scroll to the segment list
    const scrollToSegments = () => {
        segmentRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='about-me-container' ref={top}>
            <Hero buttonText="Read more" imageHalf={person} title="Hi, I'm Jean-Pierre" text={hero_text} buttonClick={scrollToSegments}/>
            <div className="segment-list-container" ref={segmentRef}>
                <Segment image={code} flipped title='Who am I?' text={WHO_AM_I} />
                <h1 className={`edu ${eduInView && "visible"}`} ref={eduRef}>Education</h1>
                <Segment image={ruder} title="Tehnička škola Ruđera Boškovića" text={TSRB}/>
                <Segment image={tvz} flipped title="Tehničko Veleučilište Zagreb" text={TVZ} />
            </div>
            <h1 className={`exp ${expInView && "visible"}`} ref={expRef}>Experience</h1>
            <div className="progress-list-container">
                <Progress progress={90} text="HTML" />
                <Progress progress={85} text="CSS" />
                <Progress progress={65} text="JavaScript" />
                <Progress progress={60} text="React" />
            </div>
        </div>
    )
}

export default AboutMe