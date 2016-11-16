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
                    this.props.choices.map(choice => {
                            const checked = this.props.value === choice.id;
                            return (
                                <RadioBox key={choice.id + `-${checked}`}
                                          onChange={this.onChangeCreator(choice.id).bind(this)}
                                          checked={checked}>
                                    {choice.label}
                                </RadioBox>);
                        }
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

interface PropsRadioBox {
    children?: any;
    onChange: () => void;
    checked: boolean;

}
export class RadioBox extends React.Component<PropsRadioBox, void> {
    render() {
        return <label>
            <input type="radio"
                   onChange={this.props.onChange}
                   checked={this.props.checked}/>
            {this.props.children}
        </label>
    }

    shouldComponentUpdate(nextProps: PropsRadioBox): boolean {
        return nextProps.checked !== this.props.checked;
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
