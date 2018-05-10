import React, { Component } from 'react';
import Header from '../../Components/Statefull/Header/index'
import CardContainer from '../CardContainer/CardContainer'
import APIManager from '../../Helpers/API/API Manager/apiManager'
import './index.css';
const apiManager = new APIManager();

class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  setPeopleData= async () => {
    const people = await apiManager.fetchPeople();
    this.setState({
      data: people
    })
  }

  

  render() {
    return(
      <div className="main">
        <Header setPeopleData={ this.setPeopleData }/>
        <CardContainer data={ this.state.data } />
      </div>
    )
  }
}

export default Main;