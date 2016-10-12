import * as React from "react";

export interface Props {
    name: string;
}

export class Hello extends React.Component<Props, void> {
    render() {
        return <h1>Hello {this.props.name}! {this.toArray(5, 6).join(',')}</h1>;
    }

    private toArray<T>(arg: T, arg2: T): T[] {
        return [arg, arg2];
    }
}