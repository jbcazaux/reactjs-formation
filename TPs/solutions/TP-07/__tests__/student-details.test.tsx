import * as React from "react";
import {shallow} from 'enzyme';
import Student from '../src/student';
import StudentDetails from '../src/student-details';

describe('<StudentDetails>', () => {
    it('renders with no Student', () => {
        const component = shallow(<StudentDetails student={Student.NULL}/>);
        expect(component.text()).toContain('Aucun étudiant sélectionné');
    });
    it('renders with a Student', () => {
        const component = shallow(
            <StudentDetails student={new Student(1, 'last', 'first', [1, 2])}/>
        );
        expect(component.text()).toContain('first last');
    });
});