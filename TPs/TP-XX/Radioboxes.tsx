import * as React from 'react';

interface Props {
    onSelect: (choice: string) => void;
    choices: ReadonlyArray<RadioChoice>;
    value: string;
}

export class Radioboxes extends React.Component<Props, void> {

    render() {
        return (
            <form>
                {
                    this.props.choices.map(choice => (
                        <label key={choice.id}>
                            <input type="radio"
                                   onChange={this.onChangeCreator(choice.id).bind(this)}
                                   checked={this.props.value === choice.id}/>
                            {choice.label}
                        </label>)
                    )
                }
            </form>);
    }

    onChangeCreator(choice: string) {
        return (e: Event) => {
            e.preventDefault();
            this.props.onSelect(choice);
        };
    }
}

export class RadioChoice {
    readonly id: string;
    readonly label: string;

    constructor(id: string, label: string) {
        this.id = id;
        this.label = label;
    }
}
