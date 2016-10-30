import {Item} from '../Item';
import {ItemsAction} from '../actions/items';

export const items = (state: ReadonlyArray<Item> = [], action: ItemsAction) => {
        switch (action.type) {
            case 'SET_ITEMS':
                return action.items;
            case 'ADD_ITEMS':
                return state.concat(action.items);
            default:
                return state;
        }
    };