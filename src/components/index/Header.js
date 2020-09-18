import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import image from '../../images/header/diversity.jpg'

export default ({ university, register }) => (
  <header id="hero" className="hero">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} sm={6}>
          <div className="hero-content">
            <div className="hero-title__group">
              <div className="hero-title">
                <h2 className="zuri">
                  Developer Student Clubs <br /> {university}
                </h2>
              </div>
              <div className="Hero--Subtitle">
                <p className="lead">
                  Developer Student Clubs is a <first-letter><b>G</b></first-letter>
                  <third-letter><b>o</b></third-letter>
                  <second-letter><b>o</b></second-letter>
                  <first-letter><b>g</b></first-letter>
                  <forth-letter><b>l</b></forth-letter>
                  <third-letter><b>e</b></third-letter> Developers program for
                  university students to learn
                  <second-letter> <b>mobile</b> </second-letter> and{' '}
                  <first-letter><b>web development skills</b></first-letter>,{' '}
                  <third-letter><b>design thinking skills</b></third-letter> and{' '}
                  <forth-letter><b>leadership skills.</b></forth-letter>
                </p>
              </div>
            </div>
            <a
              className="hero-button"
              href={register}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-users"></i> Become a member
            </a>
          </div>
        </Col>
        <Col xs={12} sm={5} className="ml-auto ml-pic">
          <div className="hero-figure">
            <img
              src={image}
              className="img-fluid w-100"
              alt="Illustration of diversity in our developer community"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </header>
)
