import React from 'react';
import Signin from './components/Signin';

export default ({ onSignIn }) => {
  return (
    <Signin onSignIn={onSignIn} />
  )
}