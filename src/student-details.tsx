import * as React from "react";
import {Student} from "./student";

export interface Props {
    student: Student;
}


export class StudentDetails extends React.Component<Props, void> {

    render() {
        return this.props.student ?
            this.renderDetails() :
            this.renderNoSelection()
    }

    private renderDetails() {
        const style = {
            'margin': '20px'
        };

        return <div style={style}>{[this.props.student.firstname, ' ', this.props.student.lastname]}</div>
    }

    private renderNoSelection() {
        const style = {
            'margin': '20px',
            'backgroundColor': 'red'
        };
        return <div style={style}>Aucun étudiant sélectionné</div>
    }
}

