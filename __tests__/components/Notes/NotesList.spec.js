import React from 'react';
import { View, VirtualizedList } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NotesList from '../../../src/components/Notes/NotesList';

const notes = [{ id: 'awesomeId', text: 'Awesome text', favourite: false, createdAt: new Date(601254000000)}];

describe('<NotesList /> Component', () => {
    it('NotesList should match with snapshot', () => {
        const tree = renderer.create(
            <NotesList notes={notes} updateNote={() => {}} deleteNote={() => {}}/>
        );
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const notesListShallow = shallow(<NotesList notes={notes} updateNote={() => {}} deleteNote={() => {}}/>);

    it('NotesList should exists', () => {
        expect(notesListShallow.length).toEqual(1);
    });

    it('NotesList should has one View', () => {
        expect(notesListShallow.find(View)).toHaveLength(1);
    });

    it('NotesList should has one VirtualizedList', () => {
        expect(notesListShallow.find(VirtualizedList)).toHaveLength(1);
    });
});