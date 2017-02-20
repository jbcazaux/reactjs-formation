import * as React from "react";
import {shallow} from "enzyme";
import StudentsApp from "../src/students-app";
import Student from "../src/student";
import Filter from "../src/student-filter";
import StudentsTable from "../src/student-table";
import StudentDetails from "../src/student-details";

describe('StudentsApp', () => {
    it('renders studentsApp and its sub components', () => {
        const component = shallow(
            <StudentsApp />
        );
        expect(component.find(Filter).exists()).toBeTruthy();
        expect(component.find(StudentsTable).exists()).toBeTruthy();
        expect(component.find(StudentDetails).exists()).toBeTruthy();
    });

    it('updates filter', () => {
        const component = shallow(
            <StudentsApp />
        );
        const instance: StudentsApp = component.instance() as StudentsApp;
        instance.handleFilterChange('newFilter');

        expect(component.state('filter')).toEqual('newFilter');
    });

    it('updates selectedStudent', () => {
        const component = shallow(
            <StudentsApp />
        );
        const instance: StudentsApp = component.instance() as StudentsApp;
        const student = new Student(1, 'last1', 'firt1', []);
        component.setState({students: [], filter: '', selectedStudent: Student.NULL});
        instance.handleSelectStudent(student);

        expect(component.state('selectedStudent')).toEqual(student);
    });

    it('updates filtered students', () => {
        const component = shallow(
            <StudentsApp />
        );
        const students = [new Student(1, 'last1', 'firt1', []), new Student(2, 'last2', 'firt2', [])];
        component.setState({students, filter: '2', selectedStudent: Student.NULL});
        const instance: StudentsApp = component.instance() as StudentsApp;
        const result = instance.filteredStudents();

        expect(result).toHaveLength(1);
        expect(result[0]).toEqual(students[1]);
    });

});
