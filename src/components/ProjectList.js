import React from 'react'

// Importing the style file
import '../css/ProjectList.css'

// Creating a list of projects
const PROJECTS = [
    {
        name: "Calculator",
        desc: "",
        pageLink: "https://zack1808.github.io/calculator/",
        githubLink: "https://github.com/Zack1808/calculator"
    },
    {
        name: "Quiz game",
        desc: "",
        pageLink: "https://zack1808.github.io/quiz-app/",
        githubLink: "https://github.com/Zack1808/quiz-app"
    },
    {
        name: "Rock, Paper, Scissors",
        desc: "",
        pageLink: "https://zack1808.github.io/rock-paper-scisors/",
        githubLink: "https://github.com/Zack1808/rock-paper-scisors"
    },
    {
        name: "Note App",
        desc: "",
        pageLink: "https://zack1808.github.io/note-app/",
        githubLink: "https://github.com/Zack1808/note-app"
    },{
        name: "Stopwatch App",
        desc: "",
        pageLink: "https://zack1808.github.io/stopwatch/",
        githubLink: "https://github.com/Zack1808/stopwatch"
    },
    {
        name: "Weather App",
        desc: "",
        pageLink: "https://zack1808.github.io/weather-app/",
        githubLink: "https://github.com/Zack1808/weather-app"
    },
    {
        name: "Tic Tac Toe",
        desc: "",
        pageLink: "https://zack1808.github.io/tic-tac-toe/",
        githubLink: "https://github.com/Zack1808/tic-tac-toe"
    },
    {
        name: "Ecommerce Site",
        desc: "",
        pageLink: "https://zack1808.github.io/ecommerce-site/",
        githubLink: "https://github.com/Zack1808/ecommerce-site"
    },
]

// Creating the ProjectList component
const ProjectList = () => {
    return (
        <div className='project-list-container'>ProjectList</div>
    )
}

export default ProjectList