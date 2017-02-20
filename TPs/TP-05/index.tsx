import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {reducer} from './reducers/index';
import ShoppingList from './shopping-list';
import {createStore, applyMiddleware, ThunkAction } from 'redux';
import thunk from 'redux-thunk';
import State from './reducers/state';

const store = null; // TODO !

export type ThunkActionCreator<R> = null; // TODO !

ReactDOM.render(
    <Provider store={store}>
        <ShoppingList title="liste de courses"/>
    </Provider>,
    document.getElementById("app")
);