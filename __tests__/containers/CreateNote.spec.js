import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CreateNote from '../../src/containers/CreateNote';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

const mockNavigation = {
    setParams: () => {}
};

describe('<CreateNote /> container', () => {
    const store = mockStore();

    it('CreateNote should match with the snapshot', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <CreateNote navigation={mockNavigation} />
            </Provider>
        );
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const createNoteShallow = shallow(
        <Provider store={store}>
            <CreateNote navigation={mockNavigation} />
        </Provider>
    );

    it('CreateNote should exists', () => {
        expect(createNoteShallow.length).toEqual(1);
    });
});