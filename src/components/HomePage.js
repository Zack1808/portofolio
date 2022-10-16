import React from 'react'

// Importing the style file
import '../css/HomePage.css'

// Importing the costume made components
import Hero from './Hero'
import Segment from './Segment'

// Importing the Images
import person from '../img/placeholder.png'

// Creating the HomePage component
const HomePage = () => {
    return (
        <div className='homepage-container'>
            <Hero />
            <Segment image={person}/>
            <Segment image={person} flipped/>
        </div>
    )
}

export default HomePage