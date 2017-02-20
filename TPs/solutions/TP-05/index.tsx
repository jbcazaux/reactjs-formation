import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import ShoppingList from './shopping-list';
import {createStore, applyMiddleware, ThunkAction } from 'redux';
import thunk from 'redux-thunk';
import State from './reducers/state';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

type ThunkAction2<R> = ThunkAction<R, State, void>;
export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction2<R>;

ReactDOM.render(
    <Provider store={store}>
        <ShoppingList title="liste de courses"/>
    </Provider>,
    document.getElementById("app")
);