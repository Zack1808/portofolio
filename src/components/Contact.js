import React from 'react'
import { UilUser, UilEnvelopeAlt, UilMessage } from '@iconscout/react-unicons';
import { useInView } from 'react-intersection-observer'

// Importing the style file
import '../css/Contact.css'

// Creating the Contact component
const Contact = () => {

    const [ref, inView] = useInView({
        threshold: 0.1
    })

    return (
        <div className='contact-form'>
            <form action="" ref={ref} className={inView ? "active" : ""}>
                <h1>Contact Me</h1>
                <div className="form-container">
                    <label htmlFor="firstname">Fist Name</label>
                    <div className="input">
                        <UilUser />
                        <input type="text" name="firstname" required placeholder='John'/>
                    </div>
                </div>
                <div className="form-container">
                    <label htmlFor="lastname">Last Name</label>
                    <div className="input">
                        <UilUser />
                        <input type="text" name="lastname" required placeholder='Doe'/>
                    </div>
                </div>
                <div className="form-container">
                    <label htmlFor="email">Email</label>
                    <div className="input">
                        <UilEnvelopeAlt />
                        <input type="email" name="eamil" required placeholder='johndoe@gmail.com'/>
                    </div>
                </div>
                <div className="form-container">
                    <label htmlFor="message">Message</label>
                    <div className="input">
                        <textarea name="message" required placeholder='Type your message here ...'/>
                    </div>
                </div>
                <button className="btn btn-submit"><UilMessage /> &nbsp;Send</button>
            </form>
        </div>
    )
}

export default Contact;