import * as React from 'react';
import {Radioboxes, RadioChoice} from './Radioboxes';

interface LocalState {
    currentValue: string;
}

export class App extends React.Component<void, LocalState> {

    constructor() {
        super();
        this.state = {currentValue: 'choix1'};
    }

    render() {
        return <div>
            <Radioboxes
                onSelect={(choice: string) => this.setState({currentValue: choice})}
                choices={[new RadioChoice('choix1', 'Choix 1'), new RadioChoice('choix2', 'Choix 2')]}
                value={this.state.currentValue}/>
        </div>;
    }

    shouldComponentUpdate(): boolean {
        return true; //default
    }

    componentDidUpdate(_: void, prevState: LocalState): void {
        console.log('before', prevState, 'after', this.state);
    }
}
