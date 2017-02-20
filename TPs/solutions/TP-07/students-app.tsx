import * as React from 'react';
import Student from './student';
import StudentsFilter from './students-filter';
import StudentsTable from './students-table';
import StudentDetails from './student-details';
import Axios, {AxiosResponse} from 'axios';

interface State {
    readonly students: ReadonlyArray<Student>;
    readonly filter: string;
    readonly selectedStudent: Student;
}

export default class StudentsApp extends React.Component<void, State> {

    constructor() {
        super();
        this.state = {students: [], filter: '', selectedStudent: Student.NULL};
    }

    componentDidMount() {
        Axios.get('src/students.json')
            .then((resp: AxiosResponse) => resp.data)
            .then((students: Student[]) => {
                this.setState(Object.assign({}, this.state, {students: students}));
            })
    }

    render() {
        return (
            <div>
                <StudentsFilter onChange={this.handleFilterChange.bind(this)}/>
                <StudentsTable
                    students={this.filteredStudents()}
                    selectStudent={this.handleSelectStudent.bind(this)}
                />
                <StudentDetails student={this.state.selectedStudent}/>
            </div>)
    }

    handleFilterChange(filter: string) {
        this.setState(Object.assign({}, this.state, {filter}));
    }

    handleSelectStudent(student: Student) {
        this.setState(Object.assign({}, this.state, {selectedStudent: student}));
    }

    filteredStudents() {
        return this.state.students.filter(s =>
        (s.firstname.indexOf(this.state.filter) > -1) || (s.lastname.indexOf(this.state.filter) > -1))
    }
}

