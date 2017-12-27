import React from 'react';
import { View, Text, Animated } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from 'react-native-vector-icons/Ionicons';

Enzyme.configure({ adapter: new Adapter() });

import NoFavouriteNotes from '../../../src/components/Notes/NoFavouriteNotes';
import { StackNavigator } from 'react-navigation';

jest.useFakeTimers();

describe('<NoFavouriteNotes /> Component', () => {
    it('NoFavouriteNotes should match with snapshot', () => {
        const tree = renderer.create(
            <NoFavouriteNotes />
        );
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const noFavouriteNotesShallow = shallow(<NoFavouriteNotes />);

    it('NoFavouriteNotes should exists', () => {
        expect(noFavouriteNotesShallow.length).toEqual(1);
    });

    it('NoFavouriteNotes should has three View', () => {
        expect(noFavouriteNotesShallow.find(View)).toHaveLength(3);
    });

    it('NoFavouriteNotes should has one Animated.View', () => {
        expect(noFavouriteNotesShallow.find(Animated.View)).toHaveLength(1);
    });

    it('NoFavouriteNotes should has two Text', () => {
        expect(noFavouriteNotesShallow.find(Text)).toHaveLength(2);
    });

    it('NoFavouriteNotes should has two Icon', () => {
        expect(noFavouriteNotesShallow.find(Icon)).toHaveLength(2);
    });
});