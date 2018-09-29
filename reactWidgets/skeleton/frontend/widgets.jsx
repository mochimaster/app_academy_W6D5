import React from 'react';
import ReactDOM from 'react-dom';
// import clock
import Clock from './clock.jsx';

// const Widgets = () => <h1>Inside Widget jsx</h1>;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // let myClock = new Clock();


  ReactDOM.render(<Widgets />, root);
});

const Widgets = props => {
  return (
    <h1>My Widgets:

      <Clock />

    </h1>



    // make a clock component





    );
  };

export default Widgets;
