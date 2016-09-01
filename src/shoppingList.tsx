import * as React from "react";
import * as axios from "axios";
import {Item} from "./Item";
import {ShoppingItem} from "./shoppingItem";

export interface Props {
    title: string
}
export interface State {
    items: Item[];
}


export class ShoppingList extends React.Component<Props, State> {

    constructor() {
        super();
        this.state = {items: []};
    }

    componentDidMount() {
        axios.get('src/items.json')
            .then(resp => resp.data)
            .then((items: Item[]) => {
                this.setState({items: items});
            })
    }

    deleteItem() {
        let newItems = this.state.items.slice(1);
        this.setState({items: newItems});
    }

    render() {
        return (<ShoppingListInternal
                title={this.props.title}
                items={this.state.items}
                del={this.deleteItem.bind(this)}/>
        )
    }
}

interface PropsInt {
    title: string;
    items: Item[];
    del: () => void
}
const ShoppingListInternal = ({title, items, del}: PropsInt) => (
    <div>
        <h2>{title}</h2>
        <ul>
            {
                items.map(item => {
                    return (
                        <li onClick={del}>
                            <span>{item.label}</span>:
                            <span>{item.price}€</span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
);


