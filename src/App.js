import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import './App.css';
import LiveData from './LiveData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Metallica App</h1>
        </header>

        <div class="topnav">
          <a href="#home" class="active">TRADES</a>
          <a href="#news">TRANSFERS</a>
          <a href="#contact">TRANSPORTS</a>

          {/* <!-- HTML for displaying user details --> */}
          <div class="topnav-right">
            <div class="userContent"></div>
          </div>
          

        </div>
        <div>
          <LiveData />
        </div>
      </div>
    );
  }
}


export default App;
