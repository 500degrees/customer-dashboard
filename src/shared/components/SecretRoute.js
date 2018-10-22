import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const SecretRoute = ({ authorized, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return (
      authorized
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
         }} />
    );
  }} />
);

const mapStateToProps = state => ({
  authorized: state.user.loggedIn
});

export default connect(mapStateToProps)(SecretRoute);