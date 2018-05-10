import React, { Component } from 'react';
import Crawl from '../../Components/Statefull/Crawl/index'
import Main from '../../Containers/Main/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main />
      {/* <Crawl /> */}
      </div>
    );
  }
}

export default App;
