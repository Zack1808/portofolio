import React from 'react'
import { useInView } from 'react-intersection-observer'

// Importing the style file
import '../css/Segment.css'

const Segment = ({ image, flipped }) => {

    const [ref, inView] = useInView({
        threshold: 0.1
    })

    return (
        <div ref={ref} className={(!flipped ? `segment-container ${inView && "visible"}` : `segment-container-flipped ${inView && "visible"}`)}>
            <div className="img-container">
                <div className="image" style={{backgroundImage: `url(${image})`, transition: " .7s"}}></div>
            </div>
            <div className="segment-text-container">
                <div className="text-container">
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto quia nisi eveniet ex, magnam ab ducimus labore explicabo, vel esse, fugiat animi hic dolore.</p>
                    <button className="btn">Button</button>
                </div>
            </div>
        </div>
    )
}

export default Segment;