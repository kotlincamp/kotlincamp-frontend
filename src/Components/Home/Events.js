import React, { Component } from 'react';

export default class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
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
            {events.map(event => (
              <li className="first">
                <p className="date"><a href="#">{this.getMonthAbbrev(event.date)}<b>{event.date.getDate()}</b></a></p>
                <h3>{event.title}</h3>
                <p><a href="#">{event.description}</a></p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    )
  }
}
