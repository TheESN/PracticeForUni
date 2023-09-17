import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.result.replaceAll(" ", "_") }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('https://www.mocky.io/v2/5c7db5e13100005a00375fda');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  render() {
    return (
      <div>
        <h1>Test</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;