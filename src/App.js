import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboarPage from './pages/DashboarPage';
import SecretRoute from './shared/components/SecretRoute';

export class App extends Component {
  render() {
    return (
        <div style={{ height: '100vh' }}>
          <Route path='/login' render={(props) => <LoginPage {...props}></LoginPage>} />
          <SecretRoute path='/' component={DashboarPage} />
        </div>
    );
  }
}

export default App;
