import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Icon from 'react-native-vector-icons/Ionicons';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import NoteButton from '../../../src/components/Notes/NoteButton';

describe('<NoteButton /> Component', () => {
    it('NoteButton should match with snapshot', () => {
       const tree = renderer.create(
           <NoteButton type='plus' />
       ) ;
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const noteButtonShallow = shallow(<NoteButton type='plus' />);

    it('NoteButton should exists', () => {
        expect(noteButtonShallow.length).toEqual(1);
    });

    it('NoteButton should has one View', () => {
        expect(noteButtonShallow.find(View)).toHaveLength(1);
    });

    it('NoteButton should has one Icon', () => {
        expect(noteButtonShallow.find(Icon)).toHaveLength(1);
    });
});