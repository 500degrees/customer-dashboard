import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import App from './App';

describe("App", () => {
  let shallow, props;
  beforeEach(() => {
    shallow = createShallow();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug());
    expect(wrapper.find('App').length).toEqual(1);    
  });
});
