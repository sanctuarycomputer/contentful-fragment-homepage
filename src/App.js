import React, { Component } from 'react';

import 'what-input';

import MainContainer from 'containers/MainContainer';

import "./styles/app.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;