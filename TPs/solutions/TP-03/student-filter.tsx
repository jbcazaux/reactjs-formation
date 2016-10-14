import * as React from 'react';

export interface Props {
    readonly onChange: Function;
}

export class Filter extends React.Component<Props, void> {

    onFilterChange(e: any) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <form className="form-inline">
                <label htmlFor="filterVoie" className="control-label">Filtrer:</label>
                <input id="filterVoie"
                       type="text"
                       placeholder="Tapez un nom..."
                       onChange={this.onFilterChange.bind(this)}
                       className="form-control"
                       style={{marginLeft: '5px'}}
                />
            </form>
        )
    }
}

