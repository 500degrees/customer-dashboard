import React from 'react';
import ReactDOM from 'react-dom';
/* eslint-disable */
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
// pick utils
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import {Provider} from 'react-redux';
import createStore from './store';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={createStore()}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router>
                <App />
            </Router>
        </MuiPickersUtilsProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
