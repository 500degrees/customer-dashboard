import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboarPage from './pages/DashboarPage';
import SecretRoute from './shared/components/SecretRoute';

export class App extends Component {
  render() {
    return (
        <div style={{ height: '100vh' }}>
          <Switch>
            <Route path='/login' render={(props) => <LoginPage {...props}></LoginPage>} />
            <SecretRoute path='/' component={DashboarPage} />
          </Switch>
        </div>
    );
  }
}

export default App;
