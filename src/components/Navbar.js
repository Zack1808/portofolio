import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'

// Importing the style file
import '../css/Navbar.css';

// Creating the Navbar component
const Navbar = ({ urls }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='navbar'>
            <Link to="/"  className="logo"><h2>Logo</h2></Link>
            <div className="navbar-container">
                <div className="navbar-hamburger">
                    <Hamburger color="white" onToggle={t => setToggle(t)} />
                </div>
                <div className={toggle ? "navbar-link-list-active navbar-link-list" : "navbar-link-list"}>
                {urls.map(url => {
                    return <Link to={url.link} key={url.title} className="navbar-link">{url.title}</Link>
                })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar