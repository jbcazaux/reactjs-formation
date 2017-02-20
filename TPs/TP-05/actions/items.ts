import Item from '../item';
import {ThunkActionCreator} from '../index';
import Axios, {AxiosResponse} from 'axios';

export interface ItemsAction {
    type: string;
    items: ReadonlyArray<Item>
}

export const setItems = (items: ReadonlyArray<Item>): ItemsAction => {
    return {
        type: 'SET_ITEMS',
        items
    }
};

export const addItems = (items: ReadonlyArray<Item>): ItemsAction => {
    return {
        type: 'ADD_ITEMS',
        items
    }
};

const getItems: (() => Promise<Item[]>) =
    () => Axios.get('src/items.json')
        .then((resp: AxiosResponse) => resp.data);

export const fetchItems: ThunkActionCreator<????> = () =>
    (dispatch, getState) => {
        return; //TODO !
    };
