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
      this.setState({people})
    } 
    this.setDisplayedData('people')
  }

  setVehicleData= async () => {
    if(!this.state.vehicles.length) {
      const vehicles = await this.api.fetchVehicles();
      this.setState({vehicles})
    }
    this.setDisplayedData('vehicles')
  }

  setPlanetData = async () => {
    if(!this.state.planets.length) {
      const planets = await this.api.fetchPlanets();
      this.setState({planets})
    }
    this.setDisplayedData('planets');
  }

  setDisplayedData = (category) => {
    this.setState({
      displayed: this.state[category]
    })
  }

  setFavorites = (favoriteCard) => {
    let favorites = [...this.state.favorites];
    if (!favorites.find(favoriteObject => favoriteObject.name === favoriteCard.name)) {
      favorites.push(favoriteCard);
    } else {
      favorites = favorites.filter(item => item.name !== favoriteCard.name);
    }
    this.setState({favorites});
  }

  render() {
    return(
      <div className="main">
        <Header setPeopleData={ this.setPeopleData } setVehicleData={ this.setVehicleData } setPlanetData={ this.setPlanetData } setDisplayedData={ this.setDisplayedData } favorites={ this.state.favorites.length } />
        <CardContainer data={ this.state } setFavorites={ this.setFavorites } />
      </div>
    )
  }
}

export default Main;