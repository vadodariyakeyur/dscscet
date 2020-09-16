import React, { useState, useEffect } from "react"

const WorkshopsD = () => {
  
  const [upcoming,setUpcoming] = useState({})
  const [past,setPast] = useState({})
  
  useEffect(() => {
    // get data from api
    fetch(`https://dscscet.herokuapp.com/getAllEvents`
       )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setUpcoming(resultData["upcoming"])
        setPast(resultData["past"])
      }) // set data for the number of stars
      console.log(upcoming.length);
      console.log(past.length)
  }, [])
  
  return (
		<section id="workshops" className="section-spacer workshops-section bg-very__gray">
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
				<div className="tab-pane active" id="upcoming" role="tabpanel" aria-labelledby="upcoming" >
				 {upcoming.map((event)=> (				 
					<section id="hi" className="section-spacer bg-very__gray">
						<div className="container">
						  <div className="row align-items-center">
							<div className="col-sm-4">
							  <div className="feature-list-image">
								<img
								  className="card-img-top"
								  src={"https://dscscet.herokuapp.com/images/" + event['image']}
								  alt="Tech Workshop"
								/>
							  </div>
							</div>
							<div className="col-sm-5 ml-auto">
							  <div className="feature-list-wrapper">
								<div className="content-header">
								<h2 className="content-title">{event['title']}</h2>
								  <hr />
								  <h6>DATE : {event['date']}</h6>
								  <h6>VENUE : {event['location']}</h6>
								  <p>{event['description']}</p>
								  <a
									className="hero-button"
									href={event['link']}
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
				 ))}
				</div>
				<div className="tab-pane" id="past" role="tabpanel" aria-labelledby="past" >
				 {past.map((event)=> (				 
					<section id="hi" className="section-spacer bg-very__gray">
						<div className="container">
						  <div className="row align-items-center">
							<div className="col-sm-4">
							  <div className="feature-list-image">
								<img
								  className="card-img-top"
								  src={"https://dscscet.herokuapp.com/images/" + event['image']}
								  alt="Tech Workshop"
								/>
							  </div>
							</div>
							<div className="col-sm-5 ml-auto">
							  <div className="feature-list-wrapper">
								<div className="content-header">
								<h2 className="content-title">{event['title']}</h2>
								  <hr />
								  <h6>DATED : {event['date']}</h6>
								  <h6>HELD AT : {event['location']}</h6>
								  <p>{event['description']}</p>
								</div>
							  </div>
							</div>
						  </div>
						</div>
					  </section>
				 ))}
				</div>
			</div>
		</div>
    </section>
  )
}
export default WorkshopsD
