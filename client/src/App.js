import React, { Component } from 'react';
import './styles/App.css';
import Login from './Login';

class App extends Component {
  render() {
    const isLoggedIn = false;
  
    if (isLoggedIn) {
      return (<h1>Logged In</h1>);
    }

    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
