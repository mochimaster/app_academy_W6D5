import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{

  constructor(props){ // Why do I need prop ??
    super(props); // Why do I need prop ??

    this.state = {date: new Date()};

  }

  componentDidMount(){
    setInterval(this._tick.bind(this),1000);
  }

  _tick(){

    let newDate = new Date();
    // debugger;
    this.setState({date: newDate});
    // console.log("Inside _tick: ",this.state);

  }

  render() {
    let hour = this.state.date.getHours();
    let minute = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();

    let month = this.state.date.getMonth();
    let year = this.state.date.getFullYear();

    return (
      <div>
        <h2>Clock</h2>

        <div class="time">
          <h3>Time: </h3>
          <h4>{hour} : {minute} : {seconds}</h4>
        </div>

        <div class="date">
          <h5>Date: </h5>
          <h6>September {year}</h6>
        </div>

      </div>

    );

  }

}



export default Clock;
