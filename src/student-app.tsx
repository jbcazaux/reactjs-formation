import * as React from "react";


interface Props {
    title: string;
}

export class ButtonApp extends React.Component<Props, void> {
    render() {
        return <Button {...this.props}>hello world</Button>
    }
}

interface ButtonProps {
    title: string;
    children: any;
}

export const Button = ({title, children}: ButtonProps) => (
    <button title={title}>
        {children}
    </button>
);
