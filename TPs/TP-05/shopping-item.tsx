import * as React from 'react';
import Item from './item';

interface Props {
    item: Item
}

const ShoppingItem = ({item}: Props) =>
    (
        <li >
            <span>{item.label}</span>:
            <span>{item.price}€</span>
        </li>
    );
export default ShoppingItem;