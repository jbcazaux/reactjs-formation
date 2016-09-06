import * as React from "react";
import * as axios from "axios";
import {Student} from "./student";
import {Filter} from "./student-filter";
import {StudentsTable} from "./student-table";
import {StudentDetails} from "./student-details";


class State {
    constructor(public students: Student[],
                public filter: string,
                public selectedStudent: Student) {
    }
}

export class StudentsApp extends React.Component<void, State> {

    constructor() {
        super();
        this.state = new State([], '', null);
    }

    componentDidMount() {
        axios.get('src/students.json')
            .then(resp => resp.data)
            .then((students: Student[]) => {
                this.setState(new State(students, this.state.filter, this.state.selectedStudent));
            })
    }

    render() {
        return (
            <div>
                <Filter onChange={this.handleFilterChange.bind(this)}/>
                <StudentsTable
                    students={this.state.students.filter(this.filterStudent.bind(this))}
                    selectStudent={this.handleSelectStudent.bind(this)}
                />
                <StudentDetails student={this.state.selectedStudent}/>
            </div>
        )
    }

    private handleFilterChange(filter: string) {
        this.setState(new State(this.state.students, filter, this.state.selectedStudent));
    }

    private handleSelectStudent(student: Student) {
        this.setState(new State(this.state.students, this.state.filter, student));
    }

    private filterStudent(s: Student) {
        return (s.firstname.indexOf(this.state.filter) > -1) || (s.lastname.indexOf(this.state.filter) > -1)
    }
}

