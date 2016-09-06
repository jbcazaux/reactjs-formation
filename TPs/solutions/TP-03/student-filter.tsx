import * as React from "react";

export interface Props {
    onChange: Function;
}

export class Filter extends React.Component<Props, void> {

    private inputText: HTMLInputElement;


    handleFilterChange() {
        this.props.onChange(this.inputText.value)
    }

    render() {
        const inputText = {
            marginLeft: '5px',
        };

        return (
            <form className="form-inline">
                <label htmlFor="filterVoie" className="control-label">Filtrer:</label>
                <input id="filterVoie" type="text" placeholder="Tapez un nom..." ref={(c) => this.inputText = c}
                       onChange={this.handleFilterChange.bind(this)} className="form-control" style={inputText}/>
            </form>
        )
    }
}

