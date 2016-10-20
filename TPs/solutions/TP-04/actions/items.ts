import {Item} from '../Item';

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