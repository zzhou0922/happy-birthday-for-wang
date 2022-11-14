import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import BirthdaySongForPrelude from '../components/BirthdaySongForPrelude';
import BirthdaySongForLetter from '../components/BirthdaySongForLetter';
import Prelude from '../components/Prelude';
import Letter from '../components/Letter'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'prelude'
    }
    this.onRouteChangeToLetter = this.onRouteChangeToLetter.bind(this)
    this.onRouteChangeToPrelude = this.onRouteChangeToPrelude.bind(this)
  }

  onRouteChangeToLetter(event) {
    this.setState({ route: 'letter' });
  }

  onRouteChangeToPrelude(event) {
    this.setState({ route: 'prelude' });
  }

  render() {
    return (
      <div>
        <ParticlesBg num={1} type="color" bg={true} />
        { this.state.route === 'prelude' 
          ?
          <div>
            <BirthdaySongForPrelude />
            <Prelude />
            <div className='App'>
              <button onClick={this.onRouteChangeToLetter} className="button grow f4 link ph3 pv2 dib" role="button">请摸摸我的头</button>
            </div>
          </div> 
          : 
          <div>
            <BirthdaySongForLetter />
            {/*<Photo1 />*/}
            <Letter />
            <div className='App'>
              <button onClick={this.onRouteChangeToPrelude} className="button grow f4 link ph3 pv2 dib" role="button">摸摸回到前头</button>
            </div>
          </div> 
        }
      </div>
    );
  }
}

export default App;
