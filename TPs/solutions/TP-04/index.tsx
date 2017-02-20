import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducers/index';
import ShoppingList from './shopping-list';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <ShoppingList title="liste de courses"/>
    </Provider>,
    document.getElementById("app")
);