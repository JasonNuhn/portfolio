import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

import {
  Container
} from 'reactstrap'

class Footer extends Component { 

    render () {
        return (
            <div >
              <Fade bottom>
                <Container align="center">
                  <b>
                  Copyright @ 2019 Jason Nuhn
                  </b>
                </Container>
          {/* <br></br>
            <a href="https://medium.com/@jason.a.nuhn"> <i class="fab fa-medium"></i></a>
          <br></br>
            <a href="https://www.linkedin.com/in/jasonnuhn/"> <i class="fab fa-linkedin"></i></a>
          <br></br>
          <a href="mailto:jason.a.nuhn@gmail.com"> <i class="far fa-envelope"></i>
          </a>
          <br></br>
            <a href="https://github.com/JasonNuhn"> <i class="fab fa-github"></i></a> */}
              </Fade>
            </div>
        )
    }
}

export default Footer;