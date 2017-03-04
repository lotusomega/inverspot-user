import React, { Component } from 'react';

export default class Countdown extends Component {

  constructor( props ) {
    super(props);
    this.duration = props.duration
    this.state = {
      time: '0d 0h 0m 0s',
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(this.duration), 1000)

  }

  componentWillUnmount() {
    clearInterval( this.interval );
  }

  tick( duration ) {
    // duration /= 1000
    let days = parseInt( duration / 86400, 10 );
    let hours = parseInt( duration % 86400 / 3600 , 10 );
    let minutes = parseInt( duration % 86400 % 3600 / 60, 10 );
    let seconds = parseInt( duration % 86400 % 3600 % 60, 10 );
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    days = days < 10 ? "0" + days : days;
    if ( --duration < 0 ) {
        clearInterval( this.interval );
        // this.props.end = true;
        if ( this.props.onTimeEnd ) {
          setTimeout( this.props.onTimeEnd, 2000 );
        }
    }
    this.duration--
    this.setState({time: days + 'd ' + hours + 'h ' + minutes + "m " + seconds + 's'})
  }

  render() {
    return (
      <button id="demo1" className="button large-counter">{this.state.time}</button>
    );
  }
}
