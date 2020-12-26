import React from 'react'
import Common from './Common'
import web from '../images/w10.png'


function Home() {
    return (
        <div>
            <Common name='Explore your potential with TechProps' imgsrc={web} visit='/courses' btname='Get Started'></Common>
        </div>
    )
}

export default Home
