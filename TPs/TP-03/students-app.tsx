import * as React from 'react';
import Axios, {AxiosResponse} from 'axios';
import Student from './student';
import StudentsFilter from './students-filter';
import StudentsTable from './students-table';
import StudentDetails from './student-details';

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
                <StudentsFilter/>
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

