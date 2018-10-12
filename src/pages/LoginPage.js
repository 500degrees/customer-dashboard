import React from 'react';
import Signin from './components/Signin';

export default ({ onSignIn, updateField }) => {
  return (
    <Signin onSignIn={onSignIn} update={updateField} />
  )
}