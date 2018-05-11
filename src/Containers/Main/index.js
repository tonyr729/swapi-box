import React, { Component } from 'react';
import Header from '../../Components/Statefull/Header/index'
import CardContainer from '../CardContainer/CardContainer'
import APIManager from '../../Helpers/API/API Manager/apiManager'
import './index.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.api = new APIManager
  }
  
  setPeopleData= async () => {
    const people = await this.api.fetchPeople();
    this.setState({
      data: people
    })
  }

  setVehicleData= async () => {
    const vehicles = await this.api.fetchVehicles();
    this.setState({
      data: vehicles
    })
  }

  setPlanetData= async () => {
    const planets = await this.api.fetchPlanets();
    this.setState({
      data: planets
    })
  }

  render() {
    return(
      <div className="main">
        <Header setPeopleData={ this.setPeopleData } setVehicleData={ this.setVehicleData } setPlanetData={ this.setPlanetData }/>
        <CardContainer data={ this.state.data } />
      </div>
    )
  }
}

export default Main;