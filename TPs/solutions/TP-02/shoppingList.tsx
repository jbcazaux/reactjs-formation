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

    componentWillMount() {
        console.log('component will mount');
    }

    componentWillReceiveProps(nextProps: Object) {
        console.log('componentWillReceiveProps', nextProps);
    }

    componentWillUpdate(nextProps: Object, nextState: Object) {
        console.log('component will update');
    }

    componentDidUpdate(nextProps: Object, nextState: Object) {
        console.log('component did update');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    componentDidMount() {
        console.log('component did mount');
        axios.get('src/items.json')
            .then(resp => resp.data)
            .then((items: Item[]) => {
                this.setState({items: items});
            })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.state.items.map(item => <ShoppingItem key={item.id} item={item}/>)
                    }
                </ul>
            </div>
        )
    }
}

