import React, { Component } from 'react';
import { getEvents } from '../../db'


export default class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  }
  async componentDidMount(){
    let events = await getEvents()
    console.log(this.filterEvents(events));
    this.setState({events: this.reorderEvents(events)})
  }
  filterEvents(events){
    let filteredEvents = []
    let currentDate = new Date()
    console.log("Current Date:", currentDate);
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    try {
      filteredEvents = events.filter(event => new Date(event.year, months.indexOf(event['month-abbrev']), event.day) > currentDate)
    } catch (e) {
      console.error("Error filtering events", e);
    } finally {
      return filteredEvents
    }
  }
  reorderEvents(events){
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    events = this.filterEvents(events)
    events = events.sort((a, b) => {
      a.date = new Date(a.year, months.indexOf(a['month-abbrev']), a.day)
      b.date = new Date(b.year, months.indexOf(b['month-abbrev']), b.day)
      return a > b ? 1 : a < b ? -1 : 0;
    })
    return events
  }
  render(){
    let { events } = this.state;
    return (
      <div id="content" className="col-8 col-12-mobile">
        <section>
          <header>
            <h2>Upcoming Events</h2>
          </header>
          <ul className="style3">
          {events.map(event => {
            return event === events[0] ? (<li key={event.id}>
              <p className="date"><a href={event.link} target="_blank"  rel="noopener noreferrer">{event['month-abbrev']}<b>{event.day}</b></a></p>
              <h3>{event.name}</h3>
              <p><a href={event.link}>{event.synopsis}</a></p>
            </li>) : (<li className="first" key={event.id}>
              <p className="date"><a href={event.link}  target="_blank"  rel="noopener noreferrer">{event['month-abbrev']}<b>{event.day}</b></a></p>
              <h3>{event.name}</h3>
              <p><a href={event.link} target="_blank"  rel="noopener noreferrer">{event.synopsis}</a></p>
            </li>);
          })}
          </ul>
        </section>
      </div>
    )
  }
}
