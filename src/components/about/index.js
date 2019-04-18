import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import './about.css';

class About extends Component { 
        render () {
            return (
                <div>
                    <Fade left>
                        <h1>Jason Nuhn</h1>
                        <h4><i>As a former Accountant, out goes the sales invoices, processing bills and reconciling bank accounts. Retained the detail-oriented, problem-solving in me as well as having the desire to learn new technologies to build new and exciting applications.</i></h4>
                        {/* <h2><b>Favorite Quote:</b><br></br><i>There is no royal road to a successful life, as there is no royal road to learning.  It has got to be hard knocks, morning, noon, and night, and fixity of purpose.</i></h2> */}
                        <h3>Programming Languages</h3>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Visual Basic for Application</li>
                        
                        <h3>JavaScript Framework</h3>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Meteor</li>
                            <li>Next.js</li>
                        
                        <h3>Web Technologies</h3>
                            <li>HTML5</li>
                            <li>CSS3</li>
                        
                        <h3>Libraries</h3>
                            <li>React</li>
                            <li>Redux</li>
                            <li>jQuery</li>

                        <h3>Databases</h3>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                            <li>SQLite</li>
                    </Fade>
                </div>
            )
        }
}

export default About