import React, { Component } from 'react';
import './index.css'


class Header extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 className="header-title">SWAPI-Box</h1>
        <button>View Favorites 0</button>
        <button onClick={ this.props.setPeopleData }>People</button>
        <button onClick={ this.props.setPlanetData }>Planets</button>
        <button onClick={ this.props.setVehicleData }>Vehicles</button>
      </div>
    )
  }
}

export default Header;