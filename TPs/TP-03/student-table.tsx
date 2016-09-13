import * as React from "react";
import {Student} from "./student";
import {Table} from "react-bootstrap";

export interface Props {
    students: Student[];
    selectStudent: Function;
}

export const StudentsTable = ({students, selectStudent}:Props) => {

};


