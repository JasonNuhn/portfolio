import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import {
    Jumbotron,
    Container,
    Card,
    CardText,
    Col,
    Row,
    CardHeader
  } from 'reactstrap'

import './about.css';

const divStyle = {
    margin: "20px"
  };

class About extends Component { 
        render () {
            return (
                <div>
                    <Fade left>
                        <Jumbotron fluid>
                            <Container>
                                <h1>Jason Nuhn</h1>
                                
                                <CardHeader align="center">
                                    <a href="mailto:jason.a.nuhn@gmail.com"> <i class="far fa-envelope"></i></a>
                                    <a href="https://www.linkedin.com/in/jasonnuhn/"> <i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/JasonNuhn"> <i class="fab fa-github"></i></a>
                                    <a href="https://medium.com/@jason.a.nuhn"> <i class="fab fa-medium"></i></a>
                                    
                                </CardHeader>
                                
                                <hr></hr>
                                    <h4><i>As a former Accountant, out goes the sales invoices, processing bills and reconciling bank accounts. Retained the detail-oriented, problem-solving in me as well as having the desire to learn new technologies to build new and exciting applications.</i></h4>
                            </Container>
                        </Jumbotron>
                        {/* <h2><b>Favorite Quote:</b><br></br><i>There is no royal road to a successful life, as there is no royal road to learning.  It has got to be hard knocks, morning, noon, and night, and fixity of purpose.</i></h2> */}
                        <Row style={divStyle}>
                        <Col sm="6">
                        <Card body>
                            <CardHeader align="center" size="lg"><b>Programming Languages</b></CardHeader>
                            
                                <CardText>JavaScript<br></br>
                                Python<br></br>
                                Visual Basic for Application</CardText>   
                        </Card>
                        </Col>
                        <Col sm="6">
                        <Card body>
                            <CardHeader align="center" size="lg"><b>JavaScript Framework</b></CardHeader>
                            
                                <CardText>Node.js<br></br>
                                Express.js<br></br>
                                Meteor</CardText>
                        </Card>
                        </Col>
                        </Row>
                        <Row style={divStyle}>
                            <Col sm="6">
                            <Card body>
                                <CardHeader align="center" size="lg"><b>Libraries</b></CardHeader>
                                
                                    <CardText>React<br></br>
                                    Redux<br></br>
                                    jQuery</CardText>
                            </Card>
                            </Col>
                        <Col sm="6">
                            <Card body>
                                <CardHeader align="center" size="lg"><b>Databases</b></CardHeader>
                                
                                    <CardText>MongoDB<br></br>
                                    PostgreSQL<br></br>
                                    SQLite</CardText>
                            </Card>
                        </Col>
                        </Row>
                        <Row style={divStyle}>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Card body>
                                    <CardHeader align="center" size="lg"><b>Web Technologies</b></CardHeader>
                                    
                                        <CardText>HTML5<br></br>
                                        CSS3</CardText>
                                </Card>
                            </Col>
                        </Row>
                        
                    </Fade>
                </div>
            )
        }
}

export default About