import {Item} from '../Item';
import {ThunkActionCreator} from '../index';
import * as axios from 'axios';

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
    () => axios.get<Item[]>('src/items.json')
        .then(resp => resp.data);

export const fetchItems: ThunkActionCreator<void> = () =>
    (dispatch) => getItems()
        .then(items => {
            dispatch(setItems(items));
        })
        .catch((error: any) => {
            console.log(error);
        });
