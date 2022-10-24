import React from 'react'

// Importing the style file
import '../css/ProjectList.css'

// Importing the custumee components
import Card from './Card';

// Importing the images
import calculator from '../img/calculator.png';
import quiz from '../img/quiz_game.png';
import rockps from '../img/rock_paper_scissors.png';
import note from '../img/notes_app.png';
import stopwatch from '../img/stopwatch.png';
import weather from '../img/weather_app.png';
import tictactoe from '../img/tic_tac_toe.png';
import ecommerce from '../img/ecommerce_site.png';
import password from '../img/password_generator.png'

// Creating a list of projects
const PROJECTS = [
    {
        name: "Calculator",
        desc: "",
        image: calculator,
        pageLink: "https://zack1808.github.io/calculator/",
        githubLink: "https://github.com/Zack1808/calculator"
    },
    {
        name: "Quiz game",
        desc: "",
        image: quiz,
        pageLink: "https://zack1808.github.io/quiz-app/",
        githubLink: "https://github.com/Zack1808/quiz-app"
    },
    {
        name: "Rock, Paper, Scissors",
        desc: "",
        image: rockps,
        pageLink: "https://zack1808.github.io/rock-paper-scisors/",
        githubLink: "https://github.com/Zack1808/rock-paper-scisors"
    },
    {
        name: "Note App",
        desc: "",
        image: note,
        pageLink: "https://zack1808.github.io/note-app/",
        githubLink: "https://github.com/Zack1808/note-app"
    },{
        name: "Stopwatch App",
        desc: "",
        image: stopwatch,
        pageLink: "https://zack1808.github.io/stopwatch/",
        githubLink: "https://github.com/Zack1808/stopwatch"
    },
    {
        name: "Weather App",
        desc: "",
        image: weather,
        pageLink: "https://zack1808.github.io/weather-app/",
        githubLink: "https://github.com/Zack1808/weather-app"
    },
    {
        name: "Tic Tac Toe",
        desc: "",
        image: tictactoe,
        pageLink: "https://zack1808.github.io/tic-tac-toe/",
        githubLink: "https://github.com/Zack1808/tic-tac-toe"
    },
    {
        name: "Ecommerce Site",
        desc: "",
        image: ecommerce,
        pageLink: "https://zack1808.github.io/ecommerce-site/",
        githubLink: "https://github.com/Zack1808/ecommerce-site"
    },
    {
        name: "Password Generator",
        desc: "",
        image: password,
        pageLink: "https://zack1808.github.io/password-generator/",
        githubLink: "https://github.com/Zack1808/password-generator"
    },
]

// Creating the ProjectList component
const ProjectList = () => {
    return (
        <div className='project-list-container'>
            {PROJECTS.map(project => {
                return <Card project={project} key={project.name} />
            })}
        </div>
    )
}

export default ProjectList