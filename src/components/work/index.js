import React, { Component } from 'react'

class Work extends Component {
    render() {
        return (
            <div>
            <h1>Projects</h1>
                <a
            href="https://www.paperstack.pro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paper Stack - Invoicing Management Application
          </a>
          <p>
          Was part of the team building a full stack invoicing application. I was in charge of back end development building the API using Express.js and Node.js. Unit testing was done by Test-Driven Development using Jest. I had connected the backend to MongoDB and hosted on mLab. On the front end, I had set up payment page where people could purchase this product using Stripe Element.
          </p>
          <a
            href="https://ccdhhdb.work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Outreach - Database Management Application
          </a>
          <p>
          Was part of the web-development team building a full stack application using Meteor. The application along with MongoDB was deployed and hosted on NodeChef. The codebase was managed on GitLab. Communication between teammates was done on Slack, Zoom and emails. I was responsible for DevOps, reporting feature using DataTable. I also created forms to allow user to input data which would be sent up to MongoDB when submitted.
          </p>
          <a
            href="https://trialcolorisp.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rural Interpreting Services Project Pilot - Informational Website
          </a>
          <p>
          Was tasked to build a website to be responsive on mobile devices.  To assist client with email service needs, SendGrid API was utilized to handle requests to client along with auto-response to user for email verification.
          </p>
          {/* <a
            href="https://github.com/LambdaA-Team/DV"
            target="_blank"
            rel="noopener noreferrer"
          >
            Domestic Violence - Connect Victims with Shelters
          </a>
          <p>
          A Hackathon idea for a team to build an application to help Domestic Violence victims to be able to find the closest shelter/counselor office in the area.
          </p>
          <a
            href="https://github.com/LambdaZombies/socializin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Socializin - Schedule Application
          </a>
          <p>
          A Hackathon idea for a team to build An app that allows friends to connect with each other through their busy schedules.
          </p> */}
          
            </div>
        )
    }
}

export default Work