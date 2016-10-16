import * as React from "react";
import {Student} from "./student";
import {Table} from "react-bootstrap";

export interface Props {
    readonly students: ReadonlyArray<Student>;
    readonly selectStudent: Function;
}

export const StudentsTable = ({students, selectStudent}:Props) => {

};


