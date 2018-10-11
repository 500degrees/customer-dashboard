import React, { Component } from 'react';
import Layout from './components/Layout';
import TicketsPage from './pages/TicketsPage';
import LoginPage from './pages/LoginPage';

export class App extends Component {
  state = {
    loading: false,
    signedIn: false,
  }

  onLoadingUpdate = (isLoading) => {
    console.log('Updaing loading', isLoading)
    this.setState({ loading: isLoading });
  }
  siginIn = () => {
    this.setState({ signedIn: true });
  }

  render() {
    const page = this.state.signedIn ? 
    <Layout page={<TicketsPage onLoadingUpdate={this.onLoadingUpdate} />} loading={this.state.loading} /> :
    <LoginPage onSignIn={this.siginIn} />
    return (
      <div style={{ height: '100vh' }}>
        {page}
      </div>
    );
  }
}

export default App;
