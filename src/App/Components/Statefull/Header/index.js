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
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </div>
    )
  }
}

export default Header;