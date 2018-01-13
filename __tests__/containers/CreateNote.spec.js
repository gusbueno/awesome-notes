import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CreateNote from '../../src/containers/CreateNote';

Enzyme.configure({ adapter: new Adapter() });

const storeFake = {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {}
};

const mockNavigation = {
    setParams: () => {}
};

describe('<CreateNote /> container', () => {

    it('CreateNote should match with the snapshot', () => {
        const tree = renderer.create(
            <Provider store={storeFake}>
                <CreateNote navigation={mockNavigation} />
            </Provider>
        );
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const createNoteShallow = shallow(
        <Provider store={storeFake}>
            <CreateNote navigation={mockNavigation} />
        </Provider>
    );

    it('CreateNote should exists', () => {
        expect(createNoteShallow.length).toEqual(1);
    });
});