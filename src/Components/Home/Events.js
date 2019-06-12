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
    this.setState({events: events})
  }
  getMonthAbbrev(date){
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[date.getMonth()]
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
              <p className="date"><a href={event.link}>{event['month-abbrev']}<b>{event.day}</b></a></p>
              <h3>{event.name}</h3>
              <p><a href={event.link}>{event.synopsis}</a></p>
            </li>) : (<li className="first" key={event.id}>
              <p className="date"><a href={event.link}>{event['month-abbrev']}<b>{event.day}</b></a></p>
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
