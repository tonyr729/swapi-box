import React, { Component } from 'react';
import APIManager from '../../../Helpers/API/API Manager/apiManager'
import './index.css'


class Crawl extends Component {
  constructor() {
    super();
    this.state = {
      episode: '',
      title: '',
      crawl: '',
      release: ''
    }
  }

  async componentDidMount(){
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    const api = new APIManager();
    const crawl = await api.fetchCrawl(randomNumber)
    this.setCrawl(crawl)
  }

  setCrawl = ({episode, title, crawl, release}) => {
    this.setState({ episode, title, crawl, release})
  }


  render(){ 
    return (
      <div className="crawl-container">
        <div className="fade"></div>
        <section className="star-wars">
          <div className="crawl">
          <div className="title">
            <p>Episode {this.state.episode}</p>
            <h1>{this.state.title}</h1>
          </div>
            <p>{this.state.crawl}</p>
            <p>{this.state.release}</p>
          </div>
        </section>
        {/* <p className="crawl-skip">Press Enter to skip</p> */}
      </div>
    )
  }
}



export default Crawl;