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
                <Filter onChange={this.handleFilterChange.bind(this)}/>
                <StudentsTable
                    students={this.filteredStudents()}
                    selectStudent={this.handleSelectStudent.bind(this)}
                />
                <StudentDetails student={this.state.selectedStudent}/>
            </div>)
    }

    private handleFilterChange(filter: string) {
        this.setState(Object.assign({}, this.state, {filter}));
    }

    private handleSelectStudent(student: Student) {
        this.setState(Object.assign({}, this.state, {selectedStudent: student}));
    }

    private filteredStudents() {
        return this.state.students.filter(s =>
        (s.firstname.indexOf(this.state.filter) > -1) || (s.lastname.indexOf(this.state.filter) > -1))
    }
}

