import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import infoSession from '../../images/info-session.png'
import Workshop_1 from '../../images/Workshop-1.jpeg'
import Workshop_2 from '../../images/Workshop-2.jpeg'

export default () => (
  <section
    id="workshops"
    className="section-spacer workshops-section bg-very__gray"
  >
    <div className="container">
      <header className="section-header text-center">
        <h2 className="section-title">Events &amp; Workshops</h2>
        <p className="section-subtitle">
          Come learn, share and connect with us in person.
        </p>
      </header>
      <div className="workshops-type-switch">
        <ul className="nav nav-pills justify-content-center js-tabs">
          <li className="nav-item">
            <a data-toggle="tab" className="nav-link active" href="#upcoming">
              Upcoming Events
            </a>
          </li>
          <li className="nav-item">
            <a data-toggle="tab" className="nav-link" href="#past">
              Past Events
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className="tab-pane active"
          id="upcoming"
          role="tabpanel"
          aria-labelledby="upcoming"
        >
          <section id="hi" className="section-spacer bg-very__gray">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <div className="feature-list-image">
                    <img
                      className="card-img-top"
                      src={Workshop_1}
                      alt="Tech Workshop"
                    />
                  </div>
                </div>
                <div className="col-sm-5 ml-auto">
                  <div className="feature-list-wrapper">
                    <div className="content-header">
                      <h2 className="content-title">DSC Introduction, Basics of Python and NumPy</h2>
                      <hr />
                      <h6>DATE : 12th September 2020 - 09:30 PM</h6>
                      <h6>VENUE : Online</h6>
                      <p>Discover the opportunities that a Developer Student Club offers you, get basics of coding in Python and get started with NumPy.</p>
                      <a
                        className="hero-button"
                        href={`https://dsc.community.dev/events/details/developer-student-clubs-sarvajanik-college-of-engineering-technology-presents-dsc-introduction-basics-of-python-numpy-basics-to-intermediate/#/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa"></i> Register
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="tab-pane"
          id="past"
          role="tabpanel"
          aria-labelledby="past"
        >
          <section id="hi" className="section-spacer bg-very__gray">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <div className="feature-list-image">
                    <img
                      className="card-img-top"
                      src={Workshop_2}
                      alt="Tech Workshop"
                    />
                  </div>
                </div>
                <div className="col-sm-5 ml-auto">
                  <div className="feature-list-wrapper">
                    <div className="content-header">
                    <h2 className="content-title">Code Maina 3.0</h2>
                      <hr />
                      <h6>DATED : 13th September 2020</h6>
                      <h6>HELD AT : Virtual</h6>
                      <p>Do you love coding and waiting for an opportunity to showcase your logical and coding skills? Voila! Code Mania is back! Buck up buddies A 3 hour coding competition organised by DSC, SCET is here. For the Coders, by the coders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
)
