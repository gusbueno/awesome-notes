import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from 'react-native-vector-icons/Ionicons';

Enzyme.configure({ adapter: new Adapter() });

import HeaderButton from '../../../src/components/common/HeaderButton';

describe('<HeaderButton /> Component', () => {
    it('HeaderButton should match with snapshot', () => {
        const tree = renderer.create(
            <HeaderButton type='plus' action={() => {}} />
        );
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const headerButtonShallow = shallow(<HeaderButton type='plus' action={() => {}} />);

    it('HeaderButton should exists', () => {
        expect(headerButtonShallow.length).toEqual(1);
    });

    it('HeaderButton should has one TouchableOpacity', () => {
        expect(headerButtonShallow.find(TouchableOpacity)).toHaveLength(1);
    });

    it('HeaderButton should has one Icon', () => {
        expect(headerButtonShallow.find(Icon)).toHaveLength(1);
    });
});