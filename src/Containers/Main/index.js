import React, { Component } from 'react';
import Header from '../../Components/Stateless/Header'
import CardContainer from '../CardContainer/CardContainer'
import APIManager from '../../Helpers/API/API Manager/apiManager'
import './index.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      favorites: [], 
      displayed: []
    }
    this.api = new APIManager();
  }
  
  setPeopleData= async (category) => {
    if(!this.state.people.length) {
      const people = await this.api.fetchPeople();
      this.setState({
        people: people
      })
    } 
    this.setDisplayedData('people')
  }

  setVehicleData= async () => {
    if(!this.state.vehicles.length) {
      const vehicles = await this.api.fetchVehicles();
      this.setState({
        vehicles: vehicles
      })
    }
    this.setDisplayedData('vehicles')
  }

  setPlanetData = async () => {
    if(!this.state.planets.length) {
      const planets = await this.api.fetchPlanets();
      this.setState({
        planets: planets
      })
    }
    this.setDisplayedData('planets');
  }

  setDisplayedData = (category) => {
    this.setState({
      displayed: this.state[category]
    })
  }

  render() {
    return(
      <div className="main">
        <Header setPeopleData={ this.setPeopleData } setVehicleData={ this.setVehicleData } setPlanetData={ this.setPlanetData } favorites={ this.state.favorites.length } />
        <CardContainer data={ this.state.displayed } />
      </div>
    )
  }
}

export default Main;