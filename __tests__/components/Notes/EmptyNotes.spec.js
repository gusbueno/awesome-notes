import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from 'react-native-vector-icons/Ionicons';

Enzyme.configure({ adapter: new Adapter() });

import EmptyNotes from '../../../src/components/Notes/EmptyNotes';

jest.useFakeTimers();

describe('<EmptyNotes /> Component', () => {
    it('EmptyNotes should match with snapshot', () => {
        const tree = renderer.create(
            <EmptyNotes gotoCreateNote={() => {}} />
        );
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const emptyNotesShallow = shallow(<EmptyNotes gotoCreateNote={() => {}} />);

    it('EmptyNotes should exists', () => {
        expect(emptyNotesShallow.length).toEqual(1);
    });

    it('EmptyNotes should has four View', () => {
        expect(emptyNotesShallow.find(View)).toHaveLength(4);
    });

    it('EmptyNotes should has one Icon', () => {
        expect(emptyNotesShallow.find(Icon)).toHaveLength(1);
    });

    it('EmptyNotes should has three Text', () => {
        expect(emptyNotesShallow.find(Text)).toHaveLength(3);
    });

    it('EmptyNotes should has one LinearGradient', () => {
        expect(emptyNotesShallow.find(LinearGradient)).toHaveLength(1);
    });
});