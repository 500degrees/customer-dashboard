import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SecretRoute from './shared/components/SecretRoute';

const styles = theme => ({
  root: {
    height: '100vh'
  }
});

export class App extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <Switch>
            <Route path='/login' render={(props) => <LoginPage {...props}></LoginPage>} />
            <SecretRoute path='/' component={MainPage} />
          </Switch>
        </div>
    );
  }
}

export default withStyles(styles)(App);
