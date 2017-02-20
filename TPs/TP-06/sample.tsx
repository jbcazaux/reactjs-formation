import * as React from 'react';
import User from './user';

interface AppContext {
    color: string;
    user: User;
}

class Small extends React.Component<void, void> {

    render() {
        return <div style={{backgroundColor: COLOR_FROM_CONTEXT , height: '125px', width: '33%'}}>
            Small, user = {USER_FROM_CONTEXT}
        </div>;
    }
}

class Medium extends React.Component<void, void> {
    render() {
        return <div style={{backgroundColor: 'red', height: '250px', width: '50%'}}>Medium<Small/></div>;
    }
}

export class Large extends React.Component<void, void> {

    render() {
        return <div style={{backgroundColor: 'blue', color: 'white', height: '300px', width: '75%'}}>
            Large<Medium/>
        </div>;
    }
}
