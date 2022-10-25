import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Importing the style file
import '../css/Card.css'

// Creating the Card component
const Card = ({ project, zoom, setZoom }) => {

    const [ref, inView] = useInView({
        threshold: 0.1
    });

    return (
        <div className={`card-container ${inView && 'visible'} ${zoom && "zoom"}`} ref={ref} onClick={() => setZoom(true)}>
            <div className="background">
                <div className="card-header"></div>
                <div className="image card-image" style={{backgroundImage: `url(${project.image})`}}></div>
                <div className="card-content">
                    <h1>{project.name}</h1>
                    <div className="card-text-container">
                        {project.desc}
                    </div>
                    <div className="card-button-list">
                        <a href={project.pageLink} target="_blank" className="btn btn-submit">Go to Page</a>
                        <a href={project.githubLink} target="_blank" className="btn btn-submit">Go to GitHub repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card