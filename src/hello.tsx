import * as React from "react";

export interface Props { name: string;
}
export const Hello = ({name}: Props) => <h1>Hello {name}!</h1>;


export class CommentList extends React.Component<Props, void>{
    render() {
        return (
            <h1>Hello {this.props.name}!</h1>
        );
    }
}