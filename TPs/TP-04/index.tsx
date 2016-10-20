import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {reducer} from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(
    null, // TODO,
    document.getElementById("app")
);