import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import {
  Button,
  Col,
  Card,
  CardText,
  Row,
  CardHeader,
  Jumbotron,
  Container
} from 'reactstrap'

import './work.css';

const divStyle = {
  margin: "5px"
};

class Work extends Component {
  render() {
    return (
      <div>
        <Fade left>
          <Jumbotron fluid>
            <Container>
              <h1>Projects</h1>
            </Container>
          </Jumbotron>
          <Row>

          <Col sm="6">
          <Card body style={divStyle}>
              <CardHeader align="center" size="lg">
                <b>Paper Stack - Invoicing Management Application</b>
              </CardHeader>
              <CardText>
                Was part of the team building a full stack invoicing application. I was in charge of back end development building the API using Express.js and Node.js. Unit testing was done by Test-Driven Development using Jest. I had connected the backend to MongoDB and hosted on mLab. On the front end, I had set up payment page where people could purchase this product using Stripe Element.
              </CardText>
                <a
                  href="https://www.paperstack.pro/"
                  >
                  <Button color="primary" size="lg" sm="6" block>
                    Visit Website
                  </Button>
                </a>
            </Card>
            </Col>
            <Col sm="6">
            <Card body style={divStyle}>
              <CardHeader align="center" size="lg">
                <b>Outreach - Database Management Application</b>
              </CardHeader>
              <CardText>
                Was part of the web-development team building a full stack application using Meteor. The application along with MongoDB was deployed and hosted on NodeChef. The codebase was managed on GitLab.  I was responsible for DevOps, reporting feature using DataTable. I also created forms to allow user to input data which would be sent up to MongoDB when submitted.
              </CardText>
                <a
                  href="https://ccdhhdb.work/"
                  >
                  <Button color="primary" size="lg" sm="6" block>
                    Visit Website
                  </Button>
                </a>
            </Card>
            </Col>

          {/* <a
            href="https://trialcolorisp.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Rural Interpreting Services Project Pilot - Informational Website
            </a>
            <p>
            Was tasked to build a website to be responsive on mobile devices.  To assist client with email service needs, SendGrid API was utilized to handle requests to client along with auto-response to user for email verification.
          </p> */}
          </Row>
              </Fade>
            </div>
        )
    }
}

export default Work