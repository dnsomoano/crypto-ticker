import React, { Component } from 'react';
import './App.css';
import CoinList from './CoinList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto currencies</h1>
        </header>
        <CoinList />
      </div>
    );
  }
}

export default App;
