import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

// Importing the style file
import '../css/Segment.css'

const Segment = ({ image, flipped, title = "Title", text, buttonText = "Button", link = "/"}) => {

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
                    <h1>{title}</h1>
                    <p>{text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, explicabo, alias voluptates cupiditate, tenetur commodi inventore veritatis eaque beatae totam dolorum laudantium perferendis corrupti possimus dolore tempore dicta cumque mollitia?"} </p>
                    <Link to={link} className="btn">{buttonText}</Link>
                </div>
            </div>
        </div>
    )
}

export default Segment;