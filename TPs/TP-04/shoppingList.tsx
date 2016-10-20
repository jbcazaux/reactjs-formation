import * as React from 'react';
import {Item} from './Item';
import {ShoppingItem} from './shoppingItem';
import {setItems, addItems} from './actions/items';
import {State} from './reducers/state';
import {connect} from 'react-redux';

interface StateProps {
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps;

const mapStateToProps = null; //TODO
const mapDispatchToProps = null; // TODO

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
                <h2>Titre en dur</h2>
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

