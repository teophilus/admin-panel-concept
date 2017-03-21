import React, { Component } from 'react';
import Admin from './components/Admin';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
        <Admin />
      </div>
    );
  }
}

export default App;
