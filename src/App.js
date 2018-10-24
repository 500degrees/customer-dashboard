import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SecretRoute from './shared/components/SecretRoute';

export class App extends Component {
  render() {
    return (
        <div style={{ height: '100vh' }}>
          <Switch>
            <Route path='/login' render={(props) => <LoginPage {...props}></LoginPage>} />
            <SecretRoute path='/' component={MainPage} />
          </Switch>
        </div>
    );
  }
}

export default App;
