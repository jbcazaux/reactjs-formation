import * as React from 'react';
import User from './user';

interface AppContext {
    color: string;
    user: User;
}

class Small extends React.Component<void, void> {

    context: AppContext;

    static contextTypes = {
        color: React.PropTypes.string.isRequired,
        user: React.PropTypes.object.isRequired
    };

    render() {
        return <div style={{backgroundColor: this.context.color, height: '125px', width: '33%'}}>
            Small, user = {this.context.user.login}
        </div>;
    }
}

class Medium extends React.Component<void, void> {
    render() {
        return <div style={{backgroundColor: 'red', height: '250px', width: '50%'}}>Medium<Small/></div>;
    }
}

export class Large extends React.Component<void, void> {

    static childContextTypes = {
        color: React.PropTypes.string.isRequired,
        user: React.PropTypes.object.isRequired
    };

    getChildContext(): AppContext {
        return {color: 'purple', user: new User(1, 'admin')};
    }

    render() {
        return <div style={{backgroundColor: 'blue', color: 'white', height: '300px', width: '75%'}}>
            Large<Medium/>
        </div>;
    }
}
