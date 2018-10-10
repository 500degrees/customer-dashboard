import React, { Component } from 'react';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', overflow: 'auto' }}>
        <Layout />
      </div>
    );
  }
}

export default App;
