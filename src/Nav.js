import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Notes from './containers/Notes';

export const Nav = StackNavigator(
    {
        Notes: { screen: Notes },
    }, {
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: true,
        },
    }
);

const AppWithStackNavState = ({ dispatch, nav }) => {
    return (
        <Nav navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithStackNavState);