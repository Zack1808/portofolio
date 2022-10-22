import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';

// Importing the style file
import '../css/Progress.css'

// Creating the Progress conponent
const Progress = ({ progress, text } ) => {

    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const [ref, inView] = useInView({
        threshold: 0.1
    });

    const size = 200;
    const strokeWidth = 20;
    const circleOneStroke = 'rgba(255, 255, 255, .3)';
    let circleTwoStroke

    const center = size / 2;
    const radius = center - strokeWidth / 2;
    const circumfence = 2 * Math.PI * radius;
    
    if(progress < 30) circleTwoStroke = "rgb(211, 5, 5)";
    else if(progress < 60) circleTwoStroke = "rgb(205, 205, 75)";
    else circleTwoStroke = "rgb(63, 189, 63)"
 
    useEffect(() => {
        if(inView) {
            const prOff = ((100 - progress) / 100) * circumfence;
            setOffset(prOff);
            circleRef.current.style = "transition: stroke-dashoffset 1.8s ease-in-out"
        }
    }, [progress, offset, inView, circumfence])

    return (
        <div className={`progress-container ${inView && "visible"}`} ref={ref}>
            <div className="cont">
                <div className="progress-text"><h1>{text}</h1></div>
                <div className="progress-circle">
                    <svg width={size} height={size} className='circular'>
                        <circle className='circle-bg' stroke={circleOneStroke} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                        <circle className='circle' stroke={circleTwoStroke} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumfence} strokeDashoffset={inView ? offset : (circumfence)} ref={circleRef}/>
                        <text x={center} y={center} className="percentage">{progress}%</text>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Progress