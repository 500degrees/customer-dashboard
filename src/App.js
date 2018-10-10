import React, { Component } from 'react';
import Layout from './components/Layout';
import TicketsPage from './pages/TicketsPage';

export class App extends Component {
  state = {
    loading: false
  }

  onLoadingUpdate = (isLoading) => {
    console.log('Updaing loading', isLoading)
    this.setState({ loading: isLoading });
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Layout page={<TicketsPage onLoadingUpdate={this.onLoadingUpdate} />} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
