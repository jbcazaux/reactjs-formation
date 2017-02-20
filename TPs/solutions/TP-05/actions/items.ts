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

export const fetchItems: ThunkActionCreator<void> = () =>
    (dispatch) => getItems()
        .then(items => {
            dispatch(setItems(items));
        })
        .catch((error: any) => {
            console.log(error);
        });

export const addItemsWithTVA: ThunkActionCreator<void> = (items: ReadonlyArray<Item>) =>
    (dispatch) => {
        const newItems = items.map(item => new Item(item.id, item.label, item.price * 1.206));
        return dispatch(addItems(newItems));
    };