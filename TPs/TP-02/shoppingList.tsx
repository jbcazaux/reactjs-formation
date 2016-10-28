import * as React from "react";
import * as axios from "axios";
import {Item} from "./Item";

export interface Props {

}
export interface State {

}

export class ShoppingList extends React.Component<Props, State> {

    constructor() {
        super();
        // définir l'état par défaut
    }

    componentDidMount() {
        console.log('component did mount');
        axios.get<Item[]>('src/items.json')
            .then(resp => resp.data)
            .then(items => {
                // setter le nouvel état
            })
    }

    render() {
        return (
        )
    }
}


