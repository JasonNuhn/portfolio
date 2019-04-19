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
    margin: "5px",
    backgroundColor: "#ec7f37"
  };

const divContainer = {
    backgroundColor: "#ec7f37",
    padding: "5px"
}

const divHeader = {
    backgroundColor: "#393939",
    color: 'white',
    margin: "5px",
    fontWeight: 'bold'
}

const divCard = {
    backgroundColor: 'white'
}

const divIcon = {
    color: 'white'
}

class About extends Component { 
        render () {
            return (
                <div>
                    <Fade left>
                        <Jumbotron fluid>
                            <Container style={divContainer}>
                                <h1 style={divHeader}>Jason Nuhn</h1>
                                
                                <CardHeader align="center" style={divHeader}>
                                    <a href="mailto:jason.a.nuhn@gmail.com"> <i style={divIcon} class="far fa-envelope"></i></a>
                                    <a href="https://www.linkedin.com/in/jasonnuhn/"> <i style={divIcon} class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/JasonNuhn"> <i style={divIcon} class="fab fa-github"></i></a>
                                    <a href="https://medium.com/@jason.a.nuhn"> <i style={divIcon} class="fab fa-medium"></i></a>
                                    
                                </CardHeader>
                                
                                <hr></hr>
                                    <h4 style={divCard}><i>As a former Accountant, out goes the sales invoices, processing bills and reconciling bank accounts. Retained the detail-oriented, problem-solving in me as well as having the desire to learn new technologies to build new and exciting applications.</i></h4>
                            </Container>
                        </Jumbotron>
                        {/* <h2><b>Favorite Quote:</b><br></br><i>There is no royal road to a successful life, as there is no royal road to learning.  It has got to be hard knocks, morning, noon, and night, and fixity of purpose.</i></h2> */}
                        <Row>
                        <Col sm="6">
                        <Card body style={divStyle}>
                            <CardHeader align="center" size="lg" style={divHeader}>Programming Languages</CardHeader>
                            
                                <CardText style={divCard}>JavaScript<br></br>
                                Python<br></br>
                                Visual Basic for Application</CardText>   
                        </Card>
                        </Col>
                        <Col sm="6">
                        <Card body style={divStyle}>
                        <CardHeader align="center" size="lg" style={divHeader}>JavaScript Framework</CardHeader>
                            
                            <CardText style={divCard}>Node.js<br></br>
                                Express.js<br></br>
                                Meteor</CardText>
                        </Card>
                        </Col>
                        </Row>
                        <Row>
                        <Col sm="6">
                        <Card body style={divStyle}>
                        <CardHeader align="center" size="lg" style={divHeader}>Libraries</CardHeader>
                                
                            <CardText style={divCard}>React<br></br>
                                    Redux<br></br>
                                    jQuery</CardText>
                            </Card>
                            </Col>
                            <Col sm="6">
                        <Card body style={divStyle}>
                        <CardHeader align="center" size="lg" style={divHeader}>Databases</CardHeader>
                                
                        <CardText style={divCard}>MongoDB<br></br>
                                    PostgreSQL<br></br>
                                    SQLite</CardText>
                            </Card>
                        </Col>
                        </Row>
                        <Row>
                            <Col sm="6" md={{ size: 6, offset: 3 }}>
                                <Card body style={divStyle}>
                                <CardHeader align="center" size="lg" style={divHeader}>Web Technologies</CardHeader>
                                    
                                <CardText style={divCard}>HTML5<br></br>
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