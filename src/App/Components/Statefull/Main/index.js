import React, { Component } from 'react';
import Header from '../../Statefull/Header/index'
import './index.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  render() {
    return(
      <div className="main">
        <Header />
          {/* <CardContainer /> */}
      </div>
    )
  }
}

export default Main;