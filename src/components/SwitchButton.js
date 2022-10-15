import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Importing the style file
import '../css/SwitchButton.css'

// Creating the handle motion options
const spring = {
    type: "spring",
    stiffness: 400,
    damping: 50
}

// Creating the SwitchButton component
const SwitchButton = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='switch' data-toggle={toggle} onClick={() => setToggle(!toggle)}>
            <motion.div className='handle' layout transition={spring} />
        </div>
    )
}

export default SwitchButton