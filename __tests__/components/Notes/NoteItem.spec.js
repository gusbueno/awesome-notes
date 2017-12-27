import React from 'react';
import { View, Text, Animated } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NoteItem from '../../../src/components/Notes/NoteItem';

jest.useFakeTimers();

const note = {
   id: 'awesomeId',
   text: 'Awesome text',
   favourite: false,
   createdAt: new Date(601254000000) // my birthday ^^
};

describe('<NoteItem /> Component', () => {
    it('NoteItem should match with snapshot', () => {
        const tree = renderer.create(
            <NoteItem note={note} updateNote={() => {}} deleteNote={() => {}} />
        );
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const noteItemShallow = shallow(<NoteItem note={note} updateNote={() => {}} deleteNote={() => {}} />);

    it('NoteItem should exists', () => {
        expect(noteItemShallow.length).toEqual(1);
    });

    it('NoteItem should has two View', () => {
        expect(noteItemShallow.find(View)).toHaveLength(2);
    });

    it('NoteItem should has one Swipeout', () => {
        expect(noteItemShallow.find(Swipeout)).toHaveLength(1);
    });

    it('NoteItem should has one Animated.View', () => {
        expect(noteItemShallow.find(Animated.View)).toHaveLength(1);
    });

    it('NoteItem should has two Text', () => {
        expect(noteItemShallow.find(Text)).toHaveLength(2);
    });
});