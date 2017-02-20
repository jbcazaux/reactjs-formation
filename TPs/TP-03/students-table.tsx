import * as React from "react";
import Student from "./student";
import {Table} from "react-bootstrap";

interface Props {
    readonly students: ReadonlyArray<Student>;
    readonly selectStudent: Function;
}

const StudentsTable = ({students, selectStudent}:Props) => {

};
export default StudentsTable;


