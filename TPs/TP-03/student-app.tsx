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

