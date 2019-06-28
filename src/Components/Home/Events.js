import React, { Component } from 'react';
import { getEvents } from '../../db'


export default class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [],
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  async componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    let events = await getEvents()
    this.setState({events: this.reorderEvents(events)})
  }
  filterEvents(events){
    let filteredEvents = []
    let currentDate = new Date()
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
      return a > b ? -1 : a < b ? 1 : 0;
    })
    return events
  }
  render(){
    let { events, width } = this.state;
    return width > 1280 ? (
      <div id="content" className="col-12">
        <section>
          <header>
            <h2>Upcoming Events</h2>
          </header>
          <ul className="style3">
          {events.map(event => {
            return event === events[0] ? (<li className="first" key={event.id}>
              <p className="date"><a href={event.link}  target="_blank"  rel="noopener noreferrer">{event['month-abbrev']}<b>{event.day}</b></a></p>
              <h3>{event.name}</h3>
              <p><a href={event.link} target="_blank"  rel="noopener noreferrer">{event.synopsis}</a></p>
            </li>) : (<li key={event.id}>
              <p className="date"><a href={event.link} target="_blank"  rel="noopener noreferrer">{event['month-abbrev']}<b>{event.day}</b></a></p>
              <h3>{event.name}</h3>
              <p><a href={event.link}>{event.synopsis}</a></p>
            </li>);
          })}
          </ul>
        </section>
      </div>
    ) : (
      <div id="content" className="col-12">
        <section>
          <header>
            <h2>Upcoming Events</h2>
          </header>
          <ul className="style3">
          {events.map(event => {
            return event === events[0] ? (<li className="first" key={event.id}>
              <p className="date"><a href={event.link}  target="_blank"  rel="noopener noreferrer">{event['month-abbrev']}<b>{event.day}</b></a></p>
              <h3>{event.name}</h3>
              <p><a href={event.link} target="_blank"  rel="noopener noreferrer">{event.synopsis}</a></p>
            </li>) : (<li key={event.id}>
              <p className="date"><a href={event.link} target="_blank"  rel="noopener noreferrer">{event['month-abbrev']}<b>{event.day}</b></a></p>
              <h3>{event.name}</h3>
              <p><a href={event.link}>{event.synopsis}</a></p>
            </li>);
          })}
          </ul>
        </section>
      </div>
    )
  }
}
