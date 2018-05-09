import React, { Component } from 'react';
import Header from '../Header/index'
import CardContainer from '../../Components/Stateless/CardContainer/CardContainer'
import APIManager from '../../API/Helpers/API Manager/apiManager'
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
    const people = apiManager.fetchPeople();
    this.setState({
      data: people
    })
  }

  render() {
    return(
      <div className="main">
        <Header setPeopleData={this.setPeopleData}/>
        <CardContainer data={this.data} />
      </div>
    )
  }
}

export default Main;