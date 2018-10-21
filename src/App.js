import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import TicketsPage from './pages/TicketsPage';
import LoginPage from './pages/LoginPage';
import DashboarPage from './pages/DashboarPage';
import AccountInfoPage from './pages/AccountInfoPage';
import SecretRoute from './components/SecretRoute';

export class App extends Component {
  state = {
    loading: false,
    error: '',
  }
  onLoadingUpdate = (isLoading) => {
    console.log('Updating loading', isLoading)
    this.setState({ loading: isLoading });
  }

  render() {
    return (
        <div style={{ height: '100vh' }}>
          <Route path='/login' render={(props) => <LoginPage {...props} onSignIn={this.siginIn} updateField={this.updateField}></LoginPage>} />
          <SecretRoute path='/' exact component={DashboarPage} />
          <SecretRoute path='/account-info' component={AccountInfoPage} />
          <SecretRoute path='/tickets' reder={(props) => {
            console.log('rendering tickets', props);
            return (
              <Layout 
                page={<TicketsPage 
                  token={this.state.token} 
                  onLoadingUpdate={this.onLoadingUpdate} />}
                loading={this.state.loading} />
            );
          }}/>
        </div>
    );
  }
}

export default App;
