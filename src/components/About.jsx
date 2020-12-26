import React from 'react'
import Common from './Common'
import web1 from '../images/w2.png'

function About() {
    return (
        <div>
            <Common name='Welcome to TechProps' imgsrc={web1} visit='/contact' btname='Contact Now'></Common>
        </div>
    )
}

export default About
