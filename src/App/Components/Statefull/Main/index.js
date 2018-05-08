import React, { Component } from 'react';
import './index.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return(
      <div>
        <h1>SWAPI-Box</h1>
        <button>View Favorites</button>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        {/* <CardContainer /> */}
      </div>
    )
  }
}

export default Main;