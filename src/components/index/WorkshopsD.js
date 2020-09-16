import React, { useState, useEffect } from "react"

const WorkshopsD = () => {
  
  const [events, setEvents] = useState({})
  
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://dscscet.herokuapp.com/getAllEvents`
       )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setEvents(resultData)
      }) // set data for the number of stars
      console.log(events)
  }, [])
  
  return (
    <section>
		Data Fetched....
		{JSON.stringify(events)}
    </section>
  )
}
export default WorkshopsD
