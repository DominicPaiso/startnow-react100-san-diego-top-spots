import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';


const styles = [
  {
    background: '#a8c0ff',
    background: '-webkit-linear-gradient(to right, #3f2b96, #a8c0ff)',
    background: 'linear-gradient(to right, #3f2b96, #a8c0ff)',
    color: 'white'
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {

    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));

  }
  render() {

    return (
      <div className='App'>
        <h1>San Diego Top Spots</h1>
        <div>A list of the top 30 places to see in San Diego, California.</div>
        {this.state.topspots.map(topspot => (
          <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />
        ))}

      </div>
    )
  }

}
