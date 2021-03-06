import * as React from 'react';
import Item from './item';
import ShoppingItem from './shopping-item';
import {addItems, fetchItems} from './actions/items';
import State from './reducers/state';
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
    onAddItems: (items: ReadonlyArray<Item>) => void;
    fetchItems: () => Promise<Item[]>;
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
        onAddItems: (items: ReadonlyArray<Item>) => dispatch(addItems(items)),
        fetchItems: () => dispatch(fetchItems())
    };
};

class ShoppingList_ extends React.Component<Props, LocalState> {

    constructor() {
        super();
        this.state = {newItem: '', newPrice: 0};
    }

    componentDidMount() {
        this.props.fetchItems();
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

const ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList_);
export default ShoppingList;