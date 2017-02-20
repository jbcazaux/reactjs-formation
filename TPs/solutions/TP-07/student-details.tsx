import * as React from 'react';
import Student from './student';

interface Props {
    readonly student: Student;
}

const StudentDetails = ({student}: Props) =>
    (<span>
        {
            student !== Student.NULL
                ? <div style={{'margin': '20px'}}>{[student.firstname, ' ', student.lastname]}</div>
                : <div style={{'margin': '20px', 'backgroundColor': 'red'}}>Aucun étudiant sélectionné !</div>
        }
    </span>);

export default StudentDetails;