import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
// state = {
//     data: null
//   };

  // componentDidMount() {
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.result.replaceAll(" ", "_") }))
  //     .catch(err => console.log(err));
  // }

  constructor() {
    super();
    this.callGetClient = this.callGetClient.bind(this);
    this.callGetOneClient = this.callGetOneClient.bind(this);
    this.callCreateClient = this.callCreateClient.bind(this);
    // this.showValue = this.showValue.bind(this);
  }

  // showValue(){
  //   alert('name '+ this.clientNameValue.value)
  // }
    
  callGetClient = async () => {
    const response = await fetch('/client', {
      method: "GET"
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  callGetOneClient = async (arg) => {
    const response = await fetch('/client/' + arg, {
      method: "GET"
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  callCreateClient = async () => {
    const name = this.clientNameValue.value;
    const surname = this.clientSurnameValue.value;

    this.clientNameValue.value = "";
    this.clientSurnameValue.value = "";

    const response = await fetch('/client', {
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        surname,
      })
    });
    const body = "";

    if (response.status !== 200) {
      throw Error(body.message) 
    }

    return body;
  };

  render() {
    return (
      <div>
        <h1>Test</h1>
          <input type="text" placeholder='Enter name' ref={el => this.clientNameValue=el}/>
          <input type="text" placeholder='Enter surname' ref={el => this.clientSurnameValue=el}></input>
          <button onClick={this.callCreateClient}>Create Client</button>
      </div>
    );
  }
}

export default App;