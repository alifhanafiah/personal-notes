import React, { Component } from 'react';
import Header from './components/header/Header';
import Body from './components/main/Body';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Body />
      </>
    );
  }
}

export default App;
