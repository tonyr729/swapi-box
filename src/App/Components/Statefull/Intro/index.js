import React, { Component } from 'react';
import './index.css'

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      hidden: ""
    }
  }

  componentDidMount() {
    setTimeout(this.hide, 70000);
  }

  hide = () => {
    this.setState({
      hidden : "hidden"
    });
  }
  
  render() {
    return (
      <div className={this.state.hidden}>
        <div className="fade"></div>
        <section className="star-wars">
          <div className="crawl">
            <div className="title">
              <p>Episode XIV</p>
              <h1>Darth Zannah</h1>
            </div>
            <p>Zannah, known as "Rain" during her childhood, was a Human female from the planet Somov Rit. She was recruited to fight for the Jedi's Army of Light during the Ruusan campaign of the New Sith Wars
              but, after arriving on Ruusan, was separated from the group during a Sith attack and presumed dead.</p>
            <p>Unbeknownst to the Jedi, she had been saved and befriended by a member of the native Bouncer species called Laa. Not long afterward, the young girl watched as Laa was haplessly killed by Jedi scouts.
              Stricken with anger and grief, she unwittingly gave in to the dark side and murdered the involved Jedi.</p>     
            <p>Her display of rage attracted the attention of the war's only surviving Dark Lord, Darth Bane, who decided to take her as his apprentice. Rain cast away the handle of her youth and instead embraced her birth name, becoming Darth Zannah.</p>
            <p>Now, in a light cruise across deep space shes follows her tutelage under Darth Bane. Her current mission is to execute a
              variety of missions designed to incite anarchist movements throughout the Galactic Republic...</p>
          </div>
        </section>
        <p className="crawl-skip">Press Enter to skip</p>
      </div>
    )
  }
}


export default Intro;