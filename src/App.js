import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import TicketsPage from './pages/TicketsPage';
import LoginPage from './pages/LoginPage';

import { login } from './shared/auth';
import DashboarPage from './pages/DashboarPage';
import AccountInfoPage from './pages/AccountInfoPage';

export class App extends Component {
  state = {
    loading: false,
    signedIn: false,
    email: '',
    password: '',
    error: '',
  }
  onLoadingUpdate = (isLoading) => {
    console.log('Updating loading', isLoading)
    this.setState({ loading: isLoading });
  }
  siginIn = async e => {
    console.log('Sigining in', e, this.state);
    e.preventDefault();
    try {
      const signinInfo = await login(this.state.email, this.state.password);
      console.log('Sigin in', signinInfo);
      if (signinInfo.user) {
        this.setState({
          signedIn: true,
          user: signinInfo.user,
          token: signinInfo.accessToken
        });
      }
    } catch (e) {
      console.log('Error loging in', e);
      this.setState({ error: 'error loging in' });
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
          <Route path='/' exact component={DashboarPage} />
          <Route path='/account-info' component={AccountInfoPage} />
          <Route path='/tickets' component={TicketsPage} />
        </div>
    );
  }
}

export default App;
