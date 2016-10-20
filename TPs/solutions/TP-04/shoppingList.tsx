import * as React from 'react';
import {Item} from './Item';
import {ShoppingItem} from './shoppingItem';
import {setItems, addItems} from './actions/items';
import {State} from './reducers/state';
import {connect} from 'react-redux';

export interface OwnProps {
    readonly title: string
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

class ShoppingList_ extends React.Component<Props, void> {

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
            </div>
        )
    }
}

export const ShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList_);

