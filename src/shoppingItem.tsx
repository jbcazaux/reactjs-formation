import * as React from "react";
import * as axios from "axios";
import {Item} from "./Item";

export interface Props {
    item: Item;
    del: () => void
}

export const ShoppingItem = ({item, del}: Props) =>
    (
        <li onClick={del}>
            <span>{item.label}</span>:
            <span>{item.price}€</span>
        </li>
    );


