import * as React from 'react';
import {Item} from './Item';

export interface Props {
    item: Item
}

export const ShoppingItem = ({item}: Props) =>
    (
        <li >
            <span>{item.label}</span>:
            <span>{item.price}€</span>
        </li>
    );


