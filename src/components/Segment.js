import React from 'react'

// Importing the style file
import '../css/Segment.css'

const Segment = ({ image, flipped }) => {
    return (
        <div className={!flipped ? "segment-container" : "segment-container-flipped"}>
            <div className="img-container">
                <div className="image" style={{backgroundImage: `url(${image})`, transition: " .7s"}}></div>
            </div>
            <div className="segment-text-container">
                <div className="text-container">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto quia nisi eveniet ex, magnam ab ducimus labore explicabo, vel esse, fugiat animi hic dolore.</p>
                    <button>Button</button>
                </div>
            </div>
        </div>
    )
}

export default Segment