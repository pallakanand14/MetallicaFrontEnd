import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import logo from './logo.svg';
import './App.css';
import LiveData from './LiveData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <LiveData />
        </div>
      </div>
    );
  }
}


export default App;
