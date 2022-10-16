import React, {useRef} from 'react'

// Importing the style file
import '../css/HomePage.css'

// Importing the costume made components
import Hero from './Hero'
import Segment from './Segment'

// Importing the Images
import person from '../img/placeholder.png'

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
                <Segment image={person}/>
                <Segment image={person} flipped/>
            </div>
        </div>
    )
}

export default HomePage