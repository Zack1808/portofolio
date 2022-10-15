import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react'

// Importing the costume made components
import SwitchButton from './SwitchButton';

// Importing the style file
import '../css/Navbar.css';

// Creating the Navbar component
const Navbar = ({ urls, switchToggle, setSwitchToggle }) => {

    const [toggle, setToggle] = useState(false)
    let n = .1;

    return (
        <nav className='navbar'>
            <Link to="/"  className="logo" onClick={() => setToggle(false)}><h2>Logo</h2></Link>
            <div className="navbar-container">
                <SwitchButton toggle={switchToggle} setToggle={setSwitchToggle} />
                <div className="navbar-hamburger">
                    <Hamburger color="white" toggle={setToggle} toggled={toggle} duration={.5} easing="ease-in-out" rounded/>
                </div>
                <div className={toggle ? "navbar-link-list-active navbar-link-list" : "navbar-link-list"}>
                {urls.map(url => {
                    n += .1
                    return <Link to={url.link} key={url.title} className="navbar-link" style={{ transition: toggle && `opacity .5s ${n}s`}} onClick={() => setToggle(false)}>{url.title}</Link>
                })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar