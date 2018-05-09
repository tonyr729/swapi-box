import React, { Component } from 'react';
import APIManager from '../../../API/Helpers/API Manager/apiManager'
import './index.css'
const apiManager = new APIManager();


class Header extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
   
  }

  render() {
    return (
      <div>
        <h1 className="header-title">SWAPI-Box</h1>
        <button onClick>View Favorites 0</button>
        <button onClick={apiManager.fetchPeople()}>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </div>
    )
  }
}

export default Header;