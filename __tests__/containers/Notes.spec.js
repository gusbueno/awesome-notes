import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Notes from '../../src/containers/Notes';

Enzyme.configure({ adapter: new Adapter() });

const storeFake = {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
        return {
            notes: {
                filterByFavourites: false
            }
        };
    },
};

const mockNavigation = {
    setParams: () => {}
};

describe('<Notes /> container', () => {

    it('Notes should match with the snapshot', () => {
        const tree = renderer.create(
            <Provider store={storeFake}>
                <Notes navigation={mockNavigation} />
            </Provider>
        );
        const json = tree.toJSON();
        expect(json).toMatchSnapshot();
    });

    const notesShallow = shallow(
        <Provider store={storeFake}>
            <Notes navigation={mockNavigation} />
        </Provider>
    );

    it('Notes should exists', () => {
        expect(notesShallow.length).toEqual(1);
    });
});