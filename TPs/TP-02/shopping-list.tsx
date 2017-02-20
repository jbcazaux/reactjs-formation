import * as React from "react";
import Axios, {AxiosResponse} from "axios";
import Item from "./item";

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
        Axios.get('src/items.json')
            .then((resp: AxiosResponse) => resp.data)
            .then((items: Item[]) => {
                // setter le nouvel état
            })
    }

    render() {
        return null; // TODO !
    }
}


