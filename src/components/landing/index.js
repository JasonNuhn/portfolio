import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap'

import Header from "../Header"

class LandingPage extends Component {
    render () {
        return (
            <div>
                <Link to="/about"><Button>About</Button></Link>
                <Link to="/work"><Button>Work</Button></Link>
                <Header />
            </div>
        )
    }
}

export default LandingPage;