import * as React from "react";
import * as axios from "axios";
import {Item} from "./Item";

export class ShoppingList extends React.Component<Props, State> {

    componentDidMount() {
        axios.get('src/items.json')
            .then(resp => resp.data)
            .then((items: Item[]) => {
                this.setState({items: items});
            })
    }

    render() {
        console.log('rendering !');
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.state.items.map(item => {
                            return <li key={item.id}>
                                <span>{item.label}</span>:
                                <span>{item.price}€</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


