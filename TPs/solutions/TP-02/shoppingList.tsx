import * as React from "react";
import * as axios from "axios";
import {Item} from "./Item";
import {ShoppingItem} from "./shoppingItem";

export interface Props {
    readonly title: string
}
export interface State {
    readonly items: ReadonlyArray<Item>
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

    componentWillUpdate(nextProps: Props, nextState: State, nextContext: any): void {
        console.log('component will update', nextProps, nextState, nextContext);
    }

    componentDidUpdate(prevProps: Props, prevState: State, prevContext: any): void {
        console.log('component did update', prevProps, prevState, prevContext);
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


