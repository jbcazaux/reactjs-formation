import * as React from 'react';
import {Item} from './Item';
import {ShoppingItem} from './shoppingItem';
import {setItems, addItems} from './actions/items';
import {State} from './reducers/state';
import {connect} from 'react-redux';

interface OwnProps {
    readonly title: string
}

interface LocalState {
    readonly newItem: string;
    readonly newPrice: number;
}

interface StateProps {
    readonly items: ReadonlyArray<Item>;
}

interface DispatchProps {
    setItems: (items: ReadonlyArray<Item>) => void;
    onAddItems: (items: ReadonlyArray<Item>) => void;
}
type Props = StateProps & OwnProps & DispatchProps;

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps & OwnProps => {
    return {
        items: state.items,
        title: ownProps.title
    };
};
const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        setItems: (items: ReadonlyArray<Item>) => {
            dispatch(setItems(items));
        },
        onAddItems: (items: ReadonlyArray<Item>) => {
            dispatch(addItems(items));
        }
    };
};

class ShoppingList_ extends React.Component<Props, LocalState> {

    constructor() {
        super();
        this.state = {newItem: '', newPrice: 0};
    }

    componentDidMount() {
        this.props.setItems([
            new Item(1, 'pain', 0.95),
            new Item(2, 'gel douche', 2.85),
            new Item(3, 'cahier à spirales', 1.20)
        ]);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        this.props.items.map(item => <ShoppingItem key={item.id} item={item}/>)
                    }
                </ul>
                <form onSubmit={this.addItem.bind(this)}>
                    <input type="text"
                           placeholder="item"
                           onChange={(e: any) =>
                            this.setState(Object.assign({}, this.state, {newItem: e.target.value}))}
                           value={this.state.newItem}
                    />
                    <input type="number"
                           onChange={(e: any) =>
                            this.setState(Object.assign({}, this.state, {newPrice: parseFloat(e.target.value)}))}
                           value={this.state.newPrice}
                    />
                    <button type="submit">add</button>
                </form>
            </div>
        );
    }

    private addItem(e: Event) {
        e.preventDefault();
        this.props.onAddItems([new Item((new Date()).getTime(), this.state.newItem, this.state.newPrice)]);
        this.setState({newItem: '', newPrice: 0});
    }
}

export const ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList_);

