import * as React from 'react';
import * as axios from 'axios';
import {Student} from './student';
import {Filter} from './student-filter';
import {StudentsTable} from './student-table';
import {StudentDetails} from './student-details';

interface State {
    readonly students: ReadonlyArray<Student>;
    readonly filter: string;
    readonly selectedStudent: Student;
}

export class StudentsApp extends React.Component<void, State> {

    constructor() {
        super();
        this.state = {students: [], filter: '', selectedStudent: Student.NULL};
    }

    componentDidMount() {
        axios.get('src/students.json')
            .then(resp => resp.data)
            .then((students: Student[]) => {
                this.setState(Object.assign({}, this.state, {students: students}));
            })
    }

    render() {
        return (
            <div>
                <Filter/>
                <StudentsTable/>
                <StudentDetails/>
            </div>
        )
    }

    private handleFilterChange(filter: string) {
    }

    private handleSelectStudent(student: Student) {
    }
}

