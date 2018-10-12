import React, { Component } from 'react';
import Layout from './components/Layout';
import TicketsPage from './pages/TicketsPage';
import LoginPage from './pages/LoginPage';

import { login } from './shared/auth';

export class App extends Component {
  state = {
    loading: false,
    signedIn: false,
    email: '',
    password: '',
  }
  onLoadingUpdate = (isLoading) => {
    console.log('Updating loading', isLoading)
    this.setState({ loading: isLoading });
  }
  siginIn = async e => {
    console.log('Sigining in', e, this.state);
    e.preventDefault();
    const signinInfo = await login(this.state.email, this.state.password);
    console.log('Sigin in', signinInfo);
    if (signinInfo.user) {
      this.setState({ 
        signedIn: true, 
        user: signinInfo.user, 
        token: signinInfo.accessToken 
      });
    }
  }
  updateField = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  }

  render() {
    const page = this.state.signedIn ? 
    <Layout page={<TicketsPage token={this.state.token} onLoadingUpdate={this.onLoadingUpdate} />} loading={this.state.loading} /> :
    <LoginPage onSignIn={this.siginIn} updateField={this.updateField} />
    return (
      <div style={{ height: '100vh' }}>
        {page}
      </div>
    );
  }
}

export default App;
